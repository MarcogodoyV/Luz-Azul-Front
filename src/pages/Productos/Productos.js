import React, {useState, useEffect, useRef} from 'react'
import './Productos.css'
import { Api } from 'utils/api'
import { Modal } from 'components/Modal/Modal'
import FooterPicadas from 'images/productos/picadas/detalle_picadas.jpg'

// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FlechaIzquierda from 'images/productos/anterior_btn_popup.png'
import FlechaDerecha from 'images/productos/siguiente_btn_popup.png'

import ImagenFondoCategoria from 'images/productos/fondo_categorias_productos.png'
import imagenFondoTituloModal from 'images/productos/fondo-titulo-productos_popup.png'
import imagenFondoTituloModalPicadas from 'images/productos/fondo-titulo-picadas.png'
import { Spinner } from 'components/Spinner'

export const Productos = () => {

  const {http, URI} = Api()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [catProductos, setCarProductos] = useState()

  const [productos,setProductos] = useState()

  const [modal, setModal] = useState()

  const [active,setActive] = useState(false)

  const [loading, setLoading] = useState(false)


  //DESDE AQUI TEST
  const refProduct = window.location.href.substring(
    window.location.href.lastIndexOf('#') + 1
  );
  // const element = document.getElementById(href);
  
  const testRef = useRef(null);
   const scrollToElement = () => testRef?.current?.scrollIntoView({block: 'center'});
  useEffect(()=>{
  if(loading){
    setTimeout(() => scrollToElement(),800)
  }
  }, [productos])

  //FIN TEST

  useEffect(() => {

    http.get('api/categoriaproductos').then(res => setCarProductos(res.data))

    http.get('api/productos').then(res => setProductos(res.data))
    .then(() => {
      setLoading(true)
    })
    // .then(() => {
    //   const href = window.location.href.substring(
    //     window.location.href.lastIndexOf('#') + 1
    //   );
    //   const element = document.getElementById(href);
    //   if (element) {
    //     console.log(element)
    //     setTimeout(() => {
    //       element.scrollIntoView({block: 'center'});
    //     },800)
    //   }
    // }
    // )


    // if(tipo){
    //   setProductActive(tipo)
    // }


  },[])

  // useEffect(() => {
  //   if (element) {
  //     console.log(element)
  //     setTimeout(() => {
  //       element.scrollIntoView({block: 'center'});
  //     },800)
  //   }
  // },[productos])
 
  const showCategoria = (tipo) => {
    if(catProductos) {
      let categoria = catProductos.filter(cat => cat.nombreCatProducto === tipo)[0]
      if(categoria.nombreCatProducto.split(" ").join("") === refProduct){
        return (
          <SwiperSlide key={categoria.nombreCatProducto}>
            <div  ref={testRef} id={`${categoria.nombreCatProducto.split(" ").join("")}`}style={{height: '250px', position: 'relative', backgroundSize: '100% 100%' ,backgroundImage: `url(${ImagenFondoCategoria})`, backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h3>{categoria.nombreCatProducto}</h3>
            </div>
          </SwiperSlide>
        )
      }
      return (
        <SwiperSlide key={categoria.nombreCatProducto}>
          <div  id={`${categoria.nombreCatProducto.split(" ").join("")}`}style={{height: '250px', position: 'relative', backgroundSize: '100% 100%' ,backgroundImage: `url(${ImagenFondoCategoria})`, backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3>{categoria.nombreCatProducto}</h3>
          </div>
        </SwiperSlide>
      )
    }
  }

  const showCard = (producto) => {
    return(
      <SwiperSlide key={producto.id}>
        <div  style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h3 style={{ color: 'var(--bg)', borderBottom: '1px solid var(--bg)' }}>{producto.nombre}</h3>
          <img src={`${URI+'/api/imagenproducto/'+producto.id}`} alt='imagen Producto'></img>
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
              Ver Detalle
            </button>
          </div>
        </div>
      </SwiperSlide>
    )
  }

  const showModal = (producto)  => {
    setModal(producto)
    setActive(true)
  }

  const modalProductos = () => {
  return(
    <Modal open={true} setActive={setActive} width='max-content'>
      <div style={{ color: 'var(--bg)' }}>
        <h2 
        style={{ 
          backgroundImage: `url(${modal.nombreCatProducto === 'Picadas' ? imagenFondoTituloModalPicadas:imagenFondoTituloModal})`,
          backgroundSize: '100% 100%', 
          textAlign: 'initial',
          padding:'.7rem 0', 
          paddingLeft: '2.5rem', 
          marginBottom: '1rem', 
          fontWeight: 'lighter',
          color: `${modal.nombreCatProducto === 'Picadas' ? '#FFF':'var(--bg)'}`
        }}>
          <strong>{modal.nombre} |</strong> {modal.nombreCatProducto}
          </h2>
        <p style={{ textAlign: 'initial', paddingLeft: '.7rem', marginBottom: '1rem'}}>{modal.descripcion}</p>
        <div className='imgModalProductos'>
          <img src={`${URI+'/api/imagennutricional/'+modal.id}`} alt='imagen detalle producto'></img>
          <img src={`${URI+'/api/tablanutricional/'+modal.id}`} alt='imagen detalle producto'></img>
        </div>
        {modal.nombreCatProducto === 'Picadas' ? (
          <div>
          <div >
            <img src={FooterPicadas} alt='tamaños' ></img>
          </div>
        </div>
        ):null}
      </div>
    </Modal>
  )}
  

  return (
    <section>
      <div className='container marginBottomProductos'>
        <h1 className="title">Productos</h1>
        {catProductos ? 
        catProductos.map(cat => cat.nombreCatProducto).map( categoria => {
          return (
          <div key={categoria} style={{ position: 'relative', marginBottom: '2rem' }}>
            <div className={`swiper-button-productos image-swiper-button-next-productos ${categoria.split(" ").join("")}next`}>
                <img src={`${FlechaDerecha}`} alt='flecha de navegación siguiente'></img>
            </div>
            <div className={`swiper-button-productos image-swiper-button-prev-productos ${categoria.split(" ").join("")}prev`}>
                <img src={`${FlechaIzquierda}`} alt='flecha de navegación atras'></img>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              autoHeight='true'
              spaceBetween={30}
              slidesPerView={`${window.innerWidth < 964 ? (window.innerWidth > 500 ? '2':'1'): '4'}`}
              // navigation
              navigation={{
                  nextEl: `.${categoria.split(" ").join("")}next`,
                  prevEl: `.${categoria.split(" ").join("")}prev`,
                  disabledClass: "swiper-button-disabled"
                }}
              pagination={{ clickable: true }}
              className='swiperContainer'
            >
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
            </Swiper>
          </div>
          )
        }
        ):<Spinner />}
        {active && 
        modalProductos()}
      </div>
    </section>
    )
}