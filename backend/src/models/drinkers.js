const mongoose = require('mongoose')
const PointSchema = require('./utils/point')

const DrinkerSchema = new mongoose.Schema({
   name: String, 
   github_username : String, 
   bio:  String, 
   avatar_url: String,
   prefdrinks : [String],
   location: {
      type : PointSchema,
      index : '2dsphere'
   }
})

module.exports = mongoose.model('Drinkers', DrinkerSchema)