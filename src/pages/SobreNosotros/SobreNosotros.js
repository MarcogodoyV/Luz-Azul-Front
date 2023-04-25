import React, {useEffect, useState} from 'react'
import "./SobreNosotros.css"
import "pages/Cajas/Cajas.css"
import YoutubeEmbed from 'components/YoutubeEmbed/YoutubeEmbed'
import AboutBordeInferior from 'images/sobreNosotros/inferior_fondo-premios.png'
import AboutBordeSuperior from 'images/sobreNosotros/superior_fondo-premios.png'
import FondoEscritorio from 'images/sobreNosotros/fondo_premios.png'

import IconoOroTandil from 'images/sobreNosotros/icono_oro_cata-tandil.png'
import IconoPlataTandil from 'images/sobreNosotros/icono_plata_cata-tandil.png'
import IconoBronceTandil from 'images/sobreNosotros/icono_bronce_cata-tandil.png'
import IconoOroSuipacha from 'images/sobreNosotros/icono_oro_suipacha.png'
import IconoPlataSuipacha from 'images/sobreNosotros/icono_plata_suipacha.png'
import IconoBronceSuipacha from 'images/sobreNosotros/icono_bronce_suipacha.png'
import ReconocimientoTandil from 'images/sobreNosotros/icono_gran-campeon_cata-tandil.png'
import ReconocimientoSuipacha from 'images/sobreNosotros/icono_gran-campeon_suipacha.png'
import ReconocimientoMaestroQuesero from 'images/sobreNosotros/icono_distincion-quesero_cata-tandil.png'

import MedallaOroSuipacha from 'images/sobreNosotros/medalla-oro_suipacha.png'
import MedallaPlataSuipacha from 'images/sobreNosotros/medalla-plata_suipacha.png'
import MedallaBronceSuipacha from 'images/sobreNosotros/medalla-bronce_suipacha.png'
import MedallaCampeonSuipacha from 'images/sobreNosotros/gran-campeon_suipacha.png'

import MedallaOroTandil from 'images/sobreNosotros/medalla-oro_cata-tandil.png'
import MedallaPlataTandil from 'images/sobreNosotros/medalla-plata_cata-tandil.png'
import MedallaBronceTandil from 'images/sobreNosotros/medalla-bronce_cata-tandil.png'
import MedallaCampeonTandil from 'images/sobreNosotros/gran-campeon_cata-tandil.png'

