import FacebookIcon from "images/iconos_facebook_menu.png"
import InstagramIcon from "images/iconos_instagram_menu.png"
import YoutubeIcon from "images/iconos_youtube_menu.png"
import TiktokIcon from "images/iconos_tiktok_menu.png"

export const social_externalLinks = {
    facebook: {url:"https://www.facebook.com/LacteosLuzAzul", label:"Facebook",icon:FacebookIcon},
    instagram: {url:"https://www.instagram.com/lacteosluzazul/", label:"Instagram",icon:InstagramIcon},
    youtube: {url:"https://www.youtube.com/channel/UCQT337iIeTg16mNHFYuxCFg", label:"Youtube",icon:YoutubeIcon},
    tiktok: {url:"https://www.tiktok.com/@lacteosluzazul", label:"Tiktok",icon:TiktokIcon},
};

export const paths = {
    inicio:{url:"/",label:"Inicio"},
    catalogo:{url:"/catalogo",label:"Catalogo"},
    productos:{url:"/productos",label:"Productos"},
    productosTipo:{url:"/productos/:tipo", label:"Productos filtrados por tipo"},
    prensa:{url:"/prensa",label:"Prensa"},
    picadas:{url:"/picadas",label:"Picadas"},
    sobreNosotros:{url:"/sobreNosotros",label:"Sobre Nosotros"},
    sucursales:{url:"/sucursales",label:"Sucursales"},
    contacto:{url:"/contacto",label:"Contacto"},
    franquicias:{url:"/franquicias",label:"Franquicias"},
    cajas:{url:"/cajas",label:"Cajas"},
    franquiciado:{url:"/franquiciado",label:"Panel franquiciado"},
    TyC:{url:"TyC",label:"/Términos y Condiciones"},
    productDetails:{url:"/productos/id/:cod", label:"Detalles de producto"},
    sucursalesDetails:{url:"/sucursales/:id", label:"Detalles de sucursal"},
    seccionesFranquiciados:{url:"/franquiciado/:nro", label:"Seccion franquiciado"},
    listaPrecios:{url:"/precios", label:"Lista de Precios"},
    adminListaPrecios:{url:"/precios/listaprecios/:id", label:"Lista de Precios"},
    pronostigol:{url:"/pronostigol", label:"Pronostigol"},
    pageError: {url:"*", label:"Error 404"},
    login: {url:"/login", label:"Ingresar"},
    dashboard: {url:"/dashboard", label:"Dashboard"},
    materialFranquiciados: {url:"/materialfranquiciados", label:"Material Para Franquiciados"},
    presentacionComercialFranquicia: {url:"/frq/presentacion_comercial_franquicia.pdf", label:"Presentación Comercial Franquicia"}
};