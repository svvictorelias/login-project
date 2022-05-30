
import React from 'react'
import './AulaCard.css'

const AulaCard = ({ titulo, capa, techs, urlVideo }) => {
  const techsArray = techs.split(',')
  const viewArray = techsArray.slice(0, 2)
  const restTechs = techsArray.slice(2,)
  
  return (
    <div className="wrapper">
      <img src={capa} alt="Capa" />
      <div className="techs">
        <h1 className="titleCard">
          <a href={urlVideo} target="_blank">
            {titulo}
          </a>
        </h1>
        <ul>
          {viewArray.map((viewTech,i) => (
            <li key={i}>{viewTech}</li>
          ))}
          <li>+{techsArray.length}</li>
        </ul>
      </div>
    </div>
  )
}

export default AulaCard