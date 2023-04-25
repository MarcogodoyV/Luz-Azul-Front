import React from 'react'
import "./ProductosCard.css"
import { Link } from 'react-router-dom'

export const ProductosCard = ({ params }) => {

    if(params.producto === 'QUESO') {

        const {
            producto,
            nombre,
            cod,
            pesoAprox,
            unidadesPorCaja,
            vidaUtil,
            estacionamiento,
            imagen
        } = params

        return(
        <div className="productosCard boxShadow">
            <div className='productosCard__info'>
                <div className='productosCard__img'>
                    <img className='productosCard__img-img' src={imagen} alt={`foto ${producto} ${nombre}`} loading="lazy"/>
                </div>
                <div className="productosCard__details">
                    <p className="productosCard__details-title">
                    {nombre}
                    </p>
                    <div className="productosCard__details-details">
                        <ul>
                            <li>
                                Peso Aprox. {pesoAprox}Kg.
                            </li>
                            <li>
                                Unidades por caja: {unidadesPorCaja}.
                            </li>
                            <li>
                                Vida útil: {vidaUtil} días.
                            </li>
                            <li>
                                Estacionamiento: {estacionamiento} días.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='productosCard__btnEnlace'>
                    <Link to={`/productos/id/${cod}`}>
                        <button className='btn'>Ver detalles</button>
                    </Link>
                </div>
            </div>
        </div>)

    } else if (params.producto === 'DULCE') {

        const {
            nombre,
            envase,
            cod,
            peso,
            vidaUtil,
            imagen
        } = params;

        return(
            <div className="productosCard boxShadow">
                <div className='productosCard__info'>
                    <div className='productosCard__img'>
                        <img className='productosCard__img' src={imagen} alt={`foto producto ${nombre}`} loading="lazy"/>
                    </div>
                    <div className="productosCard__details">
                        <p className="productosCard__details-title">
                            {nombre}
                        </p>
                        <div className="productosCard__details-details">
                            <ul>
                                <li>
                                    Peso Aprox. {peso}Kg.
                                </li>
                                <li>
                                    Envase {envase}.
                                </li>
                                <li>
                                    Vida útil {vidaUtil} días.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Link to={`/productos/id/${cod}`}>
                            <button className='btn'>Ver detalles</button>
                        </Link>
                    </div>
                </div>
            </div>        
        )
    }else if(params.producto === 'FRESCOS'){

        const {
            nombre,
            envase,
            cod,
            peso,
            vidaUtil,    
            imagen
        } = params;

        return(
        <div className="productosCard boxShadow">
        <div className='productosCard__info'>
            <div className='productosCard__img'>
                <img className='productosCard__img' src={imagen} alt={`foto producto ${nombre}`} loading="lazy"/>
            </div>
            <div className="productosCard__details">
                <p className="productosCard__details-title">
                    {nombre}
                </p>
                <div className="productosCard__details-details">
                    <ul>
                        <li>
                            Peso Aprox. {peso}Kg.
                        </li>
                        <li>
                            Envase {envase}.
                        </li>
                        <li>
                            Vida útil {vidaUtil} días.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Link to={`/productos/id/${cod}`}>
                    <button className='btn'>Ver detalles</button>
                </Link>
            </div>
        </div>
    </div>)
    } else if(params.producto === 'LECHE'){

        const {
            nombre,
            cod,
            tipo,
            litros,  
            envase,
            imagen
        } = params;

        return(
        <div className="productosCard boxShadow">
        <div className='productosCard__info'>
            <div className='productosCard__img'>
                <img className='productosCard__img' src={imagen} alt={`foto producto ${nombre}`} loading="lazy"/>
            </div>
            <div className="productosCard__details">
                <p className="productosCard__details-title">
                    {nombre}
                </p>
                <div className="productosCard__details-details">
                    <ul>
                        <li>
                            Tipo: {tipo}.
                        </li>
                        <li>
                            Litros: {litros}L.
                        </li>
                        <li>
                            Envase: {envase}.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Link to={`/productos/id/${cod}`}>
                    <button className='btn'>Ver detalles</button>
                </Link>
            </div>
        </div>
    </div>)
    } else return null
}
