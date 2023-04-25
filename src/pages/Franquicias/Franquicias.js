import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import YoutubeEmbed from 'components/YoutubeEmbed/YoutubeEmbed'
import { Infobox } from 'components/Infobox/Infobox'
import { ContactForm } from 'components/ContactForm.css/ContactForm'
import { paths } from 'routes/paths'
import "./Franquicias.css"
import PresentacionFranquicias from 'utils/presentacionComercialFranquicia.pdf'

export const Franquicias = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <h1 className="title">Franquicias</h1>
      <div className='franquicias__container container'>
      <p  style={{ margin: '2rem 0', fontSize: '24px', fontWeight: 'bolder', textAlign: 'end', color: 'var(--bg)' }} >¿Sos franquiciado? <Link to={paths.franquiciado.url} className="franquicias__link-franquiciado" ><i><u>Ingresa acá</u></i></Link></p>
        {/* <YoutubeEmbed embedId="videoseries?list=PLOMCZGrDhncROB5Qs5SyZRLYoMehliYEf"/> */}
        <YoutubeEmbed embedId="EBn--Mg0tZ0"/>
        <br></br>
        <br></br>
        <YoutubeEmbed embedId="UjwA3Zhhe5M"/>
        <br></br>
        <br></br>
        <YoutubeEmbed embedId="ZZ4oq1aaxRA"/>
        <br></br>
        <br></br>
        <YoutubeEmbed embedId="JD3TD4iB8Cs"/>
        <br></br>
        <br></br>
        <YoutubeEmbed embedId="Ku8YvusmJv8"/>
        <h2 className='subtitle'>Tenga su propia sucursal Luz Azul</h2>
        <p className='franquicias__description'>Las franquicias de Luz Azul son un negocio probado y rentable, con muchas posibilidades de crecimiento. Es condición para su instalación estar en una ciudad de más de 50.000 habitantes y una inversión estimada US$ 45.000 dólares. Si cumple estas condiciones y desea más información escríbanos su consulta.</p>
        <Infobox title="PRESENTACIÓN COMERCIAL FRANQUICIA">
        {/* <embed src='https://drive.google.com/file/d/1BZRHViRXxC6fmP4eEpoNtVEzOyBOwdBn/view?usp=sharing' width="100%" height="650" /> */}
        <object width="100%" height="650" data={PresentacionFranquicias} type="application/pdf"></object>
        
        </Infobox>
        <Infobox title="NUESTRAS FRANQUICIAS">
          <p>LUZ AZUL es una fábrica de productos lácteos, ubicada en la localidad de Azul, con más de 50 años en el mercado.</p>
          <p>LUZ AZUL es la única franquicia del rubro que se origina desde una fábrica y no de un distribuidor, lo cual implica la eliminación de intermediarios en la mayor parte del mix de productos a comercializar, mejorando considerablemente los márgenes al franquiciado.</p>
          <p>Dependiendo del módulo de franquicia, el franquiciado puede operar su local y al mismo tiempo desarrollar un canal de venta mayorista en su territorio de exclusividad. De ésta manera, puede generar ingresos fuera de su local.</p>
          <p>Los locales Luz Azul presentan una arquitectura moderna, racionalista, pensada en lograr un ambiente en el que nuestros clientes deseen permanecer.</p>
          <p>Luz Azul cuenta con una amplia oferta de productos de calidad reconocida, con los que ha obtenido múltiples premios otorgados por las organizaciones que nuclean a las empresas productoras del sector.</p>
          <p>EL franquiciado no necesita tener experiencia comercial, ya que contará con un asesoramiento integral, desde la búsqueda del local en el que se instalará la franquicia, la capacitación previa, la reclusión de personal, la instalación del local, habilitaciones, asistencia intensiva inicial y periódica.</p>
        </Infobox>
        <Infobox title="CARACTERISTICAS DE NUESTRO NEGOCIO">
          <p>Rubro es estable, productos de consumo masivo.</p>
          <p>Elevados volúmenes de facturación.</p>
          <p>Baja dotación de personal.</p>
          <p>Sistemas informáticos que facilitan el control operacional.</p>
          <p>Los franquiciados y su personal reciben capacitación permanente.</p>
          <p>La franquiciante envía -periódicamente- personal especializado para supervisar y asistir al franquiciado.</p>
          <p>Operatoria muy sencilla, el franquiciado se maneja únicamente con un proveedor, lo cual concentra los controles, los pagos, la recepción de mercadería, etc.</p>
          <p>Los locales registran el 100% de sus ventas, facilitando aún más el control del personal.</p>
          <p>Aprovisionamiento de mercadería asegurado.</p>
          <p>Mayores márgenes que un competidor.</p>
          <p>Precios al público muy competitivos.</p>
          <p>Excelente calidad de productos.</p>
        </Infobox>
        <Infobox title="¿POR QUÉ UNA FRANQUICIA LUZ AZUL?">
          <p>Negocio probado: nuestras sucursales en funcionamiento constituyen nuestra prueba de éxito comercial.</p>
          <p>Asistencia Permanente: capacitaciones, asesoramiento, supervisión y asistencia periódicas.</p>
          <p>Procesos Simples: El funcionamiento del negocio está reglamentado en los Manuales Operativos, de fácil comprensión y ejecución.</p>
          <p>Producto de Alta Calidad: Nuestros productos reciben premios, otorgados por acreditadas instituciones del sector.</p>
          <p>Rentabilidad: La rentabilidad obtenida, permite un acelerado recupero de la inversión.</p>
        </Infobox>
        <div  style={{ margin: '2rem 0',}}>
          <h2 className='subtitle'>Solicitud de información</h2>
          <p>Por favor enviar un email a <a href="mailto:franquicias@luz-azul.com.ar" style={{ color: "blue" }}>franquicias@luz-azul.com.ar</a></p>
        </div>
      </div>
    </>
  )
}
