import React, {useState, useEffect} from 'react'
import { Api } from 'utils/api'
import { Spinner } from 'components/Spinner';
import { EditSucursalCard } from 'components/SucursalCard/sucursalCard'
import {Modal} from "components/Modal/Modal"
import { Alert } from 'components/MessageBox/Alert';
import { Productos } from 'pages/Productos/Productos';

export const SucursalesSection = () => {

    const {getToken,logout, http, URI} = Api()

    const [sucursales,setSucursales] = useState()

    const [sucursalImgToUpdate, setSucursalImgTopUpdate] = useState() 

    const [showAlert, setShowAlert] = useState(false)
    const [typeAlert, setTypeAlert] = useState('')
    const[message, setMessage] = useState('')

    const [sucursalTopUpdate, setSucursalToUpdate] = useState({
      localidad: '',
      nombre: '',
      barrio: '',
      direccion: '',
      telefono: '',
      urlIframeMap: '',
      urlGoogleMaps: ''
    })

    const [methodToUse,setMethodToUse] = useState()

    const [activeAdd, setActiveAdd] = useState(false)

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
            console.log(res.data)
            setSucursales(res.data)
        } )
      }

    },[sucursales])

    const freshData = () => {
      setActiveAdd(false)
      setSucursalImgTopUpdate()
      setSucursales()
      setSucursalToUpdate(
        {
          localidad: '',
          nombre: '',
          barrio: '',
          direccion: '',
          telefono: '',
          urlIframeMap: '',
          urlGoogleMaps: ''
        }
      )
    }

    const handleSucursalModified = (e) => {
      setSucursalToUpdate({...sucursalTopUpdate,[e.target.name]: `${e.target.value}`})

    }

    const handleClickAdd = (method) => {
      setMethodToUse(method)
      setActiveAdd(true)
    }

    const handleChangeImage = (e) => {
      setSucursalImgTopUpdate(e.target.files[0])
    }

    const handleModifySucursal = (id) => {
      setSucursalToUpdate(sucursales.filter(sucursales => sucursales.id === id)[0])
      setMethodToUse('Modificar')
      // console.log(sucursales.filter(sucursales => sucursales.id === id)[0])
      setActiveAdd(true)
    }

    const formSubmit = (type) => {

      const token = getToken()

      const config = {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
          }
      }

      let formData = new FormData()

      if(type === 'Crear') {

        formData.append('localidad',sucursalTopUpdate.localidad)
        formData.append('nombre',sucursalTopUpdate.nombre)
        formData.append('barrio',sucursalTopUpdate.barrio)
        formData.append('direccion',sucursalTopUpdate.direccion)
        formData.append('telefono',sucursalTopUpdate.telefono)
        formData.append('urlIframeMap',sucursalTopUpdate.urlIframeMap)
        formData.append('urlGoogleMaps',sucursalTopUpdate.urlGoogleMaps)
        sucursalImgToUpdate && formData.append('imgSucursal',sucursalImgToUpdate)

        http.post('api/sucursales', formData, config)
          .then( res => {
            setMessage(res.data)
            setTypeAlert(() => 'green')
            freshData()
            setShowAlert(true)
              setTimeout(() => {
                setShowAlert(() => false)
              }, 3000)
            }).catch((err) => {
              console.log(err.response.data[0])
              setMessage(err.response.data[0])
              setTypeAlert(() => 'red')
              setShowAlert(true)
              setTimeout(() => {
                setShowAlert(() => false)
              }, 3000)
            })

      }

      if(type === 'Modificar') {

        formData.append('localidad',sucursalTopUpdate.localidad)
        formData.append('nombre',sucursalTopUpdate.nombre)
        formData.append('barrio',sucursalTopUpdate.barrio)
        formData.append('direccion',sucursalTopUpdate.direccion)
        formData.append('telefono',sucursalTopUpdate.telefono)
        formData.append('urlIframeMap',sucursalTopUpdate.urlIframeMap)
        formData.append('urlGoogleMaps',sucursalTopUpdate.urlGoogleMaps)
        formData.append('_method', 'PUT')
        sucursalImgToUpdate && formData.append('imgSucursal',sucursalImgToUpdate)


        http.post(`api/sucursales/${sucursalTopUpdate.id}`, formData, config)
          .then( res => {
            setMessage(res.data)
            setTypeAlert(() => 'green')
            freshData()
            setShowAlert(true)
              setTimeout(() => {
                setShowAlert(() => false)
              }, 3000)
            }).catch((err) => {
              console.log(err.response.data[0])
              setMessage(err.response.data[0])
              setTypeAlert(() => 'red')
              setShowAlert(true)
              setTimeout(() => {
                setShowAlert(() => false)
              }, 3000)
            })

      }

      if(type === 'Eliminar') {

        http.delete(`api/sucursales/${sucursalTopUpdate.id}`, config)
        .then( res => {
          setMessage(res.data)
          setTypeAlert(() => 'green')
          freshData()
          setShowAlert(true)
            setTimeout(() => {
              setShowAlert(() => false)
            }, 3000)
          }).catch((err) => {
            console.log(err.response.data[0])
            setMessage(err.response.data[0])
            setTypeAlert(() => 'red')
            setShowAlert(true)
            setTimeout(() => {
              setShowAlert(() => false)
            }, 3000)
          })
      }

    }

  return (
    <div>
        <h1 className='subtitle' style={{ textAlign: 'center' }}>Modificar Sucursales</h1>
        <button className='btn' onClick={() => handleClickAdd('Crear')}>Crear Nueva Sucursal</button>
        <div className='sucursales__container'>
          {sucursales ? (
              sucursales.map((tienda, index) => {
                  return(
                    <EditSucursalCard
                      handleModifySucursal ={handleModifySucursal}
                      tienda={tienda}
                      key={index}
                    />
                  )
              })
          )
          :(<Spinner />)}
        </div>
        {activeAdd && (
          <Modal open={true} setActive={freshData} width={'1200px'}>
            <div>
              <h2>Crear Nueva Sucursal</h2>
              <form>
              <div className=" field">
                <label htmlFor='localidad' className="contact_label">
                  Localidad
                  <input  
                    id={sucursalTopUpdate.id}
                    type="text"
                    className="contact__input" 
                    name='localidad'
                    value={sucursalTopUpdate.localidad}
                    onChange={handleSucursalModified}
                  />
                </label>
              </div>
              <div className=" field">
                <label htmlFor='nombre' className="contact_label">
                  Nombre
                  <input  
                    id={sucursalTopUpdate.id}
                    type="text"
                    className="contact__input" 
                    name='nombre'
                    value={sucursalTopUpdate.nombre}
                    onChange={handleSucursalModified}
                  />
                </label>
              </div>
              <div className=" field">
                <label htmlFor='barrio' className="contact_label">
                  Barrio
                  <input  
                    id={sucursalTopUpdate.id}
                    type="text"
                    className="contact__input" 
                    name='barrio'
                    value={sucursalTopUpdate.barrio}
                    onChange={handleSucursalModified}
                  />
                </label>
              </div>
              <div className=" field">
                <label htmlFor='direccion' className="contact_label">
                  Direccion
                  <input  
                    id={sucursalTopUpdate.id}
                    type="text"
                    className="contact__input" 
                    name='direccion'
                    value={sucursalTopUpdate.direccion}
                    onChange={handleSucursalModified}
                  />
                </label>
              </div>
              <div className=" field">
                <label htmlFor='telefono' className="contact_label">
                  telefono
                  <input  
                    id={sucursalTopUpdate.id}
                    type="number"
                    className="contact__input" 
                    name='telefono'
                    value={sucursalTopUpdate.telefono}
                    onChange={handleSucursalModified}
                  />
                </label>
              </div>
              <div className=" field">
                <label htmlFor='urlIframeMap' className="contact_label">
                  URL de Iframe de Google
                  <input  
                    id={sucursalTopUpdate.id}
                    type="text"
                    className="contact__input" 
                    name='urlIframeMap'
                    value={sucursalTopUpdate.urlIframeMap}
                    onChange={handleSucursalModified}
                  />
                </label>
              </div>
              <div className=" field">
                <label htmlFor='urlGoogleMaps' className="contact_label">
                  URL google maps
                  <input  
                    id={sucursalTopUpdate.id}
                    type="text"
                    className="contact__input" 
                    name='urlGoogleMaps'
                    value={sucursalTopUpdate.urlGoogleMaps}
                    onChange={handleSucursalModified}
                  />
                </label>
              </div>
              <div className=" field">
                <label htmlFor="imgSucursal" className="contact_label" >
                  Subir Imagen Franquicia
                  <input 
                    onChange={handleChangeImage} 
                    id="imgSucursal" 
                    type="file" 
                    className="contact__input" 
                    name="imgSucursal"
                  />
                </label>
              </div>
              {methodToUse === 'Modificar' && (
                <button 
                  className="btn btn__close" 
                  style={{ backgroundColor: 'darkRed' }}
                  onClick={(e) => {
                    formSubmit('Eliminar')
                  e.preventDefault()}}
                >
                  Eliminar
                </button>
              )}
              <button 
                className="btn btn__close"
                onClick={(e) => {
                  formSubmit(methodToUse)
                e.preventDefault()}}
              >
                {methodToUse}
              </button>
              </form>
            </div>
          </Modal>
        )}
        {showAlert ? (
          <Alert type={typeAlert}>
            {message}
          </Alert>): ('')
          }
    </div>
  )
}
