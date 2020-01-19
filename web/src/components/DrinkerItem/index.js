import React from 'react'

import './style.css'

function DrinkerItem({ drinker }){
   return (
      <li className="drinkerItem">
      <header>
      <img src={drinker.avatar_url} alt={drinker.name}/>
      <div className="user-info">
            <strong>{drinker.name}</strong>
            <span>{drinker.prefs.join(',')}</span>
      </div>
      </header>
      <p>{drinker.bio}</p>
      <a href={`https://github.com/${drinker.github_username}`}>Acessar perfil no github</a>
      </li>

   )
}
export default DrinkerItem
