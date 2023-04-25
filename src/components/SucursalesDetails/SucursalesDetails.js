import { Spinner } from 'components/Spinner'
import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
// import { InfoSucursales } from 'utils/InfoSucursales'
import "./SucursalesDetails.css"
import { Api } from 'utils/api'

export const SucursalesDetails = () => {

  const {http, URI} = Api()

  const [loader, setLoader] = useState(true)

  const [mapLoader, setMapLoader] = useState(true)

  const [sucursales, setSucursales] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)

    if(!sucursales) {
      const config = {
          headers: {
            // "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
          }
      }

      http.get('api/sucursales',config).then((res) => {
          setSucursales(res.data.find((sucursal) => sucursal.nombre === id))
          setLoader(false)
      } )
    }
  }, [])

  const {id} = useParams()

  // const infoSucursal = () => sucursales.find((sucursal) => sucursal.id === id)

  // const {
  //   barrio,
  //   direccion,
  //   telefono,
  //   link,
  //   img,
  //   map
  // } = infoSucursal()

  return (
    <>
    {!loader ?
    (<div className={window.innerWidth < 325 ? "":`container`} style={{ marginBottom: '5rem' }}>
      <h1 className="title">Sucursal {sucursales.barrio}</h1>
      <hr className="divider"></hr>
      <Link to="/sucursales">
        <button className='btn'>Ir a Sucursales</button>
      </Link>
      <div className='sucursalesDetails__container'>
        <div className='sucursalesDetails__box'>
          <div className='sucursalesDetails__box-img'>
            <img src={`${URI}/api/imagensucursal/${sucursales.id}`} alt={`sucursal ${sucursales.barrio}`}></img>
          </div>
          <div className='sucursalesDetails__box-content'>
            <p>Dirección: <strong>{sucursales.direccion}</strong></p>
            <p>Teléfono: <strong>{sucursales.telefono}</strong></p>
            <a href={sucursales.urlGoogleMaps} target='_blank' rel='noreferrer'>
              <button className='btn'>Ver en Google Maps</button>
            </a>
            <a href={`https://wa.me/+549${sucursales.telefono}`} rel='noreferrer' target='_blank'>
              <button className='btn btn-ws'>Escribir a WhatsApp</button>
            </a>
          </div>
        </div>
        <div className='sucursalEmbedMap'>
          { mapLoader && <Spinner /> }
          <iframe onLoad={() => setMapLoader(false)} title={sucursales.urlIframeMap}  src={sucursales.urlIframeMap} width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          
          
        </div>
      </div>
    </div>)
    :
    <Spinner />
    }
    </>
  )
}
