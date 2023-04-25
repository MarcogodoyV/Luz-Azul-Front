import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import YoutubeEmbed from 'components/YoutubeEmbed/YoutubeEmbed'
import { Infobox } from 'components/Infobox/Infobox'
import { paths } from 'routes/paths'
import './SeccionesFranquiciados.css'

import HeaderVideo from 'images/SeccionesFranquiciados/headers/header-video.webp'
import HeaderApertura from 'images/SeccionesFranquiciados/headers/header-apertura.webp'
import HeaderCapacitacion from 'images/SeccionesFranquiciados/headers/header-capacitacion.webp'
import HeaderManejoInfo from 'images/SeccionesFranquiciados/headers/header-manejo-info.webp'
import HeaderManejoMercaderia from 'images/SeccionesFranquiciados/headers/header-manejo-mercaderia.webp'
import HeaderPlantillasDeManejoYFichasTecnicas from 'images/SeccionesFranquiciados/headers/header-material-operativo.webp'
import HeaderPedidosYa from 'images/SeccionesFranquiciados/headers/header-pedidos-ya.webp'
import HeaderReunionesFranquiciados from 'images/SeccionesFranquiciados/headers/header-reuniones-franquiciados.webp'

import Secccion1Imagen1 from 'images/SeccionesFranquiciados/Seccion1/responsables-de-area.webp'
import Secccion1Imagen2 from 'images/SeccionesFranquiciados/Seccion1/etapas-de-apertura.webp'
import Secccion1Imagen3 from 'images/SeccionesFranquiciados/Seccion1/exhibidores-y-muebles.webp'
import Secccion1Imagen4 from 'images/SeccionesFranquiciados/Seccion1/mobiliario-y-equipos.webp'
import Secccion1Imagen5 from 'images/SeccionesFranquiciados/Seccion1/bazar-herramientas.webp'
import Secccion1Imagen6 from 'images/SeccionesFranquiciados/Seccion1/manual-operativo.webp'
import Secccion1Imagen7 from 'images/SeccionesFranquiciados/Seccion1/obligaciones-recomendaciones.webp'
import Seccion1Logo1 from 'images/SeccionesFranquiciados/Seccion1/logo1.webp'
import Seccion1Logo2 from 'images/SeccionesFranquiciados/Seccion1/logo2.webp'
import Seccion1Logo3 from 'images/SeccionesFranquiciados/Seccion1/logo3.webp'
import Seccion1Logo4 from 'images/SeccionesFranquiciados/Seccion1/logo4.webp'
import Seccion1Logo5 from 'images/SeccionesFranquiciados/Seccion1/logo5.webp'
import Seccion1Logo6 from 'images/SeccionesFranquiciados/Seccion1/logo6.webp'
import Seccion1Logo7 from 'images/SeccionesFranquiciados/Seccion1/logo7.webp'

import Seccion2Imagen1 from 'images/SeccionesFranquiciados/Seccion2/fichas-tecnicas-division.png'
import Seccion2Imagen2 from 'images/SeccionesFranquiciados/Seccion2/planillas-imprimibles-division.png'
import Seccion2Imagen3 from 'images/SeccionesFranquiciados/Seccion2/checklist-operatividad-division.png'
import Seccion2Imagen4 from 'images/SeccionesFranquiciados/Seccion2/devoluciones-division.png'
import Seccion2Imagen5 from 'images/SeccionesFranquiciados/Seccion2/comunicacion-precios-division.png'
import Seccion2Logo1 from 'images/SeccionesFranquiciados/Seccion2/logo1.png'
import Seccion2Logo2 from 'images/SeccionesFranquiciados/Seccion2/logo2.png'
import Seccion2Logo3 from 'images/SeccionesFranquiciados/Seccion2/logo3.png'
import Seccion2Logo4 from 'images/SeccionesFranquiciados/Seccion2/logo4.png'
import Seccion2Logo5 from 'images/SeccionesFranquiciados/Seccion2/logo5.png'

import Seccion5Logo1 from 'images/SeccionesFranquiciados/Seccion5/img-archivo.jpg'

