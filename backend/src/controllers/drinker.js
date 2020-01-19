const axios = require ('axios')
const Drinkers = require ('../models/drinkers')
const { findConnections , sendMessage } = require ('../websocket')

module.exports = {
   async index(request, response) {
      const drinkers = await Drinkers.find()

      return response.json(drinkers)
   }, 

   async store(request, response) {
      const { github_username, prefdrinks, logitude, latidude } = request.body

      let drinkers = await drinkers.findOne({ github_username })

      if (!drinkers) {
         const githubResponse = await axios.get(`https://api.github.com/users/${github_username}`)
         const { name = login , avatar_url , bio } = githubResponse.data

         const prefdrinksArray = prefdrinks.split(',',).map(prefdrinks => prefdrinks.trim())
         
         drinkers = await Drinkers.create({
            github_username,
            name, 
            avatar_url,
            bio, 
            prefdrinks: prefdrinksArray,
            location : {
               type: 'Point',
                  coordinates : [longitude, latitude]
            }
         })   

         const sendSocketMessageTo = findConnections(
            { latitude, longitude },
            prefdrinksArray
         )

         sendMessage(sendSocketMessageTo, 'new-drinker' , drinker)

      }

      response.json(drinkers)
   }
}
