import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
// import { useNavigate } from 'react-router-dom';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import YoutubeEmbed from 'components/YoutubeEmbed/YoutubeEmbed'

import { Swiper, SwiperSlide, autoplay } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FlechaIzquierda from 'images/flecha_izquierda.png'
import FlechaDerecha from 'images/flecha_derecha.png'

import "./Inicio.css"
import {Atajos} from "pages/Inicio/atajos/Atajos"
import {Modal} from "components/Modal/Modal"
// import { MapaSucursales } from 'components/MapaSucursales'
// import { InicioCard } from 'components/InicioCard/InicioCard'
import { Api } from 'utils/api';

// import Banner1 from "images/banner_promo-enamorados_1920x564.jpg"
// import Banner2 from 'images/banner_promo-enamorados_1920x564.jpg'

import { paths } from 'routes/paths'
import { Link } from 'react-router-dom'
import { Carousel, Slide, TextoSlide } from 'components/Carousel/Carousel'
import ImgSobreNosotros from 'images/img_sobre-nosotros.png'
import BtnSobreNosotros from 'images/conocer-mas_btn_sobre-nosotros.png'

import ImgSobreNostros from 'images/Inicio/img_sobre-nosotros_tablet.png'
import ImgSobreNostrosMovil from 'images/Inicio/img_sobre-nosotros_movil.png'
import BordeSuperiorRecetas from 'images/Inicio/borde-superior_fondo-recetas.png'
import BordeInferiorRecetas from 'images/Inicio/borde-inferior_fondo-recetas.png'
import BordeSuperiorProductos from 'images/Inicio/borde-superior_fondo-productos.png'
import BordeInferiorProductos from 'images/Inicio/borde-inferior_fondo-productos.png'

// Version Escritorio
import BackgroundProductos from 'images/productos_fondo.png'
import ProductosFrescos from 'images/productos_frescos.png'
import QuesosFundidos from 'images/quesos_fundidos.png'
import QuesosPastaBlanda from 'images/quesos_pasta_blanda.png'
import QuesosPastaDura from 'images/quesos_pasta_dura.png'
import QuesosPastaHilada from 'images/quesos_pasta_hilada.png'
import QuesosPastaSemidura from 'images/quesos_pasta_semidura.png'
import Dulces from 'images/dulces.png'
import Leches from 'images/leches.png'
import Picadas from 'images/picadas.png'
import Otros from 'images/otros.png'

//Version movil
import ProductosFrescosMovil from 'images/Inicio/productos-frescos_movil.png'
import QuesosFundidosMovil from 'images/Inicio/quesos-fundidos_movil.png'
import QuesosPastaBlandaMovil from 'images/Inicio/quesos-pasta-blanda_movil.png'
import QuesosPastaDuraMovil from 'images/Inicio/quesos-pasta-dura_movil.png'
import QuesosPastaHiladaMovil from 'images/Inicio/quesos-pasta-hilada_movil.png'
import QuesosPastaSemiduraMovil from 'images/Inicio/quesos-pasta-semidura_movil.png'
import DulcesMovil from 'images/Inicio/dulces_movil.png'
import LechesMovil from 'images/Inicio/leches_movil.png'
import PicadasMovil from 'images/Inicio/picadas_movil.png'
import OtrosMovil from 'images/Inicio/otros_movil.png'

import { NewsCard } from 'components/NewsCard/NewsCard'


//import imgs recetas
import RecetasFondo from 'images/recetas_fondo.png'
import Receta2 from 'images/recetas2.jpg'

