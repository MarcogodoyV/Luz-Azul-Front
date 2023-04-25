import React, {useEffect} from 'react'
import "./Franquiciado.css"
import { Link } from 'react-router-dom'
import Fondo1 from 'images/franquiciado/1.webp'
import Fondo2 from 'images/franquiciado/2.webp'
import Fondo3 from 'images/franquiciado/3.webp'
import Fondo4 from 'images/franquiciado/4.webp'
// import Fondo5 from 'images/franquiciado/5.webp'
// import Fondo6 from 'images/franquiciado/6.webp'
import Fondo7 from 'images/franquiciado/7.webp'
import Fondo8 from 'images/franquiciado/8.webp'
import Bienvenida from 'images/header.png'

export const Franquiciado = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const tarjetas = [
    {title: "1. Video institucional", img:Fondo1},
    {title: "2. Apertura local", img:Fondo2},
    {title: "3. Plantillas de Manejo de Local y Fichas Técnicas", img:Fondo3},
    {title: "4. Tutoriales de Manejo de Mercaderia", img:Fondo7},
    {title: "5. Tutoriales y Plantillas de Manejo de Software", img:Fondo8},
    {title: "6. Reuniones franquiciados", img:Fondo4},
    // {title: "5. Pedidos ya", img:Fondo5},
    // {title: "6. Capacitación Personal", img:Fondo6},
  ]

  return (
    <div>
      <div className='informacionUtil container'>
        <img src={Bienvenida}></img>
        <p className='informacionUtil_subtitle subtitle'>En esta sitio vas a encontrar información útil acerca de todo lo que implica
        <strong> abrir una franquicia Luz Azul</strong>, desde documentos con explicaciones, conocimientos y herramientas a tu alcance, 
        para que los tengas como respaldo a las dudas que vayan surgiendo en la puesta en marcha de tu local.</p>
        <p className='informacionUtil_subtitle subtitle'><strong>¡Te damos la bienvenida a la Familia Luz Azul!</strong></p>
      </div>
      <div className='franquiciado__container container'>
        {tarjetas.map (({title,img}, index) => {
          return (
            <TarjetaFranquicia title={title} img={img} key={title} index={index}/>
          )
        })}
      </div>
    </div>
  )
}


const TarjetaFranquicia = ({title,img, index}) => {
  return (
    <Link to={`/franquiciado/${index}`}>
      <div className='franquiciadoCard boxShadow' style={{backgroundImage: `url(${img})`}}>
        <p>{title}</p>
      </div>
    </Link>
  )
}