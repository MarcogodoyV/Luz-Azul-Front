import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Picadas.css'
import banner from "images/picadas/tamano.webp"
import ParaSumarse from 'images/picadas/parasumarse.webp'
import ParaAmigos from 'images/picadas/paraamigos.webp'
import SoloQuesos from 'images/picadas/soloquesos.webp'
import ParaFanaticos from 'images/picadas/parafanaticos.webp'
import Cervecera from 'images/picadas/cervecera.webp'
import { Spinner } from 'components/Spinner'
import { paths } from 'routes/paths'


export const Picadas = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const response = await fetch('https://nube.softwaretempo.com:9569/api/lista-precios/1')
    const data = await response.json()
    setProductos(data)
    setLoading(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchData()
  }, [])

  return (
    <>
    <div className='container'>
        <h1 className="title">Cinco Excusas para encontrarnos</h1>
        <p className='picadas__disclaimer'>Las imágenes contenidas en este sitio son meramente ilustrativas</p>
        <hr className="divider"></hr>
        <img className="picadas__banner" src={banner} alt="Tamaño chico comen de 4 a 6 personas, mediana comen de 6 a 8 personas, grande comen de 8 a 10 personas"></img>
        <hr className="divider"></hr>
        <div className='picada__card'>
          <div className='picada__img'>
            <img src={Cervecera} alt='Imagen Picada Cervecera'></img>
          </div>
          <div className='picada__info'>
            <h2 className='subtitle subtitle__picadas'>Picada <strong>Cervecera</strong></h2>
            <p>Presentación chica, mediana y grande</p>
            <ul className="picada__list">
              <li>- Pategrás</li>
              <li>- Saborizado</li>
              <li>- Mortadela</li>
              <li>- Calabresa</li>
              <li>- Jamón cocido</li>
              <li>- Matambre de Vaca</li>
              <li>- Bondiola</li>
              <li>- Pickles</li>
              <li>- Aceitunas negras</li>
            </ul>
          </div>
          {loading ? <Spinner />: (
            <div className='picada__precios'>
              <div>
                <h2>Precios</h2>
                <p>Pequeña: <strong>${productos.find((producto) => producto.productoId === "818").precio}</strong></p>
                <p>Mediana: <strong>${productos.find((producto) => producto.productoId === "819").precio}</strong></p>
                <p>Grande: <strong>${productos.find((producto) => producto.productoId === "820").precio}</strong></p>
              </div>
              <Link  style={{display: "block", textAlign: "center", margin: ".5rem 0"}} className="btn" to={paths.sucursales.url}>
                Pedila en tu sucursal más cercana <br></br><strong><u>CLICK AQUÍ</u></strong>
              </Link>
            </div>
          )}
        </div>
        <div className='picada__card'>
          <div className='picada__img'>
            <img src={SoloQuesos} alt='Imagen Picada Solo Quesos'></img>
          </div>
          <div className='picada__info'>
            <h2 className='subtitle subtitle__picadas'>Picada <strong>Solo Quesos</strong></h2>
            <p>Presentación chica, mediana y grande</p>
            <ul className="picada__list">
              <li>- Sardo Fresco</li>
              <li>- Gruyere</li>
              <li>- Fontina</li>
              <li>- Cheddar</li>
              <li>- Saborizado</li>
              <li>- Roquefort</li>
              <li>- Bastón Español</li>
              <li>- Aceitunas Verdes y Negras</li>
              <li>- Cerezas</li>
            </ul>
          </div>
          {loading ? <Spinner />: (
          <div className='picada__precios'>
            <div>
              <h2>Precios</h2>
              <p>Pequeña: <strong>${productos.find((producto) => producto.productoId === "805").precio}</strong></p>
              <p>Mediana: <strong>${productos.find((producto) => producto.productoId === "811").precio}</strong></p>
              <p>Grande: <strong>${productos.find((producto) => producto.productoId === "812").precio}</strong></p>
            </div>
            <Link  style={{display: "block", textAlign: "center", margin: ".5rem 0"}} className="btn" to={paths.sucursales.url}>
              Pedila en tu sucursal más cercana <br></br><strong><u>CLICK AQUÍ</u></strong>
            </Link>
          </div>
          )}
        </div>
        <div className='picada__card'>
          <div className='picada__img'>
            <img src={ParaAmigos} alt='Imagen Picada para Amigos'></img>
          </div>
          <div className='picada__info'>
            <h2 className='subtitle subtitle__picadas'>Picada <strong>Para Amigos</strong></h2>
            <p>Presentación chica, mediana y grande</p>
            <ul className="picada__list">
              <li>- Pategrás</li>
              <li>- Gouda</li>
              <li>- Jamón Cocido</li>
              <li>- Jamón Crudo</li>
              <li>- Bondiola</li>
              <li>- Lomo Suizo</li>
              <li>- Bastón Español</li>
              <li>- Bastón Criollo</li>
              <li>- Aceitunas Verdes y Negras</li>
            </ul>
          </div>
          {loading ? <Spinner />: (
            <div className='picada__precios'>
              <div>
                <h2>Precios</h2>
                <p>Pequeña: <strong>${productos.find((producto) => producto.productoId === "813").precio}</strong></p>
                <p>Mediana: <strong>${productos.find((producto) => producto.productoId === "815").precio}</strong></p>
                <p>Grande: <strong>${productos.find((producto) => producto.productoId === "817").precio}</strong></p>
              </div>
              <Link  style={{display: "block", textAlign: "center", margin: ".5rem 0"}} className="btn" to={paths.sucursales.url}>
                Pedila en tu sucursal más cercana <br></br><strong><u>CLICK AQUÍ</u></strong>
              </Link>
            </div>
          )}
        </div>
        <div className='picada__card'>
          <div className='picada__img'>
            <img src={ParaFanaticos} alt='Imagen Picada para Fanaticos'></img>
          </div>
          <div className='picada__info'>
            <h2 className='subtitle subtitle__picadas'>Picada <strong>Para Fanaticos</strong></h2>
            <p>Presentación chica, mediana y grande</p>
            <ul className="picada__list">
              <li>- Roquefort</li>
              <li>- Fontina</li>
              <li>- Pategrás</li>
              <li>- Jamón Crudo</li>
              <li>- Lomo</li>
              <li>- Bondiola</li>
              <li>- Bastón Español</li>
              <li>- Bastón Grueso</li>
              <li>- Leber</li>
              <li>- Cereza</li>
              <li>- Aceitunas negras</li>
            </ul>
          </div>
          {loading ? <Spinner />: (
            <div className='picada__precios'>
              <div>
                <h2>Precios</h2>
                <p>Pequeña: <strong>${productos.find((producto) => producto.productoId === "821").precio}</strong></p>
                <p>Mediana: <strong>${productos.find((producto) => producto.productoId === "822").precio}</strong></p>
                <p>Grande: <strong>${productos.find((producto) => producto.productoId === "823").precio}</strong></p>
              </div>
              <Link  style={{display: "block", textAlign: "center", margin: ".5rem 0"}} className="btn" to={paths.sucursales.url}>
                Pedila en tu sucursal más cercana <br></br><strong><u>CLICK AQUÍ</u></strong>
              </Link>
            </div>
          )}
        </div>
        <div className='picada__card'>
          <div className='picada__img'>
            <img src={ParaSumarse} alt='Imagen Picada para Sumarse'></img>
          </div>
          <div className='picada__info'>
            <h2 className='subtitle subtitle__picadas'>Picada <strong>Para Sumarse</strong></h2>
            <p>Presentación chica, mediana y grande</p>
            <ul className="picada__list">
              <li>- Pategrás</li>
              <li>- Gruyere</li>
              <li>- Panceta Ahumada</li>
              <li>- Jamón Crudo</li>
              <li>- Salame Milán</li>
              <li>- Lomo Suizo</li>
              <li>- Bastón Español</li>
              <li>- Bastón Criollo</li>
              <li>- Aceitunas verdes y negras</li>
            </ul>
          </div>
          {loading ? <Spinner />: (
            <div className='picada__precios'>
              <div>
                <h2>Precios</h2>
                <p>Pequeña: <strong>${productos.find((producto) => producto.productoId === "824").precio}</strong></p>
                <p>Mediana: <strong>${productos.find((producto) => producto.productoId === "825").precio}</strong></p>
                <p>Grande: <strong>${productos.find((producto) => producto.productoId === "826").precio}</strong></p>
              </div>
              <Link  style={{display: "block", textAlign: "center", margin: ".5rem 0"}} className="btn" to={paths.sucursales.url}>
                Pedila en tu sucursal más cercana <br></br><strong><u>CLICK AQUÍ</u></strong>
              </Link>
            </div>
          )}
        </div>
        <hr className="divider"></hr>
        <div className='Picada__bottom'>
          <h3 className='subtitle subtitle__picadas'>
            <strong>Pedí tu picada y retirala en 1 hora!!</strong>
          </h3>
          <p>La variedad y cantidad de productos pueden ser modificada a gusto del cliente</p>
        </div>
      </div>
      
    </>
  )
}