export const Inicio = () => {

    const windowsWidth = window.innerWidth

    // const navigate = useNavigate();

    const [toggleView, setToggleView]= useState()

    const {http, URI} = Api();

    const[active,setActive] = useState(false)
    const [bannersCarousel,setbannersCarousel] = useState([])
    const [bannersMovil, setBannersMovil] = useState([])

    useEffect(() => {

        http.get('/api/banner/carousel').then(res => {
            setbannersCarousel(res.data)
        })

        http.get('/api/banner/carouselmovil').then(res => {
            setBannersMovil(res.data)
        })

        window.scrollTo(0, 0)

        // let pop_status = sessionStorage.getItem('pop_status');
        //   if(!pop_status){
        //     sessionStorage.setItem('pop_status',1);
        //     setTimeout(() => {
        //         setActive(true)
        //     },3000)
        //   }
    },[])

    useEffect(() => {

        if(windowsWidth <= 568) {
            setToggleView('movil')
        }else if(windowsWidth <= 1200) {
            setToggleView('tablet')
        } else {
            setToggleView('desktop')
        }

    }, [toggleView])

    const [posts, setPosts] = useState()
    const {prensa} = paths;

    useEffect(() =>{
        http.get('api/posts/3').then((res) => {
            setPosts(res.data)
        } )
    },[])

    const TabletView = () => {
        return (
            <section className="main">
                <Carousel controles={true} autoplay={true}>
                    
                    {bannersCarousel.map((banner) => {
                    return (
                        <Slide tabIndex={-1} key={banner}>
                            <img src={`${URI}/api/banner/${banner}`} alt={`imagen banner ${banner}`}/>
                        </Slide>
                    )
                    })}
                </Carousel>
                {/* <Carousel controles={true} autoplay={true}>
                        <Slide tabIndex={-1}>
                            <img src={BannerMovil} alt={`imagen banner`}/>
                        </Slide>
                </Carousel> */}
                <div>
                    <Atajos />
                    <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: '2rem'}}>
                        <img src={ImgSobreNostrosMovil} alt='' style={{ width: '100%', maxWidth: '550px' }}></img>
                        <div style={{ 
                            position: 'absolute',
                            top: '45px',
                            zIndex: '3',
                            // bottom: '630px',
                            width: '70%',
                            maxWidth: '350px'
                            // marginBottom: '-150px' 
                        }}
                        >
                            <h2 className='subtitle' style={{ marginBottom: '.5rem', textAlign: 'center', fontSize: '2rem', color: '#FFF' }}>Sobre Nosotros</h2>
                            <p  style={{ marginTop:'1.5rem', fontSize: '1.2rem', marginBottom: '1rem' }}>
                                Somos una empresa Láctea con más de 50 años en el mercado, situados en la ciudad de Azul, provincia de Buenos Aires.
                                A partir del año 2012, de la mano de Gabriela Benac, de vasta trayectoria en la industria quesera a la cabeza del equipo, 
                                se comenzó un camino de crecimiento que nos lleva al día de hoy donde contamos con un formato de negocios moderno con más 
                                de 70 franquicias en todo el país.
                            </p>
                            <Link to={paths.sobreNosotros.url}>
                                <img src={BtnSobreNosotros}></img>
                            </Link>
                        </div>
                    </div>
                    <div className='productosSection'>
                        <img src={BordeSuperiorProductos} style={{ width: '100%',  margin: '0', padding: '0', position: 'relative', top: '.3em' }} alt=''></img>
                        <div style={{ backgroundColor: '#aac901',  margin: '0', padding: '0' }}>
                            <h2 className='productosTitle'>Nuestros Productos</h2>
                                <div style={{ textAlign: 'center' }}>
                                    <Link to={`/productos/#QuesosdePastaBlanda`}>
                                        <img  alt='imagen de producto'src={QuesosPastaBlandaMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#QuesosdePastaDura`}>
                                        <img  alt='imagen de producto'src={QuesosPastaDuraMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#QuesosdePastaSemidura`}>
                                        <img  alt='imagen de producto'src={QuesosPastaSemiduraMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#QuesosdePastaHilada`}>
                                        <img  alt='imagen de producto'src={QuesosPastaHiladaMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#QuesosFundidos`}>
                                        <img  alt='imagen de producto'src={QuesosFundidosMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#ProductosFrescos`}>
                                        <img  alt='imagen de producto'src={ProductosFrescosMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#Dulces`}>
                                        <img  alt='imagen de producto'src={DulcesMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#Picadas`}>
                                        <img  alt='imagen de producto'src={PicadasMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#Leches`}>
                                        <img  alt='imagen de producto'src={LechesMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#Otros`}>
                                        <img  alt='imagen de producto'src={OtrosMovil}></img>
                                    </Link>
                                </div>
                        </div>
                        <img src={BordeInferiorProductos} style={{ width: '100%',  margin: '0', padding: '0', marginBottom: '3rem' }} alt=''></img>
                    </div>
                    <div className='recetas'>
                        <img src={BordeSuperiorRecetas} style={{ width: '100%',  margin: '0', padding: '0', position: 'relative', top: '.3em' }} alt=''></img>
                        <div style={{ position: 'relative', backgroundColor: '#71a900',  margin: '0', padding: '0' }}>
                            <h2 style={{ color: 'var(--text-color-alt)', display: 'flex', justifyContent: 'center', fontSize: '40px' }}>Recetas</h2>
                            <div className="swiper-button image-swiper-button-next">
                                <img src={`${FlechaDerecha}`} style={{ position: 'relative', right: '60%'}}></img>
                            </div>
                            <div className="swiper-button image-swiper-button-prev">
                                <img src={`${FlechaIzquierda}`} style={{ position: 'relative', left: '60%'}}></img>
                            </div>
                            <div style={{maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
                                <Swiper
                                     modules={[Navigation, Pagination, Autoplay]}
                                     spaceBetween={30}
                                     slidesPerView={1}
                                    // navigation
                                    navigation={{
                                        nextEl: ".image-swiper-button-next",
                                        prevEl: ".image-swiper-button-prev",
                                        disabledClass: "swiper-button-disabled"
                                      }}
                                    pagination={{ clickable: true }}
                                >
                                    <SwiperSlide>
                                        {/* <div>
                                            <img className='imgSlide' alt='recetas' style={{ display: 'hidden' }}></img>
                                            <p style={{ position: 'relative', bottom: '40px', left: '10px', fontWeight: 'bolder', textShadow: '1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000,1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000' }}>Texto arriba de imagen</p>
                                        </div> */}
                                        <div style={{ position: 'relative', top: '2em' }}>
                                            <YoutubeEmbed embedId="SB3niauNbNQ"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <div>
                                            <img src={Receta2} className='imgSlide' alt='recetas'></img>
                                            <p style={{ position: 'relative', bottom: '40px', left: '10px', fontWeight: 'bolder', textShadow: '1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000,1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000' }}>Texto arriba de imagen</p>
                                        </div> */}
                                        <div className='imgSlide' alt='recetas' style={{ position: 'relative', top: '2em' }}>
                                            <YoutubeEmbed embedId="trAH_VcZc0o"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='imgSlide' alt='recetas' style={{ position: 'relative', top: '2em' }}>
                                            <YoutubeEmbed embedId="rt593rjOcPA"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='imgSlide' alt='recetas' style={{ position: 'relative', top: '2em' }}>
                                            <YoutubeEmbed embedId="58_6Osn-eYM"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='imgSlide' alt='recetas' style={{ position: 'relative', top: '2em' }}>
                                            <YoutubeEmbed embedId="PBUcs8CfNb8"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src={Receta2} style={{ visibility: 'hidden', height: '400px' }} className='imgSlide' alt='recetas'></img>
                                            <p style={{ position: 'relative', bottom: '40px', left: '10px', fontWeight: 'bolder', textShadow: '1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000,1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000', visibility: 'hidden' }}>Texto arriba de imagen</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <img src={BordeInferiorRecetas} style={{ width: '100%',  margin: '0', padding: '0', position: 'relative', bottom: '1px' }} alt=''></img>
                    </div>
                    <div className='prensa' style={{ marginBottom: '2rem' }}>
                        {/* <h2 style={{ color: 'var(--text-color-alt)', display: 'flex', justifyContent: 'center', fontSize: '40px' }}>Prensa</h2> */}
                        <div style={{maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <>
                            <Link to={prensa.url}>
                                <h2 style={{ color: 'var(--text-color-alt)', display: 'flex', justifyContent: 'center', fontSize: '40px',marginTop: '3rem', marginBottom: '1rem' }}>Prensa</h2>
                            </Link>
                            <section className="section__novedades">
                                <div className="noticias" style={{ position: 'relative' }}>
                                    <div className="swiper-button image-swiper-button-next">
                                        <img src={`${FlechaDerecha}`} style={{ position: 'relative', right: '30%'}}></img>
                                    </div>
                                    <div className="swiper-button image-swiper-button-prev">
                                        <img src={`${FlechaIzquierda}`} style={{ position: 'relative', left: '30%'}}></img>
                                    </div>
                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 10000,
                                            disableOnInteraction: false,
                                          }}
                                        // navigation
                                        navigation={{
                                            nextEl: ".image-swiper-button-next",
                                            prevEl: ".image-swiper-button-prev",
                                            disabledClass: "swiper-button-disabled"
                                          }}
                                        pagination={{ clickable: true }}
                                    >
                                    {posts && (posts.map((post) => {
                                        return(
                                            <SwiperSlide key={post.id}>
                                                <NewsCard
                                                    img={post.img}
                                                    title={post.title}
                                                    link={post.URL}
                                                    id={post.id}
                                                    >
                                                    {post.description}
                                                </NewsCard>        
                                            </SwiperSlide>
                                        )
                                    }))}
                                    </Swiper>
                                </div>
                            </section>
                        </>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const MovilView = () => {
        return (
            <section className="main">
                <Carousel controles={true} autoplay={true}>
                    
                    {bannersMovil.map((banner) => {
                    return (
                        <Slide tabIndex={-1} key={banner}>
                            <img src={`${URI}/api/banner/${banner}`} alt={`imagen banner ${banner}`} />
                        </Slide>
                    )
                    })}
                </Carousel>
                {/* <Carousel controles={true} autoplay={true}>
                        <Slide tabIndex={-1}>
                            <img src={BannerMovil} alt={`imagen banner`}/>
                        </Slide>
                </Carousel> */}
                <div>
                    <Atajos />
                    <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: '2rem'}}>
                        <img src={ImgSobreNostrosMovil} alt='' style={{ width: '100%', maxWidth: '550px' }}></img>
                        <div style={{ 
                            position: 'absolute',
                            top: '25px',
                            marginLef: 'auto',  
                            marginRight: 'auto',
                            zIndex: '3',
                            width: '70%',
                            maxWidth: '350px'
                        }}
                        >
                            <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Sobre Nosotros</h2>
                            <p style={{ marginBottom: '1rem'}}>
                                Somos una empresa Láctea con más de 50 años en el mercado, situados en la ciudad de Azul, provincia de Buenos Aires...
                            </p>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <Link to={paths.sobreNosotros.url}>
                                    <img src={BtnSobreNosotros} style={{ height: '40px' }}></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='productosSection'>
                        <img src={BordeSuperiorProductos} style={{ width: '100%',  margin: '0', padding: '0', position: 'relative', top: '.3em' }} alt=''></img>
                        <div style={{ backgroundColor: '#aac901',  margin: '0', padding: '0' }}>
                            <h2 className='productosTitle'>Nuestros Productos</h2>
                                <div style={{ textAlign: 'center' }}>
                                    <Link to={`/productos/#QuesosdePastaBlanda`}>
                                        <img  alt='imagen de producto'src={QuesosPastaBlandaMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#QuesosdePastaDura`}>
                                        <img  alt='imagen de producto'src={QuesosPastaDuraMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#QuesosdePastaSemidura`}>
                                        <img  alt='imagen de producto'src={QuesosPastaSemiduraMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#QuesosdePastaHilada`}>
                                        <img  alt='imagen de producto'src={QuesosPastaHiladaMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#QuesosFundidos`}>
                                        <img  alt='imagen de producto'src={QuesosFundidosMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#ProductosFrescos`}>
                                        <img  alt='imagen de producto'src={ProductosFrescosMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#Dulces`}>
                                        <img  alt='imagen de producto'src={DulcesMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#Picadas`}>
                                        <img  alt='imagen de producto'src={PicadasMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#Leches`}>
                                        <img  alt='imagen de producto'src={LechesMovil}></img>
                                    </Link>
                                    <Link to={`/productos/#Otros`}>
                                        <img  alt='imagen de producto'src={OtrosMovil}></img>
                                    </Link>
                                </div>
                        </div>
                        <img src={BordeInferiorProductos} style={{ width: '100%',  margin: '0', padding: '0', marginBottom: '3rem' }} alt=''></img>
                    </div>
                    <div className='recetas'>
                        <img src={BordeSuperiorRecetas} style={{ width: '100%',  margin: '0', padding: '0', position: 'relative', top: '.3em' }} alt=''></img>
                        <div style={{ backgroundColor: '#71a900',  margin: '0', padding: '0' }}>
                            <h2 style={{ color: 'var(--text-color-alt)', display: 'flex', justifyContent: 'center', fontSize: '40px' }}>Recetas</h2>
                            <div style={{position: 'relative', maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
                                <div className="swiper-button image-recetas-swiper-button-next">
                                    <img src={`${FlechaDerecha}`} style={{ position: 'relative' ,top: '70px' }}></img>
                                </div>
                                <div className="swiper-button image-recetas-swiper-button-prev">
                                    <img src={`${FlechaIzquierda}`} style={{ position: 'relative' ,top: '70px' }}></img>
                                </div>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    navigation={{
                                        nextEl: ".image-recetas-swiper-button-next",
                                        prevEl: ".image-recetas-swiper-button-prev",
                                        disabledClass: "swiper-button-disabled"
                                      }}
                                    pagination={{ clickable: true }}
                                >
                                    <SwiperSlide>
                                        {/* <div>
                                            <img className='imgSlide' alt='recetas' style={{ display: 'hidden' }}></img>
                                            <p style={{ position: 'relative', bottom: '40px', left: '10px', fontWeight: 'bolder', textShadow: '1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000,1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000' }}>Texto arriba de imagen</p>
                                        </div> */}
                                        <div style={{ position: 'relative', top: '2em' }}>
                                            <YoutubeEmbed embedId="SB3niauNbNQ"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <div>
                                            <img src={Receta2} className='imgSlide' alt='recetas'></img>
                                            <p style={{ position: 'relative', bottom: '40px', left: '10px', fontWeight: 'bolder', textShadow: '1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000,1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000' }}>Texto arriba de imagen</p>
                                        </div> */}
                                        <div className='imgSlide' alt='recetas' style={{ position: 'relative', top: '2em' }}>
                                            <YoutubeEmbed embedId="trAH_VcZc0o"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='imgSlide' alt='recetas' style={{ position: 'relative', top: '2em' }}>
                                            <YoutubeEmbed embedId="rt593rjOcPA"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='imgSlide' alt='recetas' style={{ position: 'relative', top: '2em' }}>
                                            <YoutubeEmbed embedId="58_6Osn-eYM"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='imgSlide' alt='recetas' style={{ position: 'relative', top: '2em' }}>
                                            <YoutubeEmbed embedId="PBUcs8CfNb8"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src={Receta2} style={{ visibility: 'hidden', height: '250px' }} className='imgSlide' alt='recetas'></img>
                                            <p style={{ position: 'relative', bottom: '40px', left: '10px', fontWeight: 'bolder', textShadow: '1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000,1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000', visibility: 'hidden' }}>Texto arriba de imagen</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <img src={BordeInferiorRecetas} style={{ width: '100%',  margin: '0', padding: '0', position: 'relative', bottom: '1px' }} alt=''></img>
                    </div>
                    <div className='prensa' style={{ marginBottom: '2rem' }}>
                        {/* <h2 style={{ color: 'var(--text-color-alt)', display: 'flex', justifyContent: 'center', fontSize: '40px' }}>Prensa</h2> */}
                        <div style={{maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <>
                            <Link to={prensa.url}>
                                <h2 style={{ color: 'var(--text-color-alt)', display: 'flex', justifyContent: 'center', fontSize: '40px',marginTop: '3rem', marginBottom: '1rem' }}>Prensa</h2>
                            </Link>
                            <section className="section__novedades">
                                <div className="noticias" style={{ position: 'relative' }}>
                                    <div className="swiper-button image-swiper-button-next">
                                        <img src={`${FlechaDerecha}`}></img>
                                    </div>
                                    <div className="swiper-button image-swiper-button-prev">
                                        <img src={`${FlechaIzquierda}`}></img>
                                    </div>
                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 10000,
                                            disableOnInteraction: false,
                                          }}
                                        // navigation
                                        navigation={{
                                            nextEl: ".image-swiper-button-next",
                                            prevEl: ".image-swiper-button-prev",
                                            disabledClass: "swiper-button-disabled"
                                          }}
                                        pagination={{ clickable: true }}
                                    >
                                    {posts && (posts.map((post) => {
                                        return(
                                            <SwiperSlide key={post.id}>
                                                <NewsCard
                                                    img={post.img}
                                                    title={post.title}
                                                    link={post.URL}
                                                    id={post.id}
                                                    >
                                                    {post.description}
                                                </NewsCard>        
                                            </SwiperSlide>
                                        )
                                    }))}
                                    </Swiper>
                                </div>
                            </section>
                        </>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const DesktopView = () => {
        return(
            <div className="main">
                <Carousel controles={true} autoplay={true}>
                    
                    {bannersCarousel.map((banner) => {
                    return (
                        <Slide tabIndex={-1} key={banner}>
                        {/* <Link tabIndex={-1} to={paths.pronostigol.url}> */}
                            <img src={`${URI}/api/banner/${banner}`} alt={`imagen banner ${banner}`}/>
                        {/* </Link> */}
                    </Slide>
                    )
                    })}
                </Carousel>
                {active && 
                <Modal open={true} setActive={setActive}>
                    <div>
                        <p className='small-margin subtitle'><strong>Descargá nuestra App, accedé a catalogo, descuentos, promociones exclusivas y participá por increíbles premios</strong></p>
                        {/* <Link to={paths.pronostigol.url}> */}
                            <img alt="Prensa" className="inicio__modal-img" src={`${URI}/api/banner/modal`}></img>
                        {/* </Link> */}
                    </div>
                </Modal>
                }
                <div className="container">
                    <Atajos />
                    <AboutSection>
                        {/* <img src={ImgSobreNosotros} aria-label='imagen sobre nosotros'></img> */}
                        <div className='aboutInfo'>
                            <h2 className='aboutTitle'>Sobre Nosotros</h2>
                            <p className='aboutText' style={{ marginTop:'1.5rem', fontSize: '1.2rem' }}>
                                Somos una empresa Láctea con más de 50 años en el mercado, situados en la ciudad de Azul, provincia de Buenos Aires.
                                A partir del año 2012, de la mano de Gabriela Benac, de vasta trayectoria en la industria quesera a la cabeza del equipo, se comenzó un camino de crecimiento que nos lleva al día de hoy donde contamos con un formato de negocios moderno con más de 70 franquicias en todo el país.
                            </p>
                            <Link to={paths.sobreNosotros.url}>
                                <img src={BtnSobreNosotros}></img>
                            </Link>
                        </div>
                    </AboutSection>
                    {/* <ProductosSection>
                        <h2 className='productosTitle' style={{ textAlign: 'center' }}>Nuestros Productos</h2>
                        <div className='SectionimgProducto'>
                            <Link to={`/productos/QUESO`}>
                                <img className='imgProducto' alt='imagen de producto'src={QuesosPastaBlanda}></img>
                            </Link>
                            <Link to={`/productos/QUESO`}>
                                <img className='imgProducto' alt='imagen de producto'src={QuesosPastaDura}></img>
                            </Link>
                            <Link to={`/productos/QUESO`}>
                                <img className='imgProducto' alt='imagen de producto'src={QuesosPastaSemidura}></img>
                            </Link>
                            <Link to={`/productos/QUESO`}>
                                <img className='imgProducto' alt='imagen de producto'src={QuesosPastaHilada}></img>
                            </Link>
                            <Link to={`/productos/FRESCOS`}>
                                <img className='imgProducto' alt='imagen de producto'src={QuesosFundidos}></img>
                            </Link>
                            <Link to={`/productos/FRESCOS`}>
                                <img className='imgProducto' alt='imagen de producto'src={ProductosFrescos}></img>
                            </Link>
                            <Link to={`/productos/DULCE`}>
                                <img className='imgProducto' alt='imagen de producto'src={Dulces}></img>
                            </Link>
                            <Link to={`/productos/QUESO`}>
                                <img className='imgProducto' alt='imagen de producto'src={Picadas}></img>
                            </Link>
                            <Link to={`/productos/LECHE`}>
                                <img className='imgProducto' alt='imagen de producto'src={Leches}></img>
                            </Link>
                            <Link to={`/productos/`}>
                                <img className='imgProducto' alt='imagen de producto'src={Otros}></img>
                            </Link>
                        </div>
                    </ProductosSection> */}
                    <div style={{ position: 'relative',  display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <img src={BackgroundProductos } alt='' style={{ position: 'absolute', height: '120%', width: '100%', zIndex: '0'}}></img>
                        <h2 style={{ zIndex: '1', marginBottom: '2rem'}} className='productosTitle'>Nuestros Productos</h2>
                        <div style={{ 
                            justifyContent: 'center',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 250px)',
                            gap: '10px',
                            zIndex: '1'
                         }}>
                            <Link to={`/productos/#QuesosdePastaBlanda`}>
                                <img alt='imagen de producto'src={QuesosPastaBlanda}></img>
                            </Link>
                            <Link to={`/productos/#QuesosdePastaDura`}>
                                <img alt='imagen de producto'src={QuesosPastaDura}></img>
                            </Link>
                            <Link to={`/productos/#QuesosdePastaSemidura`}>
                                <img alt='imagen de producto'src={QuesosPastaSemidura}></img>
                            </Link>
                            <Link to={`/productos/#QuesosdePastaHilada`}>
                                <img alt='imagen de producto'src={QuesosPastaHilada}></img>
                            </Link>
                            <Link to={`/productos/#QuesosFundidos`}>
                                <img alt='imagen de producto'src={QuesosFundidos}></img>
                            </Link>
                            <Link to={`/productos/#ProductosFrescos`}>
                                <img alt='imagen de producto'src={ProductosFrescos}></img>
                            </Link>
                            <Link to={`/productos/#Dulces`}>
                                <img alt='imagen de producto'src={Dulces}></img>
                            </Link>
                            <Link to={`/productos/#Picadas`}>
                                <img alt='imagen de producto'src={Picadas}></img>
                            </Link>
                            <Link to={`/productos/#Leches`}>
                                <img alt='imagen de producto'src={Leches}></img>
                            </Link>
                            <Link to={`/productos/#Otros`} style={{ gridColumn: '1/4'}}>
                                <img alt='imagen de producto'src={Otros} style= {{ width:'100%' }}></img>
                            </Link>
                        </div>
                    </div>
                    <RecetasSection>
                        <h2 style={{ color: 'var(--text-color-alt)', display: 'flex', justifyContent: 'center', paddingTop: '6rem', fontSize: '40px' }}>Recetas</h2>
                        <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center' ,position: 'relative', top: '20px', left: '150px', maxWidth: '75%'}}>
                        <div className="swiper-button image-swiper-button-next">
                            <img src={`${FlechaDerecha}`}></img>
                        </div>
                        <div className="swiper-button image-swiper-button-prev">
                            <img src={`${FlechaIzquierda}`}></img>
                        </div>
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={30}
                                slidesPerView={2}
                                navigation={{
                                    nextEl: ".image-swiper-button-next",
                                    prevEl: ".image-swiper-button-prev",
                                    disabledClass: "swiper-button-disabled"
                                  }}
                                pagination={{ clickable: true }}
                                className='swiperContainer'
                            >
                                <SwiperSlide>
                                    <div style={{ position: 'relative', top: '2em' }}>
                                        <YoutubeEmbed embedId="SB3niauNbNQ"/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='imgSlide' alt='recetas' style={{ position: 'relative', top: '2em' }}>
                                        <YoutubeEmbed embedId="trAH_VcZc0o"/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='imgSlide' alt='recetas' style={{ position: 'relative', top: '2em' }}>
                                        <YoutubeEmbed embedId="rt593rjOcPA"/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='imgSlide' alt='recetas' style={{ position: 'relative', top: '2em' }}>
                                        <YoutubeEmbed embedId="58_6Osn-eYM"/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='imgSlide' alt='recetas' style={{ position: 'relative', top: '2em' }}>
                                        <YoutubeEmbed embedId="PBUcs8CfNb8"/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <img src={Receta2} style={{ visibility: 'hidden', height: '300px' }} className='imgSlide' alt='recetas'></img>
                                        <p style={{ position: 'relative', bottom: '40px', left: '10px', fontWeight: 'bolder', textShadow: '1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000,1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000', visibility: 'hidden' }}>Texto arriba de imagen</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </RecetasSection>
                    <section className="section__novedades">
                        <Link to={prensa.url}>
                        <h2 style={{ color: 'var(--text-color-alt)', display: 'flex', justifyContent: 'center', fontSize: '40px',marginTop: '3rem', marginBottom: '1rem' }}>Prensa</h2>
                        </Link>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            {posts && (
                                posts.map((param) => {
                                    return(
                                        <NewsCard
                                            key={param.title}
                                            img={param.img}
                                            title={param.title}
                                            link={param.URL}
                                            >
                                            {param.description}
                                        </NewsCard>        
                                    )
                                })
                            )}
                        </div>
                    </section>
                    {/* <MapaSucursales /> */}
                </div>
            </div>
        )
    }

    const ShowView = (view) => {

        if(view === 'movil'){
            return <MovilView />
        } else if (view === 'tablet') {
            return <TabletView />
        } else {
            return <DesktopView />
        }

    }

    return ShowView(toggleView)
    
}


const AboutSection = styled.div`
    background: url(${ImgSobreNosotros}); 
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 3rem;
    width: 100%;
    height: 0;
    padding-top: 67.92%; /* (1228 / 1808 * 1210) */
    /* (img-height / img-width * container-width) */
    margin-bottom: 10rem;
`;

const ProductosSection = styled.div`
    background: url(${BackgroundProductos});
    background-size: 110%;
    background-repeat: no-repeat;
    margin-top: 3rem;
    width: 100%;
    height: 1200px;
    background-position: center;
    /*padding-top: 75.57%;  (1451 / 1920 * 1210) */
    /* (img-height / img-width * container-width) */
`;

const RecetasSection = styled.div`
    background: url(${RecetasFondo});
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 10rem;
    width: 100%;
    height: 550px;
    background-position: center;
`;
