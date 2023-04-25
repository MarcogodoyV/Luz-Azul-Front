import React,{useEffect} from 'react'
import './Cajas.css'
import banner from "images/cajas/cajas-banner.webp"
import EmpresarialDegustacion from 'images/cajas/empresarial-degustacion.webp'
import EmpresarialFamiliar from 'images/cajas/empresarial-familiar.webp'
import EmpresarialEjecutiva from 'images/cajas/empresarial-ejecutiva.webp'
import EmpresarialEntendidos from 'images/cajas/empresarial-entendidos.webp'
import Familiar from 'images/cajas/caja-familiar.webp'
import Ejecutiva from 'images/cajas/caja-ejecutiva.webp'
import Degustacion from 'images/cajas/caja-degustacion.webp'
import Entendidos from 'images/cajas/caja-entendidos.webp'


export const Cajas = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className='container'>
        <h1 className="title">Cajas de Regalo</h1>
        <p className='subtitle cajas__subtitle'>La mejor combinación de productos para que descubras un mundo de sabores</p>
        <hr className="divider"></hr>
        <img className="cajas__banner" src={banner} alt="Tamaño chico comen de 4 a 6 personas, mediana comen de 6 a 8 personas, grande comen de 8 a 10 personas"></img>
        <hr className="divider"></hr>
        <div className='cajas__card'>
          <div className='cajas__img'>
            <img src={Familiar} alt='Imagen Caja fin de año familiar'></img>
          </div>
          <div className='cajas__info'>
            <h3 className='subtitle subtitle__cajas'>Caja fin de año <strong>FAMILIAR</strong></h3>
            <ul className="cajas__list">
              <li>- 300 g. Pategrás Luz Azul</li>
              <li>- 1 Mortadelita Tandilera Cagnoli</li>
              <li>- 300 g. Gruyere Luz Azul</li>
              <li>- 250 g. Maní Saborizado Pizza</li>
              <li>- 200 g. Salamín Picado Fino Fox</li>
              <li>- 1 Queso Saborizado Luz Azul</li>
              <li>- 1 Dulce de Leche Familiar x 400 g.</li>
              <li>- 1 Sachet de Aceitunas Verdes Nro 5 Molanes</li>
              <li>- 1 Vino Fuego Negro Malbec</li>
            </ul>
          </div>
        </div>
        <div className='cajas__card'>
          <div className='cajas__img'>
            <img src={Degustacion} alt='Imagen Caja fin de año degustación'></img>
          </div>
          <div className='cajas__info'>
            <h3 className='subtitle subtitle__cajas'>Caja fin de año <strong>DEGUSTACIÓN</strong></h3>
            <ul className="cajas__list">
              <li>- 300 g. Pategrás Luz Azul</li>
              <li>- 300 g. Fontina Luz Azul</li>
              <li>- 300 g. Gruyere Luz Azul</li>
              <li>- 1/2 Unid. Queso Saborizado Luz Azul (distintos sabores)</li>
              <li>- 1/2 unid. Queso Saborizado Luz Azul(distintos sabores)</li>
              <li>- 200 g. Reggianito Estacionado</li>
              <li>- 200 g. Queso Azul Emperador</li>
              <li>- 1 unid. Cerezas Marraschino x 135 g.</li>
              <li>- 1 Sachet x 100 g. Aceitunas Verdes Nro 5 Molanes</li>
              <li>- 1 Sachet x 100 g. Aceitunas Negras</li>
            </ul>
          </div>
        </div>
        <div className='cajas__card'>
          <div className='cajas__img'>
            <img src={Ejecutiva} alt='Imagen Cajas fin de año ejecutiva'></img>
          </div>
          <div className='cajas__info'>
            <h3 className='subtitle subtitle__cajas'>Caja Fin de Año <strong>EJECUTIVA</strong></h3>
            <ul className="cajas__list">
              <li>- 1 Dulce de Leche x 400grs</li>
              <li>- 1 Queso Saborizado Luz Azul</li>
              <li>- 150 g. Queso Azul Emperador</li>
              <li>- 240 g. Chorizo Tipo Casero Cagnoli</li>
              <li>- Aceitunas rellenas x 220 g.</li>
              <li>- 1 Provoleta lista</li>
              <li>- 1 Queso Brie x 100 g.</li>
              <li>- 1 Vino Fuego Negro (Viogner Dulce Natural)</li>
            </ul>
          </div>
        </div>
        <div className='cajas__card'>
          <div className='cajas__img'>
            <img src={Entendidos} alt='Imagen Cajas fin de año  para entendidos'></img>
          </div>
          <div className='cajas__info'>
            <h3 className='subtitle subtitle__cajas'>Caja Fin de Año <strong>PARA ENTENDIDOS</strong></h3>
            <ul className="cajas__list">
              <li>- 1 Kg. Dulce de Leche Familiar</li>
              <li>- 1 Queso saborizado Luz Azul</li>
              <li>- 400 g. Trenza o Cacciotta</li>
              <li>- 1 Queso camembert La Boheme</li>
              <li>- 200 g. Queso Azul Emperador</li>
              <li>- 250 g. Leberwurst Trufas</li>
              <li>- 1 Salame Fuet Cagnoli</li>
              <li>- 220 g. Aceitunas Griegas</li>
              <li>- 1 Vino Fuego Negro (Petit Verdot/ Malbec)</li>
            </ul>
          </div>
        </div>
        <div className='cajas__card'>
          <div className='cajas__img'>
            <img src={EmpresarialFamiliar} alt='Imagen Caja empresarial familiar'></img>
          </div>
          <div className='cajas__info'>
            <h3 className='subtitle subtitle__cajas'>Caja empresarial <strong>FAMILIAR</strong></h3>
            <ul className="cajas__list">
              <li>- 300 g. Pategrás Luz Azul</li>
              <li>- 1 Mortadelita Tandilera Cagnoli</li>
              <li>- 300 g. Gruyere Luz Azul</li>
              <li>- 250 g. Maní Saborizado Pizza</li>
              <li>- 200 g. Salamín Picado Fino Fox</li>
              <li>- 1 Queso Saborizado Luz Azul</li>
              <li>- 1 Dulce de Leche Familiar x 400 g.</li>
              <li>- 1 Sachet de Aceitunas Verdes Nro 5 Molanes</li>
              <li>- 1 Vino Fuego Negro Malbec</li>
            </ul>
          </div>
        </div>
        <div className='cajas__card'>
          <div className='cajas__img'>
            <img src={EmpresarialDegustacion} alt='Imagen Caja empresarial degustación'></img>
          </div>
          <div className='cajas__info'>
            <h3 className='subtitle subtitle__cajas'>Caja empresarial <strong>DEGUSTACIÓN</strong></h3>
            <ul className="cajas__list">
              <li>- 300 g. Pategrás Luz Azul</li>
              <li>- 300 g. Fontina Luz Azul</li>
              <li>- 300 g. Gruyere Luz Azul</li>
              <li>- 1/2 Unid. Queso Saborizado Luz Azul (distintos sabores)</li>
              <li>- 1/2 unid. Queso Saborizado Luz Azul(distintos sabores)</li>
              <li>- 200 g. Reggianito Estacionado</li>
              <li>- 200 g. Queso Azul Emperador</li>
              <li>- 1 unid. Cerezas Marraschino x 135 g.</li>
              <li>- 1 Sachet x 100 g. Aceitunas Verdes Nro 5 Molanes</li>
              <li>- 1 Sachet x 100 g. Aceitunas Negras</li>
            </ul>
          </div>
        </div>
        <div className='cajas__card'>
          <div className='cajas__img'>
            <img src={EmpresarialEjecutiva} alt='Imagen Caja empresarial ejecutiva'></img>
          </div>
          <div className='cajas__info'>
            <h3 className='subtitle subtitle__cajas'>Caja empresarial <strong>EJECUTIVA</strong></h3>
            <ul className="cajas__list">
              <li>- 1 Dulce de Leche x 400grs</li>
              <li>- 1 Queso Saborizado Luz Azul</li>
              <li>- 150 g. Queso Azul Emperador</li>
              <li>- 240 g. Chorizo Tipo Casero Cagnoli</li>
              <li>- Aceitunas rellenas x 220 g.</li>
              <li>- 1 Provoleta lista</li>
              <li>- 1 Queso Brie x 100 g.</li>
              <li>- 1 Vino Fuego Negro (Viogner Dulce Natural)</li>
            </ul>
          </div>
        </div>
        <div className='cajas__card'>
          <div className='cajas__img'>
            <img src={EmpresarialEntendidos} alt='Imagen Caja empresarial para entendidos'></img>
          </div>
          <div className='cajas__info'>
            <h3 className='subtitle subtitle__cajas'>Caja empresarial <strong>PARA ENTENDIDOS</strong></h3>
            <ul className="cajas__list">
              <li>- 1 Kg. Dulce de Leche Familiar</li>
              <li>- 1 Queso saborizado Luz Azul</li>
              <li>- 400 g. Trenza o Cacciotta</li>
              <li>- 1 Queso camembert La Boheme</li>
              <li>- 200 g. Queso Azul Emperador</li>
              <li>- 250 g. Leberwurst Trufas</li>
              <li>- 1 Salame Fuet Cagnoli</li>
              <li>- 220 g. Aceitunas Griegas</li>
              <li>- 1 Vino Fuego Negro (Petit Verdot/ Malbec)</li>
            </ul>
          </div>
        </div>
        <hr className="divider"></hr>
        <div className='cajas__bottom'>
          <h3 className='subtitle subtitle__cajas'>Pedí tu caja en <strong>Nuestras Sucursales</strong></h3>
          <p>La variedad y cantidad de productos pueden ser modificada a gusto del cliente</p>
        </div>
      </div>
      
    </>
  )
}