export const SobreNosotros = () => {

  const windowsWidth = window.innerWidth

  const [toggleView, setToggleView] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {

    if(windowsWidth <= 568) {
        setToggleView('movil')
    } else {
        setToggleView('desktop')
    }

}, [toggleView])

  const infoPremios = [
    {titulo:"13ra Cata de Quesos Tandil 2022",
    evento:'tandil',
    lista:  
      [
        {
          descripcion: 'Queso ----',
          puesto:`${IconoOroTandil}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso ----',
          puesto:`${IconoPlataTandil}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso ----',
          puesto:`${IconoBronceTandil}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"Expo Suipacha 2019",
    evento:'suipacha',
    lista:  
      [
        {
          descripcion: 'Queso Cremoso, Gouda, Por Salut, Provolone',
          puesto:`${IconoOroSuipacha}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Sardo',
          puesto:`${IconoPlataSuipacha}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"12va Cata de Quesos Tandil 2019",
    evento:'tandil',
    lista:  
      [
        {
          descripcion: 'Queso Pategrás',
          puesto:`${IconoOroTandil}`,
          reconocimiento: `${ReconocimientoTandil}`
        },
        {
          descripcion: 'Queso Fontina',
          puesto:`${IconoOroTandil}`,
          reconocimiento: null
        },
        {
          descripcion: 'Maestro Quesero ---',
          puesto:`${ReconocimientoMaestroQuesero}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"Expo Suipacha 2018",
    evento: 'suipacha',
    lista:  
      [
        {
          descripcion: 'Queso Sardo, Gouda, Pategrás, Romanito y Provolone',
          puesto:`${IconoOroSuipacha}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Saborizado y Parrillero',
          puesto:`${IconoPlataSuipacha}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Barra, Reggianito y Cremoso',
          puesto:`${IconoBronceSuipacha}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"11va Cata de Quesos Tandil 2018",
    evento: 'tandil',
    lista:  
      [
        {
          descripcion: '---',
          puesto:`${IconoOroTandil}`,
          reconocimiento: null
        },
        {
          descripcion: '---',
          puesto:`${IconoPlataTandil}`,
          reconocimiento: null
        },
        {
          descripcion: '---',
          puesto:`${IconoBronceTandil}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"Expo Suipacha 2017",
    evento: 'suipacha',
    lista:  
      [
        {
          descripcion: 'Queso Por Salut y Queso Barra',
          puesto:`${IconoOroSuipacha}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Gouda y Mozzarella',
          puesto:`${IconoPlataSuipacha}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Pategrás y Provoleta Parrillera',
          puesto:`${IconoBronceSuipacha}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"10ma Cata de Quesos Tandil 2017",
    evento: 'tandil',
    lista:  
      [
        {
          descripcion: 'Queso Gouda, Romanito, Parrillero y Queso Barra',
          puesto:`${IconoOroTandil}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Saborizado con finas Hierbas y Pategrás',
          puesto:`${IconoPlataTandil}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Cremoso y Por Salut',
          puesto:`${IconoBronceTandil}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"Expo Suipacha 2016",
    evento: 'suipacha',
    lista:  
      [
        {
          descripcion: 'Queso Provolone, Romanito, Sardo y Parrillero',
          puesto:`${IconoOroSuipacha}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Gouda y Saborizado',
          puesto:`${IconoPlataSuipacha}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Pategrás',
          puesto:`${IconoBronceSuipacha}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"9na Cata de Quesos tandil 2016",
    evento: 'tandil',
    lista:  
      [
        {
          descripcion: 'Queso Pategrás',
          puesto:`${IconoOroTandil}`,
          reconocimiento: `${ReconocimientoTandil}`
        },
        {
          descripcion: 'Queso Fontina, Romanito, Provolone, Gouda',
          puesto:`${IconoOroTandil}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Pategrás Sandwich, Parrillero, Saborizado Finas Hierbas',
          puesto:`${IconoPlataTandil}`,
          reconocimiento: null
        },
        {
          descripcion: 'Maestro Quesero Luciano Gini',
          puesto:`${ReconocimientoMaestroQuesero}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"Expo Suipacha 2015",
    evento: 'suipacha',
    lista:  
      [
        {
          descripcion: 'Queso Barra',
          puesto:`${IconoOroSuipacha}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Sardo, Parrillero, Gouda y Saborizado con Hierbas',
          puesto:`${IconoPlataSuipacha}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Provolone, Romanito y Muzzalera',
          puesto:`${IconoBronceSuipacha}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"8va Cata de Quesos Tandil 2015",
    evento: 'tandil',
    lista:  
      [
        {
          descripcion: 'Queso Pategrás, Saborizado con Hierbas, Provolone y Gouda',
          puesto:`${IconoOroTandil}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Cremoso, Barra, Parrillero y Sardo',
          puesto:`${IconoPlataTandil}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Romanito y Fontina',
          puesto:`${IconoBronceTandil}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"Expo Suipacha 2014",
    evento: 'suipacha',
    lista:  
      [
        {
          descripcion: 'Dulce de Leche Repostero',
          puesto:`${IconoOroSuipacha}`,
          reconocimiento: `${ReconocimientoSuipacha}`
        },
        {
          descripcion: 'Queso Barra, Pategrás y Dulce de Leche Familiar',
          puesto:`${IconoOroSuipacha}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Saborizado',
          puesto:`${IconoPlataSuipacha}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Fontina',
          puesto:`${IconoBronceSuipacha}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"7ma Cata Tandil 2014",
    evento: 'tandil',
    lista:  
      [
        {
          descripcion: 'Queso Cremoso',
          puesto:`${IconoOroTandil}`,
          reconocimiento: `${ReconocimientoTandil}`
        },
        {
          descripcion: 'Queso Pategrás, Fontina, Saborizado con Hierbas, Parrillero, Gouda y Provolone',
          puesto:`${IconoOroTandil}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Romanito',
          puesto:`${IconoPlataTandil}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Por Salut, Sardo y queso Barra',
          puesto:`${IconoBronceTandil}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"Expo Suipacha 2013",
    evento: 'suipacha',
    lista:  
      [
        {
          descripcion: 'Queso Cremoso',
          puesto:`${IconoPlataSuipacha}`,
          reconocimiento: null
        },
        {
          descripcion: 'Dulce de Leche Repostero',
          puesto:`${IconoBronceSuipacha}`,
          reconocimiento: null
        },
      ]
    },
    {titulo:"6ta Cata Tandil 2013",
    evento: 'tandil',
    lista:  
      [
        {
          descripcion: 'Queso Pategrás y Gouda',
          puesto:`${IconoOroTandil}`,
          reconocimiento: null
        },
        {
          descripcion: 'Queso Romanito',
          puesto:`${IconoPlataTandil}`,
          reconocimiento: null
        },
      ]
    },
  ]

  const infoPremiosSuipacha = infoPremios.filter(premio => premio.evento === 'suipacha')
  const infoPremiosTandil = infoPremios.filter(premio => premio.evento === 'tandil')


  if(toggleView != 'movil') {
    return (
      <>
        <h1 className="title">Sobre Nosotros</h1>
        <div className='container'>
          <p  className='sectionAboutText'>
            En 2012, empezamos a transitar una nueva etapa que nos llevó a este presente. Con &nbsp;
            <strong>Gabriela Benac</strong>
            , de vasta trayectoria en la industria quesera, a la cabeza del equipo, &nbsp;
            <strong><i>la compañía se reconvirtió y potenció su capacidad de crecimiento.</i></strong>
          </p>
          <p  className='sectionAboutText'>
            Hoy, desde nuestra propia fábrica,&nbsp;
            <strong><i>producimos  80 mil litros de leche fluida diaria, y procesamos más de 50 productos propios</i></strong> &nbsp;
            en distintas presentaciones. 
          </p>
          <p  className='sectionAboutText'>
            Contamos con &nbsp;<i>formato de negocio moderno</i>&nbsp; que se adapta de manera permanente a las necesidades del mercado a través de nuestro &nbsp;
            <strong><i>sistema de franquicias a lo largo de todo el país.</i></strong>
          </p>
          <p  className='sectionAboutText'>
            Apuntamos al consumidor al que le gusta&nbsp; <i>comer algo rico a un precio absolutamente competitivo.</i>&nbsp; Hemos logrado algo que no muchas marcas logran, que es la <strong><i>real relación precio-calidad.</i></strong>
          </p>
          <div className='aboutVideo'>
            <YoutubeEmbed embedId="Ku8YvusmJv8"/>
          </div>
        </div>
        <section style={{ color: 'var(--text-color-alt)', position: 'relative', zIndex: '5' }}>
          <div className='container' style={{ marginTop: '15rem' }}>
            <div>
              <h2 className='sectionPremiosTitle'>Nuestros Premios</h2>
            </div>
            <div style={{ display: 'flex', gap: '50px' }}>
              <div>
                {
                  infoPremiosSuipacha.map((evento, index) => {
                    return(
                      <div className='premios' key={index}>
                        <div>
                          <h3 className='premiosTitle'>{evento.titulo}</h3>
                        </div>
                        <hr className='divider'></hr>
                        <div className='boxPremioEscritorio'>
                          {evento.lista.map((premio, index) => {
                            return(
                              <div className='divPremio' key={index}>
                                {premio.reconocimiento && <img src={premio.reconocimiento} className='iconoPlus'></img>}
                                <img src={premio.puesto}></img>
                                <h4 className='premioDesc'>{premio.descripcion}</h4>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div>
                {
                  infoPremiosTandil.map((evento, index) => {
                    return(
                      <div className='premios' key={index}>
                        <div>
                          <h3 className='premiosTitle'>{evento.titulo}</h3>
                        </div>
                        <hr className='divider'></hr>
                        <div className='boxPremioEscritorio'>
                          {evento.lista.map((premio, index) => {
                            return(
                              <div className='divPremio' key={index}>
                                {premio.reconocimiento && <img src={premio.reconocimiento} className='iconoPlus'></img>}
                                <img src={premio.puesto}></img>
                                <h4 className='premioDesc'>{premio.descripcion}</h4>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='referencia suipacha'>
              <div>
                <div>
                  <h3 className='premiosTitle'>Referencias Suipacha</h3>
                </div>
                <hr className='divider'></hr>
              </div>
              <div className='referencias' style={{ display: 'flex' }}>
                <div className='referenciaContainer' >
                  <div>
                    <img className='referenciaImagen' src={`${MedallaOroSuipacha}`}></img>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '120px' }}>
                  <img src={`${IconoOroSuipacha}`}></img>
                  <p>1er Puesto</p>
                  </div>
                </div>
                <div className='referenciaContainer'>
                  <div>
                    <img className='referenciaImagen' src={`${MedallaPlataSuipacha}`}></img>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '120px' }}>
                  <img src={`${IconoPlataSuipacha}`}></img>
                  <p>2do Puesto</p>
                  </div>
                </div>
                <div className='referenciaContainer'>
                  <div>
                    <img className='referenciaImagen' src={`${MedallaBronceSuipacha}`}></img>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '120px' }}>
                  <img src={`${IconoBronceSuipacha}`}></img>
                  <p>3er Puesto</p>
                  </div>
                </div>
                <div className='referenciaContainer'>
                  <div>
                    <img  className='referenciaImagen' src={`${MedallaCampeonSuipacha}`}></img>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                  <img src={`${ReconocimientoSuipacha}`}></img>
                  <p>Gran Campeón</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='referencia tandil'>
              <div>
                <div>
                  <h3 className='premiosTitle'>Referencias Tandil</h3>
                </div>
                <hr className='divider'></hr>
              </div>
              <div className='referencias' style={{ display: 'flex' }}>
                <div className='referenciaContainer'>
                  <div>
                    <img className='referenciaImagen' src={`${MedallaOroTandil}`}></img>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '120px' }}>
                  <img src={`${IconoOroTandil}`}></img>
                  <p>1er Puesto</p>
                  </div>
                </div>
                <div className='referenciaContainer'>
                  <div>
                    <img className='referenciaImagen' src={`${MedallaPlataTandil}`}></img>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '120px' }}>
                  <img src={`${IconoPlataTandil}`}></img>
                  <p>2do Puesto</p>
                  </div>
                </div>
                <div className='referenciaContainer'>
                  <div>
                    <img className='referenciaImagen' src={`${MedallaBronceTandil}`}></img>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '120px' }}>
                  <img src={`${IconoBronceTandil}`}></img>
                  <p>3er Puesto</p>
                  </div>
                </div>
                <div className='referenciaContainer'>
                  <div>
                    <img  className='referenciaImagen' src={`${MedallaCampeonTandil}`}></img>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                  <img src={`${ReconocimientoTandil}`}></img>
                  <p>Gran Campeón</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className='divider'></hr>
          </div>
          
        </section>
        <img className='fondoEscritorio' src={FondoEscritorio}></img>
      </>
    )
  } else {
    return (
      <>
        <h1 className="title">Sobre Nosotros</h1>
        <div className='container'>
        <p  className='sectionAboutText'>
            En 2012, empezamos a transitar una nueva etapa que nos llevó a este presente. Con &nbsp;
            <strong>Gabriela Benac</strong>
            , de vasta trayectoria en la industria quesera, a la cabeza del equipo, &nbsp;
            <strong><i>la compañía se reconvirtió y potenció su capacidad de crecimiento.</i></strong>
          </p>
          <p  className='sectionAboutText'>
            Hoy, desde nuestra propia fábrica,&nbsp;
            <strong><i>producimos  80 mil litros de leche fluida diaria, y procesamos más de 50 productos propios</i></strong> &nbsp;
            en distintas presentaciones. 
          </p>
          <p  className='sectionAboutText'>
            Contamos con &nbsp;<i>formato de negocio moderno</i>&nbsp; que se adapta de manera permanente a las necesidades del mercado a través de nuestro &nbsp;
            <strong><i>sistema de franquicias a lo largo de todo el país.</i></strong>
          </p>
          <p  className='sectionAboutText'>
            Apuntamos al consumidor al que le gusta&nbsp; <i>comer algo rico a un precio absolutamente competitivo.</i>&nbsp; Hemos logrado algo que no muchas marcas logran, que es la <strong><i>real relación precio-calidad.</i></strong>
          </p>
          <div className='aboutVideo'>
            <YoutubeEmbed embedId="Ku8YvusmJv8"/>
          </div>
        </div>
        <section className='sectionPremios'>
          <img className='bordesPremios'src={AboutBordeSuperior}></img>
          <div className='container'>
            <div>
              <h2 className='sectionPremiosTitle'>Nuestros <strong>Premios</strong> a lo largo del tiempo</h2>
            </div>
            <div>
            {
              infoPremios.map((evento, index) => {
                return(
                  <div class='premios' key={index}>
                    <div>
                      <h3 className='premiosTitle'>{evento.titulo}</h3>
                    </div>
                    <hr className='divider'></hr>
                    <div className='boxPremio'>
                      {evento.lista.map((premio) => {
                        return(
                          <div className='divPremio' key={premio.descripcion}>
                            {premio.reconocimiento && <img src={premio.reconocimiento} className='iconoPlus'></img>}
                            <img src={premio.puesto}></img>
                            <h4 className='premioDesc'>{premio.descripcion}</h4>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })
            }
            </div>
            <div>
              <div>
                <h3 className='premiosTitle'>Referencias Suipacha</h3>
              </div>
              <hr className='divider'></hr>
            </div>
            <div className='referencias'>
              <div className='referenciaContainer'>
                <div>
                  <img className='referenciaImagen' src={`${MedallaOroSuipacha}`}></img>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '120px' }}>
                <img src={`${IconoOroSuipacha}`}></img>
                <p>1er Puesto</p>
                </div>
              </div>
              <div className='referenciaContainer'>
                <div>
                  <img className='referenciaImagen' src={`${MedallaPlataSuipacha}`}></img>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '120px' }}>
                <img src={`${IconoPlataSuipacha}`}></img>
                <p>2do Puesto</p>
                </div>
              </div>
              <div className='referenciaContainer'>
                <div>
                  <img className='referenciaImagen' src={`${MedallaBronceSuipacha}`}></img>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '120px' }}>
                <img src={`${IconoBronceSuipacha}`}></img>
                <p>3er Puesto</p>
                </div>
              </div>
              <div className='referenciaContainer'>
                <div>
                  <img  className='referenciaImagen' src={`${MedallaCampeonSuipacha}`}></img>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                <img src={`${ReconocimientoSuipacha}`}></img>
                <p>Gran Campeón</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className='premiosTitle'>Referencias Tandil</h3>
              </div>
              <hr className='divider'></hr>
            </div>
            <div className='referencias'>
              <div className='referenciaContainer'>
                <div>
                  <img className='referenciaImagen' src={`${MedallaOroTandil}`}></img>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '120px' }}>
                <img src={`${IconoOroTandil}`}></img>
                <p>1er Puesto</p>
                </div>
              </div>
              <div className='referenciaContainer'>
                <div>
                  <img className='referenciaImagen' src={`${MedallaPlataTandil}`}></img>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '120px' }}>
                <img src={`${IconoPlataTandil}`}></img>
                <p>2do Puesto</p>
                </div>
              </div>
              <div className='referenciaContainer'>
                <div>
                  <img className='referenciaImagen' src={`${MedallaBronceTandil}`}></img>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '120px' }}>
                <img src={`${IconoBronceTandil}`}></img>
                <p>3er Puesto</p>
                </div>
              </div>
              <div className='referenciaContainer'>
                <div>
                  <img  className='referenciaImagen' src={`${MedallaCampeonTandil}`}></img>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                <img src={`${ReconocimientoTandil}`}></img>
                <p>Gran Campeón</p>
                </div>
              </div>
            </div>
            <hr className='divider'></hr>
          </div>
          <img className='bordesPremios' src={AboutBordeInferior}></img>
        </section>
      </>
    )
  }
  
}
