import React, { useState, useEffect } from 'react';
import api from './services/api'


import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DrinkerFrom from './components/DrinkerForm/index'
import DrinkerItem from './components/DrinkerItem/index'


function App(){
 
  const [drinkers , setDrinkers] = useState([])

  useEffect(() => {
    async function loadDrinkers() {
      const response = await api.get('/drinkers')

      setDrinkers(response.data) 

      }

      loadDrinkers()
    }, [])

    async function handleAddDrinkers(data) {

      const response = await api.post('/drinkers', data)

      setDrinkers([...drinkers, response.datat])

    }
  return ( 
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DrinkerFrom onSubmit={handleAddDrinkers}/>
      </aside>
      <main>
          <ul>
             {drinkers.map(drinkers => (
               <drinkersItem key={drinkers._id} drinkers={drinkers}/>
             ))}

          </ul>
      </main>
    </div>
  )
}

  




export default App; 