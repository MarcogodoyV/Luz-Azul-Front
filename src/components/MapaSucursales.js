import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from 'routes/paths'

export const MapaSucursales = () => {

    const {sucursales} = paths

  return (
    <>  
        <Link to={sucursales.url}>
            <h1 className="title">Mapa Sucursales</h1>
        </Link>
        <iframe title='mapa sucursales' src="https://www.google.com/maps/d/embed?mid=12_dL2UlDl0J5c0jzJ61EAbD9YkA6Tl8o&ehbc=2E312F" width="100%" height="500"></iframe>
    </>
  )
}
