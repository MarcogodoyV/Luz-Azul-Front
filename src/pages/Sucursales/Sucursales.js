import React, {useState,useEffect} from 'react'
import "./Sucursales.css"
import { SucursalCard } from 'components/SucursalCard/sucursalCard'
import { MapaSucursales } from 'components/MapaSucursales'
import { Api } from 'utils/api'

export const Sucursales = () => {

  const {http} = Api()

  const [sucursales, setSucursales] = useState()

  const [location, setLocation] = useState(null)

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
          setSucursales(res.data)
      } )
    }

  }, [])

  

  return (
    <>
      <h1 className="title">Sucursales</h1>
      <div className='container'>
        <div className='sucursales__btns'>
          <button className={`btn ${location !== null && "btn__unselected"}`} onClick={() => setLocation(null)}>Todo</button>
          <button className={`btn ${location !== "gbaN"  && "btn__unselected"}`} onClick={() => setLocation("gbaN")}>G.B.A. Norte</button>
          <button className={`btn ${location !== "caba" && "btn__unselected"}`} onClick={() => setLocation("caba")}>CABA</button>
          <button className={`btn ${location !== "pciaBsAs" && "btn__unselected"}`} onClick={() => setLocation("pciaBsAs")}>Pcia. Bs. As.</button>
          <button className={`btn ${location !== "costaAtlantica" && "btn__unselected"}`} onClick={() => setLocation("costaAtlantica")}>Costa Atlantica</button>
          <button className={`btn ${location !== "ctroSur" && "btn__unselected"}`} onClick={() => setLocation("ctroSur")}>Ctro. y Sur del Pais</button>
          <button className={`btn ${location !== "litoralyNorte" && "btn__unselected"}`} onClick={() => setLocation("litoralyNorte")}>Litoral y Norte del Pais</button>
          <button className={`btn ${location !== "tiendaVirtual" && "btn__unselected"}`} onClick={() => setLocation("tiendaVirtual")}>Tienda Virtual</button>
        </div>
        <div className='sucursales__container'>

          {sucursales && location === null ? (
              sucursales.sort((a, b) => a.nombre.replace("(Tienda Virtual) ", '').localeCompare(b.nombre.replace("(Tienda Virtual) ", ''))).map((tienda, index) => {
                  return (
                    <SucursalCard
                      tienda={tienda}
                      key={index}
                    />
                  )
              })
            ):(
              sucursales && location &&
              sucursales.filter(sucursal => sucursal.localidad === location).map((tienda, index) => {
                return (
                  <SucursalCard
                    tienda={tienda}
                    key={index}
                  />
                )
            })
            )
          }
        </div>
          <MapaSucursales />
        </div>
    </>
  )
}
