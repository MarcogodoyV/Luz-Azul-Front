import React from 'react'
import { Link } from 'react-router-dom'
import './sucursalCard.css'
import WsSVG from 'images/whatsapp-svg.svg'
import { Api } from 'utils/api'

export const SucursalCard = ({tienda}) => {

  const {URI} = Api()

  const {
    id,
    provincia,
    direccion,
    telefono,
    nombre
  } = tienda;

  // return (
  //   <div className="sucursalCard__card boxShadow">
  //     <div className='sucursalCard__datos'>
  //     <img  src={`${URI}/api/imagensucursal/${id}`} alt='imagen sucursal' className="sucursal__img" loading="lazy"></img>
  //       <p className='sucursalCard__datos-provincia'>{provincia}</p>
  //       <p className="sucursalCard__datos-direccion"><strong>Dir:</strong> {direccion}</p>
  //       <p><strong>Telefono:</strong> {telefono}</p>
  //       <div className='sucursalCard__btns-container'>
  //         <Link to={`/sucursales/${nombre}`}>
  //           <button className='btn btn-alt sucursalCard__btn'>Ver detalles</button>
  //         </Link>
  //         <a href={`https://wa.me/+549${telefono}`} rel='noreferrer' target='_blank'>
  //           <button className='btn btn-alt btn-ws'>
  //             <img className='wsIcon' src={WsSVG} alt="Enviar mensaje a Whatsapp"/>
  //           </button>
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // )

  return(
    <div className="sucursalCard__card boxShadow">
    <div className='sucursalCard__datos'>
      <h2 style={{ color: '#FFF', textAlign: 'center', paddingBottom: '1em' }}>{nombre}</h2>
    <img  src={`${URI}/api/imagensucursal/${id}`} alt='imagen sucursal' className="sucursal__img" loading="lazy"></img>
      <p className='sucursalCard__datos-provincia'>{provincia}</p>
      <p className="sucursalCard__datos-direccion"><strong>Dir:</strong> {direccion}</p>
      <p><strong>Telefono:</strong> {telefono}</p>
      <div className='sucursalCard__btns-container'>
        <Link to={`/sucursales/${nombre}`}>
          <button className='btn btn-alt sucursalCard__btn'>Ver detalles</button>
        </Link>
        <a href={`https://wa.me/+549${telefono}`} rel='noreferrer' target='_blank'>
          <button className='btn btn-alt btn-ws'>
            <img className='wsIcon' src={WsSVG} alt="Enviar mensaje a Whatsapp"/>
          </button>
        </a>
      </div>
    </div>
    
  </div>
  )
}

export const EditSucursalCard = ({tienda,handleModifySucursal}) => {

  const {URI} = Api()

  const {
    id,
    provincia,
    direccion,
    telefono,
    nombre
  } = tienda;

  return (
    <div className="sucursalCard__card boxShadow">
      <div className='sucursalCard__datos'>
        <h2 style={{ color: '#FFF', textAlign: 'center', paddingBottom: '1em' }}>{nombre}</h2>
      <img  src={`${URI}/api/imagensucursal/${id}`} alt='imagen sucursal' className="sucursal__img" loading="lazy"></img>
        <p className='sucursalCard__datos-provincia'>{provincia}</p>
        <p className="sucursalCard__datos-direccion"><strong>Dir:</strong> {direccion}</p>
        <p><strong>Telefono:</strong> {telefono}</p>
        <div className='sucursalCard__btns-container'>
          <Link to={`/sucursales/${nombre.split}`}>
            <button className='btn btn-alt sucursalCard__btn'>Ver detalles</button>
          </Link>
          <a href={`https://wa.me/+549${telefono}`} rel='noreferrer' target='_blank'>
            <button className='btn btn-alt btn-ws'>
              <img className='wsIcon' src={WsSVG} alt="Enviar mensaje a Whatsapp"/>
            </button>
          </a>
        </div>
        <div>
          <button className='btn btn-alt sucursalCard__btn' onClick={() => handleModifySucursal(id)}>Editar</button>
          </div>
      </div>
      
    </div>
  )
}
