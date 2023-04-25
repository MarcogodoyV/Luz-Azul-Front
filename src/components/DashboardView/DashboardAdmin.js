import React, {useState, useEffect} from 'react'
import './DashboardAdmin.css'
import { Api } from 'utils/api'
import { Spinner } from 'components/Spinner';
import { Alert } from 'components/MessageBox/Alert';
import {Modal} from "components/Modal/Modal"
import {ProductSection} from 'components/DashboardView/ProductSection'
import {SucursalesSection} from 'components/DashboardView/SucursalesSection'

export const DashboardAdmin = () => {

  const carouseles = [1,2,3,4,5]
  
  const {getToken,logout, http, URI} = Api()

  const[active,setActive] = useState(false)

  const[section, setSection] = useState('cuenta')

  const [posts, setPosts] = useState()
  const [postToUpdate, setPostToUpdate] = useState({
    id:'',
    title:'',
    description:'',
    URL:'',
    img:''
  })

  const [loading, setLoading] = useState(false)

  const [downLoadloading, setDownloadLoading] = useState(false)

  const [carouselImg,setCarouselImg] = useState()
  const [carouselActive,setCarouselActive] = useState()
  const [activeModalCarousel, setActiveModalCarousel] = useState(false)
  const [activeModalMod,setActiveModalMod] =useState(false)
  const [bannerMovil, setBannerMovil] = useState()

  const [showAlert, setShowAlert] = useState(false)
  const [typeAlert, setTypeAlert] = useState('')
  const[message, setMessage] = useState('')

  const [banner,setBanner] = useState({
      type:"",
      number:""
    })

  useEffect(() =>{
    window.scrollTo(0, 0)
    if(!posts) {
      let config = {
        headers: {
          // "Authorization": `Bearer ${token}`,
          "Accept": "application/json"
        }
    }

      http.get('api/posts',config).then((res) => {
          setPosts(res.data)
      } )
    }
},[posts])


  const token = getToken()

  const openCarouselModal = (carousel) => {
    setBanner({type: 'carousel', number: `${carousel}`})
    setCarouselActive(carousel)
    setActiveModalCarousel(true)
  }

  const openModalMod = () => {
    setBanner({type: 'modal', number: ``})
    setActiveModalMod(true)
  }

  const freshData = () => {
    setActive(false)
    setActiveModalCarousel(false)
    setActiveModalMod(false)
    setPostToUpdate({
      id:'',
      title:'',
      description:'',
      URL:'',
      img:''
    })
    setPosts(null)
  } 

    const FormUpdatePost = (type) => {

      const token = getToken()

      let config = {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
          }
      }

      // let formData = new FormData()

      // formData.append('id',postToUpdate.id)
      // formData.append('title', postToUpdate.title)
      // formData.append('imageURL', postToUpdate.URL)
      // formData.append('description', postToUpdate.description)
      // formData.append('URL', postToUpdate.URL)

      if(type == 'post') {
        http.post('api/posts', {title:postToUpdate.title,imageURL:postToUpdate.img, description: postToUpdate.description, URL: postToUpdate.URL}, config)
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
      

      if(type == 'put'){
          http.put('api/posts', {id:postToUpdate.id,title:postToUpdate.title,imageURL:postToUpdate.img, description: postToUpdate.description, URL: postToUpdate.URL}, config)
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
              setTimeout(() => {
                setShowAlert(true)
                setShowAlert(() => false)
              }, 3000)
            })
      }else if (type == 'delete') {

          http.delete(`api/posts/${postToUpdate.id}`,config)
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

    const handlePostModified = (e) => {
      setPostToUpdate({...postToUpdate,[e.target.name]: `${e.target.value}`})

    }

    const handleClickPost = (e) => {
      if(e.target.id) {
        const postInfo = posts.filter((post) => post.id == e.target.id)[0]
        setPostToUpdate(postInfo)
      }
      setActive(true)
    }

    const handleChangeImage = (e) => {
      setCarouselImg(e.target.files[0])
    }

    const handleChangeImageMovil = (e) => {
      setBannerMovil(e.target.files[0])
    }

    const logoutUser = () => {
      setLoading(true)
      const token = getToken()

      let config = {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json"
        }
      }
      
      if(token !== undefined) {

          
          http.post('api/logout','',config)
          .then(result => {
              setLoading(false)
              logout()
          })
          .catch(error => {
            setLoading(false)
      
          });

          
      }
  }


    const handleClick = () => {

      let config = {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json"
        }
      }

      setDownloadLoading(true)
      setTypeAlert(() => 'green')

      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Authorization", `Bearer ${getToken()}`);

      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };
      try {
        fetch(`${URI}/api/listaprecios`, requestOptions)
        .then( res => res.blob() )
        .then( blob => {
          var file = window.URL.createObjectURL(blob);
          window.location.assign(file);
          setDownloadLoading(false)
        })
      } catch(error) {
        setDownloadLoading(false)
  
      };
      }
  
    const FormSubmit = (type) => {

      const token = getToken()

      let config = {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
          }
      }

      let formData = new FormData()

      formData.append('banner',carouselImg)
      formData.append('bannerMovil', bannerMovil)
      formData.append('number', banner.number)
      formData.append('type', banner.type)

      if(type == 'upload'){

          formData.append('banner',carouselImg)
          formData.append('bannerMovil', bannerMovil)
          formData.append('number', banner.number)
          formData.append('type', banner.type)

          http.post('api/banner', formData, config)
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
      }else if (type == 'delete') {

          http.delete(`api/banner/${banner.number}`, config)
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

  return  (
    <div className='gridContainer'>
      <div className='menu boxShadow'>
        <h1 className='subtitle' style={{ color: '#FFF', textAlign: 'center' }}>Dashboard Admin</h1>
        <ul className='listaMenu'>
          <li onClick={() => setSection('cuenta')}>Cuenta</li>
          <li onClick={() => setSection('carouseles')}>Carouseles</li>
          <li onClick={() => setSection('modal')}>Modal</li>
          <li onClick={() => setSection('noticias')}>Noticias</li>
          <li onClick={() => setSection('productos')}>Productos</li>
          <li onClick={() => setSection('sucursales')}>Sucursales</li>
        </ul>
      </div>
      <div className='container adminContainer' style={{ marginTop: '5rem', minHeight: '80vh', marginBottom: '3em' }}>
            {section == 'cuenta' && (
              <section style= {{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: '2em 0'}}>
                <button 
                    className="btn btn__close" 
                    onClick={(e) => {
                      handleClick()
                    e.preventDefault()}}
                  >
                    Descargar Lista Precios
                  </button>
                  <button
                    className="btn btn__close" 
                    onClick={logoutUser}
                  >
                    Salir de la cuenta
                  </button>
              </section>
            )}
          {posts ? (
          <>
          {section == 'carouseles' && (
            <section>
              <h1 className='subtitle' style={{ textAlign: 'center' }}>Modificacion de Carousel</h1>
              <div>
                {carouseles.map(carousel => {
                  return (
                    <div style={{ border: '1px solid blue', height: '150px', marginBottom: '1rem' }} key={carousel}>
                      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
                        <div style={{ width: '250px' }}>
                          <img src={`${URI}/api/banner/carousel${carousel}`} alt={`carousel ${carousel}`}></img>
                        </div>
                        <div>
                          <h2 style={{ textAlign: 'center', color: 'var(--bg)' }}>{`Carousel ${carousel}`}</h2>
                          <button className='btn' onClick={() => openCarouselModal(carousel) }>Modificar</button>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {activeModalCarousel && 
                  <Modal open={true} setActive={freshData} width={'1200px'}>
                      <div style={{ width: '1200px',color: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
                        {carouselActive &&
                        <div key={postToUpdate.id}>
                          <h3 className='subtitle'>Carousel {carouselActive}</h3>
                          <form action="" id="form__field" className="contact__form container">
                            <div className="form__file field">
                              <label htmlFor="banner" className="contact_label" >
                                Subir Carousel
                                <input 
                                  onChange={handleChangeImage} 
                                  id="banner" 
                                  type="file" 
                                  className="contact__input" 
                                  name="banner"
                                />
                              </label>
                              <br></br>
                              <br></br>
                              <label htmlFor="banner" className="contact_label">
                                Subir Carousel Movil
                                <input 
                                  onChange={handleChangeImageMovil} 
                                  id="banner" 
                                  type="file" 
                                  className="contact__input" 
                                  name="banner"
                                />
                              </label>
                              <br></br>
                              <br></br>
                              <label htmlFor="string" className="contact_label">
                                Tipo de Imagen a Modificar
                                <input
                                  id="string" 
                                  type="string"
                                  disabled
                                  className="contact__input" 
                                  name="carousel"
                                  value='carousel'
                                />
                              </label>
                            </div>
                            <div className="form__number field">
                              <label htmlFor="number" className="contact_label">
                                Numero Carousel (Desde el 1 hasta el 5)
                                <input
                                  id="number" 
                                  type="number"
                                  disabled
                                  className="contact__input" 
                                  name="number"
                                  value={carouselActive}
                                />
                              </label>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <button 
                                className="btn btn__close" 
                                style={{ backgroundColor: 'darkRed' }}
                                onClick={(e) => {
                                  FormSubmit('delete')
                                e.preventDefault()}}
                              >
                                Eliminar
                              </button>
                              <button 
                                className="btn btn__close" 
                                onClick={(e) => {
                                  FormSubmit('upload')
                                e.preventDefault()}}
                              >
                                Enviar
                              </button>
                              
                            </div>
                          </form>
                        </div>
                        }
                      </div>
                  </Modal>
                }
              </div>
            </section>
          )}
          {section == 'modal' && (
            <section>
              <h1 className='subtitle' style={{ textAlign: 'center' }}>Modificacion Modal</h1>
              <div style={{ border: '1px solid blue', height: '300px', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
                        <div style={{ width: '250px' }}>
                          <img src={`http://api.luz-azul.com.ar/api/banner/modal`} alt='modal'></img>
                        </div>
                        <div>
                          <h2 style={{ textAlign: 'center', color: 'var(--bg)' }}>Modal</h2>
                          <button className='btn' onClick={() => openModalMod()}>Modificar</button>
                        </div>
                      </div>
                    </div>
              {activeModalMod && 
                  <Modal open={true} setActive={freshData} width={'1200px'}>
                  <div style={{ width: '1200px',color: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
                    <div>
                      <h3 className='subtitle'>Modal</h3>
                      <form action="" id="form__field" className="contact__form container">
                        <div className="form__file field">
                          <label htmlFor="banner" className="contact_label" >
                            Subir Modal
                            <input 
                              onChange={handleChangeImage} 
                              id="banner" 
                              type="file" 
                              className="contact__input" 
                              name="banner"
                            />
                          </label>
                          <br></br>
                          <br></br>
                          <label htmlFor="string" className="contact_label">
                            Tipo de Imagen a Modificar
                            <input
                              id="string" 
                              type="string"
                              disabled
                              className="contact__input" 
                              name="modal"
                              value='modal'
                            />
                          </label>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'end'}}>
                          <button 
                            className="btn btn__close" 
                            onClick={(e) => {
                              FormSubmit('upload')
                            e.preventDefault()}}
                          >
                            Enviar
                          </button>
                          
                        </div>
                      </form>
                    </div>
                  </div>
                  </Modal>
                }
            </section>
          )}
          {section == 'noticias' && (
            <section>
              <h1 className='subtitle' style={{ textAlign: 'center' }}>Modificacion de Noticias</h1>
              <button className='btn' onClick={handleClickPost}>Crear Nueva Noticia</button>
              <table className='productDetail__table listaprecios__table' style={{ color:'var(--bg)', tableLayout: 'fixed', fontWeight: 'bold' }}>
                    <thead>
                      <tr>
                        <th>Titulo</th>
                        <th>Imagen</th>
                        <th>Descripcion</th>
                        <th>URL</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map(post => {
                        return(
                              <tr key={post.id}>
                                <td style={{ wordWrap: 'break-word', padding: '1em', border: '1px solid var(--bg)' }}>{post.title}</td>
                                <td style={{ wordWrap: 'break-word', padding: '1em', border: '1px solid var(--bg)' }}>{post.img}</td>
                                <td style={{ wordWrap: 'break-word', padding: '1em', border: '1px solid var(--bg)' }}>{post.description}</td>
                                <td style={{ wordWrap: 'break-word', padding: '1em', border: '1px solid var(--bg)' }}>{post.URL}</td>
                                <td style={{ wordWrap: 'break-word', padding: '1em', border: '1px solid var(--bg)' }}>
                                  <button className='btn' id={post.id} onClick={handleClickPost}>Modificar</button>
                                </td>
                              </tr>
                          )
                        })
                      }
                    </tbody>
              </table>
                  {active && 
                    <Modal open={true} setActive={freshData} width={'1200px'}>
                        <div style={{ width: '1200px',color: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
                          {postToUpdate.id ? (
                            
                          <div key={postToUpdate.id}>
                            <h3 className='subtitle'>Articulo {postToUpdate.id}</h3>
                            <form>
                              <div className=" field">
                                <label htmlFor='title' className="contact_label">
                                  Titulo
                                  <input  
                                    id={postToUpdate.id}
                                    type="text"
                                    className="contact__input" 
                                    name='title'
                                    value={postToUpdate.title}
                                    onChange={handlePostModified}
                                  />
                                </label>
                              </div>
                              <div className=" field">
                                <label htmlFor='img' className="contact_label">
                                  Imagen
                                  <input  
                                    id={postToUpdate.id}
                                    type="text"
                                    className="contact__input" 
                                    name='img'
                                    value={postToUpdate.img}
                                    onChange={handlePostModified}
                                  />
                                </label>
                              </div>
                              <div className=" field">
                                <label htmlFor='description' className="contact_label" style={{ height: '500px' }}>
                                  Descripcion ({`${postToUpdate.description.length}`}/500)
                                  <textarea  
                                    id={postToUpdate.id}
                                    type="text"
                                    className="contact__input" 
                                    name='description'
                                    value={postToUpdate.description}
                                    onChange={handlePostModified}
                                  />
                                </label>
                              </div>
                              <div className=" field" >
                                <label htmlFor='URL' className="contact_label">
                                  URL
                                  <input  
                                    id={postToUpdate.id}
                                    type="text"
                                    className="contact__input" 
                                    name='URL'
                                    value={postToUpdate.URL}
                                    onChange={handlePostModified}
                                  />
                                </label>
                              </div>
                              <button className='btn' 
                                onClick={(e) => {
                                FormUpdatePost('put')
                                e.preventDefault()
                                }}
                              >
                                Actualizar
                              </button>
                              <button className='btn' 
                                id={postToUpdate.id}
                                onClick={(e) => {
                                  FormUpdatePost('delete')
                                  e.preventDefault()
                                  }
                                }
                                style={{ backgroundColor: 'darkRed' }}
                              >
                                Eliminar
                              </button>
                            </form>
                          </div>

                          ):(
                            <div >
                            <h3 className='subtitle'>Articulo Nuevo</h3>
                            <form>
                              <div className=" field">
                                <label htmlFor='title' className="contact_label">
                                  Titulo
                                  <input  
                                    type="text"
                                    className="contact__input" 
                                    name='title'
                                    value={postToUpdate.title}
                                    onChange={handlePostModified}
                                  />
                                </label>
                              </div>
                              <div className=" field">
                                <label htmlFor='img' className="contact_label">
                                  Imagen
                                  <input  
                                    type="text"
                                    className="contact__input" 
                                    name='img'
                                    value={postToUpdate.img}
                                    onChange={handlePostModified}
                                  />
                                </label>
                              </div>
                              <div className=" field">
                                <label htmlFor='description' className="contact_label" style={{ height: '500px' }}>
                                  Descripcion ({`${postToUpdate.description.length}`}/500)
                                  <textarea  
                                    type="text"
                                    className="contact__input" 
                                    name='description'
                                    value={postToUpdate.description}
                                    onChange={handlePostModified}
                                  />
                                </label>
                              </div>
                              <div className=" field" >
                                <label htmlFor='URL' className="contact_label">
                                  URL
                                  <input  
                                    type="text"
                                    className="contact__input" 
                                    name='URL'
                                    value={postToUpdate.URL}
                                    onChange={handlePostModified}
                                  />
                                </label>
                              </div>
                              <button className='btn' 
                                onClick={(e) => {
                                FormUpdatePost('post')
                                e.preventDefault()
                                }}
                              >
                                Subir
                              </button>
                            </form>
                          </div>
                          )}
                        </div>
                    </Modal>
                  }

            </section>
          )}
          {section == 'productos' && (
            <ProductSection />
          )}
          {section == 'sucursales' && (
            <SucursalesSection />
          )}
          </>
          ):(<Spinner />)}
          
          
          {loading ? <Spinner />:''}
          {showAlert ? (
          <Alert type={typeAlert}>
            {message}
          </Alert>): ('')
          }
            
            {downLoadloading ? (
            <><Alert type={typeAlert}>
            Descargando Archivo
          </Alert>
          <Spinner /></>): ''}
      </div>
    </div>
      )
}
