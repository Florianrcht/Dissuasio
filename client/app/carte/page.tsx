import React from 'react'
import './carte.css'
import Carte from '../../composants/Carte/Carte'


const carte = (props: any) => {
  const { position, zoom } = props

  return (
    <main className="main_carte">      
      <Carte  />
    </main>
  )
}

export default carte