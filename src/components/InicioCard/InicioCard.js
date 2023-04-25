import React from 'react'
import { Link } from 'react-router-dom'
import "./InicioCard.css"
import ImgPicada from "images/picadas/parasumarse.webp"
import ImgProducto from "images/quesos/queso5.webp"
import ImgCaja from "images/cajaLittle.webp"
import { paths } from 'routes/paths'

export const InicioCard = ({type}) => {

    if(type==="picadas"){
        return (
        <div className='InicioCard boxShadow'>
            <Link to={paths.picadas.url}>
                <div className='InicioCard-inner'>
                    <div className='InicioCard__div-img'>
                        <img src={ImgPicada} className="InicioCard-img" alt="Imagen picada"/>
                    </div>
                    <div className='InicioCard-info'>
                        <p className='InicioCard__title'>Picadas</p>
                        <p className='InicioCard__link'>Ver más</p>
                    </div>
                </div>
            </Link>
        </div>
        )
    }else if(type==="products"){
        return(
        <div className='InicioCard boxShadow'>
            <Link to={paths.productos.url}>
                <div className='InicioCard-inner'>
                    <div>
                        <img src={ImgProducto} className="InicioCard-img" alt="Imagen picada"/>
                    </div>
                    <div className='InicioCard-info'>
                        <p className='InicioCard__title'>Productos</p>
                        <p className='InicioCard__link'>Ver más</p>
                    </div>
                </div>
            </Link>
        </div>
        )
  }else if (type==="cajas") {
    return(
    <div className='InicioCard boxShadow'>
        <Link to={paths.cajas.url}>
            <div className='InicioCard-inner'>
                <div>
                    <img src={ImgCaja} className="InicioCard-img" alt="Imagen picada"/>
                </div>
                <div className='InicioCard-info'>
                    <p className='InicioCard__title'>Cajas</p>
                    <p className='InicioCard__link'>Ver más</p>
                </div>
            </div>
        </Link>
    </div>
    )
  }
}
