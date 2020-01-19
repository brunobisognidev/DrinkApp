import React, { useState, useEffect } from 'react'

function DrinkerForm({ onSubmit }) {
   const [github_username, setGithubUsername] = useState('')
   const [drinkers, setDrinkers] = useDrinkers('')
   const [latitude, setLatitude] = useState('')
   const [longitude, setLongitude] = useState('')

 }

 useEffect(() => {
    navigator.geolocation.getCurrentPosition(
       (position) => {
          const { latitude, longitude } = position.coords;

          setLatitude(latitude)
          setLongitude(longitude)
       }, 
       (error) => {
          console.log(error)
       },
       {
          timeout: 30000
       }
    )
 })
 
 async function handleSubmit(e){
    e.preventDefault()

    await onsubmit({
       github_username,
       drinkers,
       latitude,
       longitude
    })

    setGithubUsername('')
    setDrinkers('')
 }
 return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
         <label htmlFor="github_username">Usuário do Github</label>
         <input 
            name="github_username"
            id="github_username"
            required
            value={github_username}
            onCharge={e=> setGithubUsername(e.target.value)}
            />
            </div>

            <div className="input-group">
            <div className="input-block">
               <label htmlFor="latitude">latitude</label>
               <input 

               type="number"
               name="latitude"
               id="latitude"
               required
               value={latitude}
               onChance={e => setLatitude(e.target.value)}
               />
               </div>
               <div className="input-block">
               <label htmlFor="logitude">logitude</label>
               <input
               type="number"
               name= "longitude"
               id="longitude"
               required
               value={longitude}
               onCharge={e => setLongitude(e.target.value)}
               />
               </div>
            </div>
            <button type="submit">Salvar</button>
    </form>
   )
 export default DrinkerForm