import Seccion6Imagen1 from 'images/SeccionesFranquiciados/Seccion6/tutoriales.png'
import Seccion6Imagen2 from 'images/SeccionesFranquiciados/Seccion6/fabricacion-quesos.png'
import Seccion6Imagen3 from 'images/SeccionesFranquiciados/Seccion6/defectos-calidad.png'
import Seccion6Imagen4 from 'images/SeccionesFranquiciados/Seccion6/dia-apertura-bajada-camion.png'
import Seccion6Logo1 from 'images/SeccionesFranquiciados/Seccion6/logo1.png'

import Seccion8Imagen1 from 'images/SeccionesFranquiciados/Seccion8/division-tempo.png'
import Seccion8Imagen2 from  'images/SeccionesFranquiciados/Seccion8/division-aplicaciones.png'
import Seccion8Logo1 from 'images/SeccionesFranquiciados/Seccion8/logo1.png'
import Seccion8Logo2 from 'images/SeccionesFranquiciados/Seccion8/logo2.png'

export const SeccionesFranquiciados = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {nro} = useParams()

  const VideoInstitucional = () => {
    return (
      <>
        <img alt="Encabezado" className='section__header' src={HeaderVideo}/>
        <div>
          <p style={{ color: 'var(--bg)',  fontSize: '24px', marginTop: '2rem' }}>
            Los propios protagonistas nos cuentan en primera persona acerca de este gran sueño hecho realidad.
          </p>
          <div className='marginVideo'>
            <YoutubeEmbed embedId='lbXJGwJHj9E'/>
          </div>
          <p style={{ color: 'var(--bg)',  fontSize: '24px' }}>
            Manejo de mercadería-Proceso Productivo.
          </p>
          <div className='marginVideo'>
            <YoutubeEmbed embedId='_vmPJD16RMU'/>
          </div>

        </div>
      </>
    )
  }

  const AperturaLocal = () => {
    return(
      <>
        <img alt="Encabezado" className='section__header' src={HeaderApertura}/>
        <BoxCapacita 
          title={Secccion1Imagen1} 
          img={Seccion1Logo1}
          iframe={[{title:"Ver Información",src:"12PLq-mk4dscFECLezo3kZ4VWB1w6awi0"}]}
        >
          <p>En este documento se encuentran especificadas todas las áreas de la empresa, con sus respectivos responsables para saber a quién acudir ante eventuales dudas o consultas.</p>
        </BoxCapacita>
        <BoxCapacita 
          title={Secccion1Imagen2} 
          img={Seccion1Logo2}
          iframe={[{title:"Ver Información",src:"1kD9rnWJSdaNUl62CIMUxUAPT3oHlhxR-"}]}
        >
          <p>Check list de pasos a seguir para la apertura del local. Éstos están colocados en forma cronológica y deberán estar TODOS realizados para una correcta puesta en marcha de la franquicia.</p>
          <p>Contiene listado de contactos de Luz Azul y proveedores externos así como el listado detallado de lo que deben comprar (Mobiliario, bazar, informática, etc).</p>
          <p>Al final contiene importante información practica de documentación a exponer en el local y cómo actuar ante inspecciones.</p>
        </BoxCapacita>
        <BoxCapacita 
          title={Secccion1Imagen3} 
          img={Seccion1Logo3}
          iframe={[{title:"Ver Información",src:"1-bL0y3W0z8x4k4K4t_nd0G5tVmgHdrO_"}]}
        >
          <p>En este documento encontrarán todos los muebles y exhibidores provistos exclusivamente por la empresa Concept (Maia). Las medidas, colores y diseño son críticos para la imagen de la empresa, por lo tanto no pueden ser adquiridos externamente.</p>
        </BoxCapacita>
        <BoxCapacita 
          title={Secccion1Imagen4} 
          img={Seccion1Logo4}
          iframe={[{title:"Ver Información",src:"1HnavWIZn4klkrdalnXRTlcWt7_hS0Ok8"}]}
        >
          <p>Especificaciones y características de heladeras, muebles de sala de corte, etc. QUE DEBEN SER ADQUIRIDOS POR EL FRANQUICIADO a proveedores sugeridos u otros.</p>
        </BoxCapacita>
        <BoxCapacita 
          title={Secccion1Imagen5} 
          img={Seccion1Logo5}
          iframe={[{title:"Ver Información",src:"1vC40Z4egYkPqptzlMEdT0du_5FmbF8jt"}]}
        >
          <p>Listado y ejemplos de todos los utensilios y herramientas INDISPENSABLES para la apertura del local. Los mismos deben estar ANTES DE LA LLEGADA DEL CAMIÓN y en las CANTIDADES DETALLADAS.</p>
        </BoxCapacita>
        <BoxCapacita 
          title={Secccion1Imagen6} 
          img={Seccion1Logo6}
          iframe={[{title:"Ver Información",src:"1zbODLdYpjstmUBoIJZACwgBZw9BmCPBJ"}]}
        >
          <p>Detalle de normas y procedimientos de acuerdo a las especificaciones de la Asociación Argentina de Franquicias.</p>
        </BoxCapacita>
        <BoxCapacita 
          title={Secccion1Imagen7} 
          img={Seccion1Logo7}
          iframe={[{title:"Ver Información",src:"1x-XMxKlrL9o1XRw9qLyDDC0nEkxWLe_t"}]}
        >
          <p>Este documento extrae las obligaciones y recomendaciones que deben tenerse en cuenta una vez que el local se encuentre operativo. Además, muestra índices que determinan la correcta administración del local.</p>
        </BoxCapacita>
      </>
    )
  }

  const PlantillasDeManejoYFichasTecnicas = () => {
    return (
      <>
        <img alt="Encabezado" className='section__header' src={HeaderPlantillasDeManejoYFichasTecnicas}/>
        <BoxCapacita 
          title={Seccion2Imagen1} 
          img={Seccion2Logo1}
          iframe={
            [{title:"Luz Azul",src:"1pGpUzs3Jpm8_QB1405-m1m2YOJvBl9Jf"},
            // {title:"Azulandia",src:"1MnXZmXs5p8FseNkxWEF6sOc3eBjVOw2T"},
            {title:"Fox",src:"1ZwnSA-4ba-z2YKaeGnNBm4skg5W-qkN4"},
            {title:"Arytza",src:"13REKP-wDE8oQcTeKuUtLobgrS5ybKAyb"},
            // {title:"Pré Vert",src:"108Ij5r748luMeKKRm-aXm8PnlvwvarCu"},
            {title:"Cachalote",src:"1UZqgYoxHm1S4OG4mpTXKYm8Nhnw6pOHL"},
            // {title:"Lui Mines",src:"1yCd8cuAl2T6buOh2Eh1BgsdFt2H3Xb7D"},
            // {title:"Papelería y Gráfica",src:"1eiYt5AV4RdDyzRqV3YoCuDYRXTYOICzr"}, 
            {title:"Tapalque",src:"1pm0X6NaFHksdJebnSpk8pKr94uqnD4Wc"}]
          }
        >
          <p>Descripción y características de los productos que comercializamos en la cadena. Clickeando en cada marca se accede a la ficha correspondiente.</p>
        </BoxCapacita>
        <BoxCapacita 
          title={Seccion2Imagen2} 
          img={Seccion2Logo2}
          iframe={[{title:"Ver Información",src:"15qIj7FTzPQbT695hdbEIw1Kr1PMcokAO"}]}
        >
          <p>En este indice encontrarán todas las planillas de uso cotidiano para el manejo del local.</p>
        </BoxCapacita>
        <BoxCapacita 
          title={Seccion2Imagen3} 
          img={Seccion2Logo3}
          iframe={[{title:"Ver Información",src:"1vK1WWqrBq-Uuz0HtYhDuM9W8sQ6dfCZr"}]}
        >
          <p>Es una hoja de ruta para adquirir el hábito operativo del manejo del local.</p>
        </BoxCapacita>
        <BoxCapacita 
          title={Seccion2Imagen4} 
          img={Seccion2Logo4}
          iframe={[{title:"Ver Información",src:"16C_amVqlkkdfZWwYks7IoWr7cMSDMN-H"}]}
        >
          <p>Procedimiento general para las devoluciones, indica qué se puede devolver y qué no, cómo comunicarlo a la empresa y por qué canales, recomendaciones varias de la manipulación de las devoluciones.</p>
        </BoxCapacita>
        <BoxCapacita 
          title={Seccion2Imagen5} 
          img={Seccion2Logo5}
          iframe={[{title:"Ver Información",src:"15JDxvdLlEm4eY7SGs054wMaJEkdPRM9X"}]}
        >
          <p>Acá encontrarán ejemplos de cómo deben ser exhibidos los descuentos y promociones en el salón de ventas.</p>
        </BoxCapacita>
      </>
    )
  }
  
  const ReunionesFranquiciados = () => {

    const videos = [
      {title:"05/08/2022 Reunión Zoom - NUEVO PROCEDIMIENTO CIERRE DE CAJA",embedId:"jfLvqgnv_D0"},
      {title:"06/04/2022 Reunión Zoom - CHARLAS EMPRESARIALES",embedId:"LJ6eiv3CzYU"},
      {title:"25/02/2022 Reunión Zoom - ACCIONES Y COMUNICACION 2022",embedId:"SxCAK3pledo"},
      {title:"10/02/2022 Reunión Zoom - PLAN COMUNICACION 2022",embedId:"1ZTIHXe52_w"},
      {title:"19/11/2021 Reunión Zoom - NUEVAS DIRECTIVAS",embedId:"LIPqXpKaxcg"},
      {title:"22/10/2021 Reunión Zoom - PRESENTACIÓN LUI",embedId:"ch4VQC0EKzo"},
      {title:"07/09/2021 Reunión Zoom - OBJETIVOS CUMPLIDOS Y NOVEDADES",embedId:"S63jx70RsxI"},
      {title:"01/07/2021 Reunión Zoom - PRESENTACIÓN LA HUERTA",embedId:"GpBm4q7FXCU"},
      {title:"25/02/2021 Reunión Zoom - MARKETING 2021",embedId:"MnA5cLbVFUQ"},
      {title:"23/12/2020 Reunión Zoom - PRESENTACIÓN ARYTZA",embedId:"BwSKbnBqBCs"},
      {title:"12/12/2020 Reunión Zoom - CIERRE 2020",embedId:"CEzAuG0LuWM"},
      {title:"22/10/2020 Reunión Zoom - PRESENTACIÓN CASA MONTES",embedId:"r2_-Y21npj0"},
      {title:"20/08/2020 Reunión Zoom - ACTUALIZACIÓN PRECIOS BALANZAS",embedId:"Q9DHRTPDcVM"},
      {title:"29/07/2020 Reunión Zoom - CAPACITACIÓN CALIDAD",embedId:"go8U6DHRMgQ"},
      {title:"29/07/2020 Reunión Zoom - SOFTWARE TEMPO",embedId:"jL6yor4rktQ"},
      {title:"21/07/2020 Reunión Zoom - CAPACITACIÓN APERTURA DE LOCAL",embedId:"wBV9bjlu9iY"},
      {title:"22/06/2020 Reunión Zoom - MARKETING Y COMUNICACIÓN",embedId:"kOOOVozVOXY"},
      {title:"01/06/2020 Reunión Zoom - CAPACITACIÓN FIAMBRES FOX",embedId:"vZyrdJjpamo"},
      {title:"18/05/2020 Reunión Zoom - REUNIÓN FRANQUICIAS INTERCAMBIO FOX",embedId:"Dq9Cm9AZnuM"},
      {title:"08/04/2020 Reunión Zoom - REUNIÓN FRANQUICIAS PRESENTACIÓN ALIANZA",embedId:"-p61Rowrd4I"},
    ]

    return (
      <>
        <img alt="Encabezado" className='section__header' src={HeaderReunionesFranquiciados}/>
        <p className='subtitle'>En la siguiente guía encontrarán todas las reuniones grabadas de zoom, para consultar la que necesiten.</p>
        <p className='subtitle'><strong>ATENCIÓN: Para acceder a los videos o planillas descargables que se presentan a continuación, deben tener abierta la cuenta oficial e institucional del local, la que es @luz-azul.com.ar, de otra manera, no podrán visualizarlos.</strong></p>
        {videos.map(({title,embedId}) => {
          return(
            <Infobox key={title} title={title}>
              <YoutubeEmbed embedId={embedId}/>
            </Infobox>
          )
        })}
      </>
    )
  }

  const PedidosYa = () => {

    return(
      <>
        <img alt="Encabezado" className='section__header' src={HeaderPedidosYa}/>
        <p className='subtitle'>Informacion relevante de la alianza con esta plataforma.</p>
        <BoxCapacita
          stringTitle="IDs Comunicacion WhatsApp"
          img={Seccion5Logo1}
          iframe={[{title:"Ver Información",src:"151J3mW1uGI_DVZNATtncT2WbhBDe-5Yd"}]}
        >
          <p><strong>Planilla Excel con IDs de cada sucursal.</strong></p>
        </BoxCapacita>
        <BoxCapacita
          stringTitle="Guia Tutoriales - Pedidos Ya"
          img={Seccion5Logo1}
          iframe={[{title:"Ver Información",src:"151J3mW1uGI_DVZNATtncT2WbhBDe-5Yd"}]}
        >
          <p><strong>PDF con información útil de consulta.</strong></p>
        </BoxCapacita>
        <BoxCapacita
          stringTitle="Manual de uso en PC"
          img={Seccion5Logo1}
          iframe={[{title:"Ver Información",src:"151J3mW1uGI_DVZNATtncT2WbhBDe-5Yd"}]}
        >
          <p><strong>PDF con información acerca de cómo usar la aplicación en PC.</strong></p>
        </BoxCapacita>
        <BoxCapacita
          stringTitle="Pelican 2.0"
          img={Seccion5Logo1}
          iframe={[{title:"Ver Información",src:"151J3mW1uGI_DVZNATtncT2WbhBDe-5Yd"}]}
        >
          <p><strong>PDF con información acerca del uso de Pelican.</strong></p>
        </BoxCapacita>
        <BoxCapacita
          stringTitle="Instructivo Pago Online-Estado de Cuenta"
          img={Seccion5Logo1}
          iframe={[{title:"Ver Información",src:"151J3mW1uGI_DVZNATtncT2WbhBDe-5Yd"}]}
        >
          <p><strong>PDF con contenido informativo del estado de cuenta.</strong></p>
        </BoxCapacita>
      </>
    )
  }

  const CapacitacionPersonal  = () => {
    return(
      <>
        <img alt="Encabezado" className='section__header' src={HeaderCapacitacion}/>
        <p className='subtitle'>
          Respuestas a dudas que se generan día a día, tips y consignas para mejorar.
        </p>
        <YoutubeEmbed embedId='W7LlhAD3XA4'/>
      </>
    )
  }

  const  GestionLocal = () => {
    return(
      <>
        <div className='marginVideo'>
          <CapacitacionPersonal />
        </div>
        <img alt="Encabezado" className='section__header' src={HeaderManejoMercaderia}/>
        <BoxCapacita 
          title={Seccion6Imagen1} 
          img={Seccion6Logo1}
          iframe={[
            {title:"7.1 Atención al cliente y ventas",embedId:"Egzxb2bompA"},
            {title:"7.2.1 Como descargar la App",embedId:"N4sd3FGyLF8"},
            // {title:"7.2.2 Como manejar los descuentos con la App",embedId:"RvopCSrBYhI"},
            {title:"7.3.1 Como cortar y envasar quesos",embedId:"5vEzapB0tkQ"},
            {title:"7.3.2 Como cortar en grana los quesos",embedId:"waG2i3Vc05c"},
            {title:"7.3.3 Trozado y etiquetado de queso cremoso",embedId:"1e3vErUuev8"},
            {title:"7.3.4 Corte de queso azul",embedId:"nmWxgGrxZBg"},
            {title:"7.3.5 Como cortar el queso brie",embedId:"P95ij4bIcOo"},
            {title:"7.3.6 Como cortar los saborizados",embedId:"DkKbm4hndXU"},
            {title:"7.3.7 Feteado y etiquetado de fiambres",embedId:"bEGQKDcgqzE"},
            {title:"7.3.8 Cortado y Produccion de Colitas",embedId:"8fIBEO9OPY0"},
            {title:"7.3.9 15 pizzas en 15 minutos",embedId:"onywDcwmcFM"},
            {title:"7.3.10 40 promos en 60 minutos",embedId:"eVU4JXAHK0k"},
            {title:"7.3.11 Preparación de picadas",embedId:"OK_RNhhlZxE"},
            {title:"7.3.12 5 picaditas en 12 minutos",embedId:"u7JYBwRvo0Q"},
            {title:"7.3.13 Como trozar los dulces de lata",embedId:"rrgjUVRw9dc"},
            {title:"7.3.14 Provoleta Lista",embedId:"vgnFZsvUo20"},
            {title:"7.3.15 Salamines y Bastones",embedId:"yK5WayyQi10"},
            {title:"7.3.16 Envasado de maní",embedId:"l3YW_KWrPxs"},
            {title:"7.3.17 Abrir pote de aceitunas",embedId:"mE9O5eAik94"},
            {title:"7.3.18 Como bajar el camión",embedId:"hRvzAOAerhc"},
            {title:"7.4.1 Armado de mesa de degustación",embedId:"_RSd7pamdRQ"},
            {title:"7.4.2 Armado de salaminero",embedId:"OwiX9lemtSY"},
            {title:"7.4.3 Armado de DDL y pura fruta",embedId:"S1H2EkivpMM"},
            {title:"7.4.4 Armado mueble de vino",embedId:"CTp_Wmy2AzM"},
            {title:"7.4.5 Armado mueble de quesos",embedId:"feAFLiIZQr4"},
            {title:"7.4.6 Armado mueble alfajores (PROXIMAMENTE)",embedId:"Proximamente"},
            {title:"7.4.7 Armado mobiliario Molanes",embedId:"4ai42Wkg4l8"},
            {title:"7.4.8 Armado heladera góndola",embedId:"8Amrmjd998I"},
            {title:"7.4.9 Cómo apilar los packs de leche",embedId:"vX4dsgw6Isk"},
            {title:"7.4.10 Cómo identificar el DDL",embedId:"Joifc4TmsnI"},
            {title:"7.5.1 Como limpiar la cortadora de fiambre",embedId:"boVDpRCmaD8"},
            {title:"7.5.2 Afilado de cortadora de fiambre",embedId:"5oCj0-2-Eys"},
            {title:"7.5.3 Armado de enfilmadora",embedId:"BbMHQ_C49dE"},
            {title:"7.5.4 Armado y uso de picadora de muzzarella",embedId:"SAboElaAYAY"},
            {title:"7.6.1 Metodo envio de dinero",embedId:"6cTQjEzgAuw"},
            {title:"7.6.2 Preguntas frecuentes",src:"asdasdasdasd"},
          ]}
        >
          <p>Acá se muestran los tutoriales de los procedimientos de manejos de mercaderia y herramientas segmentados bajo títulos específicos para un acceso más rápido y práctico.</p>
        </BoxCapacita>
        {/* <BoxCapacita 
          title={Seccion6Imagen2} 
          img={Seccion6Logo1}
          iframe={[{title:"Ver Video",embedId:"_vmPJD16RMU"}]}
        >
          <p>En este video se muestra el proceso de fabricación de los quesos, partiendo de la recepción de la leche hasta llegar a los locales.</p>
        </BoxCapacita> */}
        <BoxCapacita 
          title={Seccion6Imagen3} 
          img={Seccion6Logo1}
          iframe={[{title:"Ver Video",embedId:"Prjbe2vAQ58"}]}
        >
          <p>En este video se describen los principales defectos de calidad, por qué suceden y cómo reconocerlos.</p>
        </BoxCapacita>
        {/* <BoxCapacita 
          title={Seccion6Imagen4} 
          img={Seccion6Logo1}
          iframe={[{title:"Ver Video",embedId:"4kwBsHW81ws"}]}
        >
          <p>Video descriptivo del día de la apertura del local, desde la llegada del camión hasta el momento de la inauguración.</p>
        </BoxCapacita> */}
      </>
    )
  }

  const ManejoInformacion = () => {
    return(
      <>
        <img alt="Encabezado" className='section__header' src={HeaderManejoInfo}/>
        <p className='subtitle'>En la siguiente guía encontrarán información explicativa para la utilización de los sistemas informaticos que dan soporte a la correcta toma de decisiones.</p>
        <p className='subtitle'><strong>ATENCIÓN: Para acceder a los videos o planillas descargables que se presentan a continuación, deben tener abierta la cuenta oficial e institucional del local, la que es @luz-azul.com.ar, de otra manera, no podrán visualizarlos.</strong></p>
        <BoxCapacita
          title={Seccion8Imagen1}
          img={Seccion8Logo1}
          iframe={[{title:"Ver Información",src:"1jIVopv82WkCpipSYi2EsXOUwkMwTYN1O"}]}
        >
          <p>En el siguiente índice encontrarán información esencial para la correcta gestión del sistema informático utilizado en el local. Es de vital importancia saber administrarlo para una correcta toma de decisiones.</p>
        </BoxCapacita>
        <BoxCapacita
          title={Seccion8Imagen2}
          img={Seccion8Logo2}
          iframe={[{title:"Ver Información",src:"10NeTOxJ3jkXugx2SDm8crYYgkJOoPj2z"}]}
        >
          <p>En el siguiente índice encontrarán información acerca de todas las aplicaciones desarrolladas por Luz Azul para la correcta gestión y adecuación de los procedimientos acordados.</p>
        </BoxCapacita>
      </>
    )
  }

  const HandleCase = (nro)  => {
    
    switch (nro) {
      default:
        return(<VideoInstitucional />)
      case "1":
        return(<AperturaLocal />)
      case "2":
        return(<PlantillasDeManejoYFichasTecnicas />)
      case "3":
        // return(<CapacitacionPersonal />)
        return(<GestionLocal />)
      case "4":
        // return(<ReunionesFranquiciados />)
        return(<ManejoInformacion />)
      case "5":
        return(<ReunionesFranquiciados />)
      // case "6":
      //   return (<GestionLocal />)
      // case "7":
      //   return(<ManejoInformacion />)
        
    }
  }

  return (
    <div className='container'>
      <Link to={paths.franquiciado.url}>
        <button className='btn generic-margin'>Volver atrás</button>
      </Link>
      {HandleCase(nro)}
    </div>
  )

}

export const BoxCapacita = ({stringTitle,title,children, img, iframe})  => {

  return (
    <div className='boxCapacita boxShadow'>
      <div className='boxCapacitaContainer'>
        {stringTitle && <h2 className='subtitle subtitleBoxCapacita'>{stringTitle}</h2>}
        {title && <div alt="titulo" className='boxCapacita__title' style={{backgroundImage: `url(${title})`}}></div>}
        <div className='boxCapacita__inner'>
          <div className='boxCapacita__inner-img' >
            <img src={img} alt="img" className="boxCapacita__img"/>
          </div>
          <div className='subtitle boxCapacita__children'>
            {children}
          </div>
        </div>
        {iframe.map((frame, index) => {
          return(
            <Infobox key={index} title={frame.title || "Ver Información"}>
              {frame.src && <iframe title={frame.title} src={`https://drive.google.com/file/d/${frame.src}/preview`} width="100%" height="480" allow="autoplay"></iframe>}
              {frame.embedId && <YoutubeEmbed embedId={frame.embedId}/>}
            </Infobox>
          )
        })}
      </div>
    </div>
  )
}
