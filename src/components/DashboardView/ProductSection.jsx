import React, {useState, useEffect} from 'react'

import { Spinner } from 'components/Spinner';
import { Alert } from 'components/MessageBox/Alert';
import {Modal} from "components/Modal/Modal"
import { Api } from 'utils/api'
import ImagenFondoCategoria from 'images/productos/fondo_categorias_productos.png'

export const ProductSection = () => {

  
  const [catProductos, setCatProductos] = useState()
  
  const [productos,setProductos] = useState()

  const [productImg,setProductImg] = useState()

  const [productImgNutri,setProductImgNutri] = useState()

  const [infoNutriImg,setInfoNutriImg] = useState()

  const [productToUpdate, setProductToUpdate] = useState({
    tipo:'Producto',
    id:'',
    nombre:'',
    descripcion:'',
    nombreCatProducto:'',
    catProductos_id:''
  })

  const [active,setActive] = useState(false)

  const [activeAdd,setActiveAdd] = useState(false)

  const [showAlert, setShowAlert] = useState(false)
  const [typeAlert, setTypeAlert] = useState('')
  const[message, setMessage] = useState('')


  const {http, URI, getToken} = Api()

  useEffect(() => {
    if(!productos || !catProductos) {
      http.get('api/categoriaproductos').then(res => {
        
        setCatProductos(res.data)
      })

      http.get('api/productos').then(res => {
        console.log(res)
        setProductos(res.data)
      })
    }
  },[productos, catProductos])

  const showCard = (producto) => {
    return(
      <div key={producto.id} style={{ paddingTop: '1rem' }}>
        <h3 style={{ color: 'var(--bg)', borderBottom: '1px solid var(--bg)' }}>{producto.nombre}</h3>
        <img src={`${URI+'/api/imagenproducto/'+producto.id}`}></img>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <button style={{ 
            position: 'relative', 
            bottom: '40px', 
            backgroundColor: 'var(--bg)', 
            padding: '.4rem .8rem', 
            border: '0', 
            color: '#FFF', 
            fontWeight: 'bold'
          }}
          onClick={ () => showModal(producto)}
          >
            Modificar
          </button>
        </div>
      </div>
    )
  }

  const showModal = (params)  => {
    
    setProductToUpdate(params)
    setActive(true)
  }

  const freshData = () => {
    setActiveAdd(false)
    setActive(false)
    setProductToUpdate({
      tipo:'Producto',
      id:'',
      nombre:'',
      nombreCatProducto:'',
      catProductos_id:''
    })
    setProductImg()
    setInfoNutriImg()
    setProductos()
  }

  const showCategoria = (tipo) => {
    if(catProductos) {
      let categoria = catProductos.filter(cat => cat.nombreCatProducto == tipo)[0]
      return (
        <div key={categoria.nombreCatProducto} id={`${categoria.nombreCatProducto}`}style={{height: '250px', position: 'relative', backgroundSize: '250px 250px' ,backgroundImage: `url(${ImagenFondoCategoria})`, backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h3>{categoria.nombreCatProducto}</h3>
          <button style={{ 
            position: 'absolute', 
            bottom: '48px',
            right: '20px',
            backgroundColor: '#FFF', 
            padding: '.4rem .8rem', 
            border: '0', 
            color: 'var(--bg)', 
            fontWeight: 'bold'
          }}
          onClick={ () => showModal(categoria)}
          >
            Modificar
          </button>
        </div>
      )
    }
  }

  const handleChangeImageNutriTabla = (e) => {
    setInfoNutriImg(e.target.files[0])
  }

  const handleChangeImage = (e) => {
    setProductImg(e.target.files[0])
  }

  const handleChangeImageInfoNutri = (e) => {
    setProductImgNutri(e.target.files[0])
  }

  const handleChangeProduct = (e) => {
    setProductToUpdate({...productToUpdate,[e.target.name]: `${e.target.value}`})
    console.log(productToUpdate)
    
  }

  const handleClickAdd = () => {
    setProductToUpdate({...productToUpdate,catProductos_id: `${catProductos[0].id}`})
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

      const formData = new FormData()

      if(type == 'post categoria') {

        formData.append('nombreCatProducto', productToUpdate.nombreCatProducto)

        http.post(`api/categoriaproducto`, formData, config)
        .then( res => {
          setMessage(res.data)
          setTypeAlert(() => 'green')
          freshData()
          setShowAlert(true)
          setTimeout(() => {
            setShowAlert(() => false)
          }, 3000)
          freshData()
          }).catch((err) => {
            
            setMessage(err.response.data.message)
            setTypeAlert(() => 'red')
            setShowAlert(true)
              setTimeout(() => {
                setShowAlert(() => false)
              }, 3000)
          })
      }

      if(type == 'put categoria') {

        
        formData.append('nombreCatProducto', productToUpdate.nombreCatProducto)
        formData.append('_method', 'PUT')

        http.post(`api/categoriaproducto/${productToUpdate.id}`,formData, config)
        .then( res => {
          setMessage(res.data)
          setTypeAlert(() => 'green')
          freshData()
          setShowAlert(true)
          setTimeout(() => {
            setShowAlert(() => false)
          }, 3000)
          freshData()
          }).catch((err) => {
            
            setMessage(err.response.data.message)
            setTypeAlert(() => 'red')
            setShowAlert(true)
              setTimeout(() => {
                setShowAlert(() => false)
              }, 3000)
          })
      }

      if(type == 'delete categoria'){

        http.delete(`api/categoriaproducto/${productToUpdate.id}`, config)
        .then( res => {
          setMessage(res.data)
          setTypeAlert(() => 'green')
          freshData()
          setShowAlert(true)
          setTimeout(() => {
            setShowAlert(() => false)
          }, 3000)
          freshData()
          }).catch((err) => {
            
            setMessage(err.response.data.message)
            setTypeAlert(() => 'red')
            setShowAlert(true)
              setTimeout(() => {
                setShowAlert(() => false)
              }, 3000)
          })
      }

      if(type == 'post product') {
        productToUpdate.nombre  && formData.append('nombre',productToUpdate.nombre)
        productToUpdate.descripcion  && formData.append('descripcion',productToUpdate.descripcion)
        productImgNutri && formData.append('imagenNutricional', productImgNutri)
        productImg && formData.append('imgProducto', productImg)
        formData.append('catProductos_id', productToUpdate.catProductos_id)
        infoNutriImg && formData.append('infoNutricional', infoNutriImg)

        http.post(`api/producto`, formData, config)
        .then( res => {
          setMessage(res.data)
          setTypeAlert(() => 'green')
          freshData()
          setShowAlert(true)
          setTimeout(() => {
            setShowAlert(() => false)
          }, 3000)
          freshData()
          }).catch((err) => {
            
            setMessage(err.response.data.message)
            setTypeAlert(() => 'red')
            setShowAlert(true)
              setTimeout(() => {
                setShowAlert(() => false)
              }, 3000)
          })
      }

      if(type == 'put product'){

        productToUpdate.nombre  && formData.append('nombre',productToUpdate.nombre)
        productImg && formData.append('imgProducto', productImg)
        formData.append('catProductos_id', productToUpdate.catProductos_id)
        infoNutriImg && formData.append('infoNutricional', infoNutriImg)
        formData.append('_method', 'PUT')

        http.post(`api/producto/${productToUpdate.id}`, formData, config)
        .then( res => {
          setMessage(res.data)
          setTypeAlert(() => 'green')
          freshData()
          setShowAlert(true)
          setTimeout(() => {
            setShowAlert(() => false)
          }, 3000)
          freshData()
          }).catch((err) => {
            
            setMessage(err.response.data.message)
            setTypeAlert(() => 'red')
            setShowAlert(true)
              setTimeout(() => {
                setShowAlert(() => false)
              }, 3000)
          })
      }

      if(type == 'delete product'){

        http.delete(`api/producto/${productToUpdate.id}`, config)
        .then( res => {
          setMessage(res.data)
          setTypeAlert(() => 'green')
          freshData()
          setShowAlert(true)
          setTimeout(() => {
            setShowAlert(() => false)
          }, 3000)
          freshData()
          }).catch((err) => {
            
            setMessage(err.response.data.message)
            setTypeAlert(() => 'red')
            setShowAlert(true)
              setTimeout(() => {
                setShowAlert(() => false)
              }, 3000)
          })
      }

  }

  return (
    <section>
        <h1 className='subtitle' style={{ textAlign: 'center' }}>Modificacion Categorias y Productos</h1>
        <button className='btn' onClick={handleClickAdd}>Crear Nuevo Producto/Clasificación</button>
        {catProductos ? 
        catProductos.map(cat => cat.nombreCatProducto).map( categoria => {
          return (
            <div key={categoria}className='container productos__container' id='productos_container'>
              {productos && 
              showCategoria(categoria)
              }

              {(productos && productos[categoria]) && 
                productos[categoria].map(producto => {
                  return(
                    showCard(producto)
                  )
                })
              }
            </div>
          )
        }

        ):<Spinner />}

              {/* MODIFICAR/ELIMINAR */}

              {active && 
                <Modal open={true} setActive={freshData} width={'1200px'}>
                    <div style={{ width: '1200px',color: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
                      <form action="" id="form__field" className="contact__form container">
                        {!productToUpdate.catProductos_id &&
                        (<>
                          <div className=" field">
                            <label htmlFor='nombreCatProducto' className="contact_label">
                              Nombre Categoria
                              <input  
                                id={productToUpdate.id}
                                type="text"
                                className="contact__input" 
                                name='nombreCatProducto'
                                value={productToUpdate.nombreCatProducto}
                                onChange={handleChangeProduct}
                              />
                            </label>
                          </div>
                          <button className='btn'
                            onClick={(e) => {
                              formSubmit('delete categoria')
                              e.preventDefault()
                              }
                            }
                            style={{ backgroundColor: 'darkRed' }}
                          >
                            Eliminar
                          </button>
                          <button 
                            className="btn btn__close"
                            onClick={(e) => {
                              formSubmit('put categoria')
                            e.preventDefault()}}
                          >
                            Actualizar
                          </button>
                        </>
                        )}
                        {productToUpdate.nombre != null &&
                        (<>
                            <div className=" field">
                              <label onChange={handleChangeProduct} value={productToUpdate.tipo} htmlFor="catProductos_id" className="contact_label">
                                Tipo de Producto a Modificar
                                <select className="contact__input"  name="catProductos_id" id="tipo">
                                  {catProductos.map(cat => {
                                    return(
                                      <option key={cat.id}value={`${cat.id}`}>{cat.nombreCatProducto}</option>
                                    )
                                  })}
                                </select>
                              </label>
                            </div>
                            <div className=" field">
                              <label htmlFor='nombre' className="contact_label">
                                Nombre
                                <input  
                                  id={productToUpdate.id}
                                  type="text"
                                  className="contact__input" 
                                  name='nombre'
                                  value={productToUpdate.nombre}
                                  onChange={handleChangeProduct}
                                  />
                              </label>
                            </div>
                            <div className=" field">
                              <label htmlFor='descripcion' className="contact_label">
                                Descripcion
                                <input  
                                  id='descripcion'
                                  type="text"
                                  className="contact__input" 
                                  name='descripcion'
                                  value={productToUpdate.descripcion}
                                  onChange={handleChangeProduct}
                                  />
                              </label>
                            </div>
                            <label htmlFor="productoImagen" className="contact_label" >
                              Subir Imagen del Producto
                              <input 
                                onChange={handleChangeImage} 
                                id="productoImagen" 
                                type="file" 
                                className="contact__input" 
                                name="productoImagen"
                              />
                            </label>
                            <div className=" field">
                              <label htmlFor="productoImagen" className="contact_label" >
                                Subir Imagen Nutricional del Producto
                                <input 
                                  onChange={handleChangeImageInfoNutri} 
                                  id="productoImagen" 
                                  type="file" 
                                  className="contact__input" 
                                  name="productoImagen"
                                />
                              </label>
                            </div>
                            <label htmlFor="InfoNutriImagen" className="contact_label" >
                              Subir Informacion Nutricional del Producto
                              <input 
                                onChange={handleChangeImageNutriTabla} 
                                id="InfoNutriImagen" 
                                type="file" 
                                className="contact__input" 
                                name="InfoNutriImagen"
                              />
                            </label>
                            <button className='btn'
                              onClick={(e) => {
                                formSubmit('delete product')
                                e.preventDefault()
                                }
                              }
                              style={{ backgroundColor: 'darkRed' }}
                            >
                              Eliminar
                            </button>
                            <button 
                              className="btn btn__close"
                              onClick={(e) => {
                                formSubmit('put product')
                              e.preventDefault()}}
                            >
                              Actualizar
                            </button>
                          </>
                        )}
                      </form>
                    </div>
                </Modal>
              }


              {/* CREAR */}


              {activeAdd &&
              <Modal open={true} setActive={freshData}>
                <div style={{ width: '1200px',color: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
                  <form action="" id="form__field" className="contact__form container">
                  <div className=" field">
                    <label onChange={handleChangeProduct} value={productToUpdate.tipo} htmlFor="tipo" className="contact_label">
                      Tipo de Producto a Modificar
                      <select className="contact__input"  name="tipo" id="tipo">
                        <option value="Producto">Producto</option>
                        <option value="Categoria">Categoria</option>
                      </select>
                    </label>
                  </div>

                  {/* CREAR CATEGORIA */}

                    {productToUpdate.tipo != 'Producto' &&
                    (<>
                      <div className=" field">
                        <label htmlFor='nombreCatProducto' className="contact_label">
                          Nombre Categoria
                          <input  
                            id={productToUpdate.id}
                            type="text"
                            className="contact__input" 
                            name='nombreCatProducto'
                            value={productToUpdate.nombreCatProducto}
                            onChange={handleChangeProduct}
                          />
                        </label>
                      </div>
                      <button 
                        className="btn btn__close"
                        onClick={(e) => {
                          formSubmit('post categoria')
                        e.preventDefault()}}
                      >
                        Crear
                      </button>
                    </>
                    )}

                    {/* CREAR PRODUCTO */}

                    {productToUpdate.tipo === 'Producto' &&
                    (<>
                        <div className=" field">
                          <label htmlFor='nombre' className="contact_label">
                            Nombre
                            <input  
                              id={productToUpdate.id}
                              type="text"
                              className="contact__input" 
                              name='nombre'
                              value={productToUpdate.nombre}
                              onChange={handleChangeProduct}
                              />
                          </label>
                        </div>
                        <div className=" field">
                          <label htmlFor='descripcion' className="contact_label">
                            Descripcion
                            <input  
                              id={productToUpdate.id}
                              type="text"
                              className="contact__input" 
                              name='descripcion'
                              value={productToUpdate.descripcion}
                              onChange={handleChangeProduct}
                              />
                          </label>
                        </div>
                        <div className=" field">
                          <label onChange={handleChangeProduct} value={productToUpdate.tipo} htmlFor="catProductos_id" className="contact_label">
                            Seleccione la Categoria
                            <select className="contact__input"  name="catProductos_id" id="tipo">
                              {catProductos.map(cat => {
                                return(
                                  <option key={cat.id}value={`${cat.id}`}>{cat.nombreCatProducto}</option>
                                )
                              })}
                            </select>
                          </label>
                        </div>
                        <div className=" field">
                          <label htmlFor="productoImagen" className="contact_label" >
                            Subir Imagen del Producto
                            <input 
                              onChange={handleChangeImage} 
                              id="productoImagen" 
                              type="file" 
                              className="contact__input" 
                              name="productoImagen"
                            />
                          </label>
                        </div>
                        <div className=" field">
                          <label htmlFor="productoImagen" className="contact_label" >
                            Subir Imagen Nutricional del Producto
                            <input 
                              onChange={handleChangeImageInfoNutri} 
                              id="productoImagen" 
                              type="file" 
                              className="contact__input" 
                              name="productoImagen"
                            />
                          </label>
                        </div>
                        <div className=" field">
                          <label htmlFor="InfoNutriImagen" className="contact_label" >
                            Subir Tabla Informacion Nutricional
                            <input 
                              onChange={handleChangeImageNutriTabla} 
                              id="InfoNutriImagen" 
                              type="file" 
                              className="contact__input" 
                              name="InfoNutriImagen"
                            />
                          </label>
                        </div>
                        <button 
                          className="btn btn__close"
                          onClick={(e) => {
                            formSubmit('post product')
                          e.preventDefault()}}
                        >
                          Crear
                        </button>
                      </>
                      
                    )}
                    
                  </form>
                </div>
              </Modal>
              }
              {showAlert ? (
              <Alert type={typeAlert}>
                {message}
              </Alert>): ('')
              }
        </section>
  )
}