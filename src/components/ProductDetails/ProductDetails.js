import React,{useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import { infoProductosNutricional } from 'utils/InfoProductosNutricional'
import './ProductDetails.css'
import { paths } from 'routes/paths'

export const ProductDetails = () => {

  useEffect(() =>{
    window.scrollTo(0,0)
  },[])

  const {cod} = useParams()
  
  const infoProduct = infoProductosNutricional.filter((item) => item.cod.toString() === cod)[0]

  return (
    <div className='container'>
      <Link to={paths.productos.url}>
        <button className='btn generic-margin'>Volver atrás</button>
      </Link>
      {infoProduct === undefined ? (
        <h2>No se encuentra información nutricional por el momento</h2>
      ):(
      <table className='productDetail__table'>
        <thead>
          <tr>
            <td colSpan={3}>INFORMACIÓN NUTRICIONAL</td>
          </tr> 
          <tr>
            <td colSpan={3}>Porción de {infoProduct.porcion}g (1 rebanada)</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Cantidad Por Porción</td>
            <td>%VD <strong>(*)</strong></td>
          </tr>  
          <tr>
            <td>Valor Energético</td>
            <td>{infoProduct.CPP.valorEnergetico}kCAL/ {Math.round(infoProduct.CPP.valorEnergetico*4.184)}kJ</td>
            <td>{infoProduct.VD.valorEnergetico}</td>
          </tr>
          <tr>
            <td>Carbohidratos</td>
            <td>{infoProduct.CPP.carbohidratos}g</td>
            <td>{infoProduct.VD.carbohidratos}</td>
          </tr>
          <tr>
            <td>Proteínas</td>
            <td>{infoProduct.CPP.proteinas}g</td>
            <td>{infoProduct.VD.proteinas}</td>
          </tr>
          <tr>
            <td>Grasas Totales</td>
            <td>{infoProduct.CPP.grasasTotales}g</td>
            <td>{infoProduct.VD.grasasTotales}</td>
          </tr>
          <tr>
            <td>Grasas Saturadas</td>
            <td>{infoProduct.CPP.grasasSaturadas}g</td>
            <td>{infoProduct.VD.grasasSaturadas}</td>
          </tr>
          <tr>
            <td>Grasas Trans</td>
            <td>{infoProduct.CPP.grasasTrans}g</td>
            <td>{infoProduct.VD.grasasTrans}</td>
          </tr>
          <tr>
            <td>Fibra Alimentaria</td>
            <td>{infoProduct.CPP.fibraAlimentaria}g</td>
            <td>{infoProduct.VD.fibraAlimentaria}</td>
          </tr>
          <tr>
            <td>Sodio</td>
            <td>{infoProduct.CPP.sodio}mg</td>
            <td>{infoProduct.VD.sodio}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}><strong>(*)</strong> Valores diarios para la República Argentina con base a una dieta de 2000 Kcal u 8400 KJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.</td>
          </tr>
        </tfoot>
      </table>)
      }
    </div>
  )
}
