import "./footer.css"
import {Link} from 'react-router-dom'
import {paths, social_externalLinks} from 'routes/paths'
import LogoFooter from "images/footer/logo_luz-azul_footer.png"
import IconoMapa from 'images/footer/icono_direccion_footer.png'
import IconoTelefono from 'images/footer/icono_telefono_footer.png'
import IconoMail from 'images/footer/icono_mail_footer.png'
import IconoEmpleo from 'images/footer/icono_empleo_footer.png'
import IconoFranquicia from 'images/footer/icono_franquicia_footer.png'

import IconoFacebook from 'images/iconos_facebook_footer.png'
import IconoInstagram from 'images/iconos_instagram_footer.png'
import IconoTiktok from 'images/iconos_tiktok_footer.png'
import IconoYoutube from 'images/iconos_youtube_footer.png'


export const Footer1 = () => {

    const {
        inicio,
        contacto,
        catalogo,
        productos,
        prensa,
        recetas,
        sobreNosotros,
        sucursales,
        franquicias,
        TyC
    } = paths;

    const {
        facebook,
        instagram,
        youtube
    } = social_externalLinks;

    return (
        <section id="section__footer">
            <div>
                <span className="footer__ribbon">Gracias por visitarnos!</span>
            </div>
            <div className="container footer__container">
                <div>
                    <Link className="footer__link" to={contacto.url}>
                        <h3 className='footer__title'>Contacto</h3>
                    </Link>
                    <p className="footer__contacto-p">
                        <strong>Dirección:</strong> Maipú Norte 499 . Azul - Buenos Aires - Argentina.
                    </p>
                    <p className="footer__contacto-p">
                        <strong>Teléfono:</strong> +54 9 2281 68-3346
                    </p>
                    <p className="footer__contacto-p">
                        <strong>Email:</strong> contacto@luz-azul.com.ar
                    </p>
                    <p className="footer__contacto-p">
                        <strong>¿Querés trabajar con nosotros?</strong> enviá tu solicitud a: <strong>empleo@luz-azul.com.ar</strong>
                    </p>
                </div>
                <div>
                    <h3 className='footer__title'>Enlaces</h3>
                    <ul>
                        <li>
                            <Link to={catalogo} className="footer__link">
                                catalogo
                            </Link>
                        </li>
                        <li>
                            <Link to={productos} className="footer__link">
                                Productos
                            </Link>
                        </li>
                        <li>
                            <Link to={prensa} className="footer__link">
                                Prensa
                            </Link>
                        </li>
                        <li>
                            <Link to={recetas} className="footer__link">
                                Recetas
                            </Link>
                        </li>
                        <li>
                            <Link to={sobreNosotros} className="footer__link">
                                Planta Industrial
                            </Link>
                        </li>
                        <li>
                            <Link to={sucursales} className="footer__link">
                                Sucursales
                            </Link>
                        </li>
                        <li>
                            <Link to={franquicias} className="footer__link">
                                Franquicias
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='footer__title'>Redes Sociales</h3>
                    <div className="footer__social-icons">
                        <a href={facebook.url} rel="noreferrer" aria-label="Enlace a Facebook" target="_blank">
                           <span className="footer__social-info">
                                <img src={facebook.icon} className="svgIcon" alt="Icono de facebook"></img>
                            </span>
                        </a>
                        <a href={instagram.url} rel="noreferrer" aria-label="Enlace a Instagram" target="_blank">
                            <span className="footer__social-info">
                                <img src={instagram.icon} className="svgIcon" alt="Icono de Instagram"></img>
                            </span>
                        </a>
                        <a href={youtube.url} rel="noreferrer" aria-label="Enlace a Youtube" target="_blank">
                            <span className="footer__social-info">
                                <img src={youtube.icon} className="svgIcon" alt="Icono de Youtube"></img>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__TyC">
                <div className="footer__TyC-container container">
                    <Link to={inicio}>
                        <img className="logoTyC" src={LogoFooter} alt="Logo Luz Azul pie de página en grises"></img>
                    </Link>
                    <div className="copyright">
                        <p className="copyright-text">© Copyright 2022. Todos los derechos reservados. | 
                            <Link className="footer__link" to={TyC}>
                                Terminos y Condiciones
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Footer = () => {

    const {
        inicio,
        contacto,
        catalogo,
        productos,
        prensa,
        recetas,
        sobreNosotros,
        sucursales,
        franquicias,
        TyC
    } = paths;

    const {
        facebook,
        instagram,
        youtube,
        tiktok
    } = social_externalLinks;

    return (
        <div className="footerContainer">
            <div className="container">
            <div className="footerLogo">
                <img className='logoFooter' src={LogoFooter} alt='logo footer'></img>
            </div>
            <div className="infoFooter">
                <div className='footerDiv'>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '5px', marginBottom: '1rem'}}>
                        <img src={IconoMapa}></img>
                        <p style={{ display:"inline" }}>
                            Planta: Maipú Norte 499. <br></br> 
                            Azul - Buenos Aires - Argentina.
                        </p>    
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '5px', marginBottom: '1rem'}}>
                        <img src={IconoTelefono}></img>
                        <p style={{ display:"inline" }}>
                            +54 9 2281 68-3346
                        </p>    
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '1rem'}}>
                        <img src={IconoMail}></img>
                        <p style={{ display:"inline" }}>
                            contacto@luz-azul.com.ar
                        </p>    
                    </div>
                </div>
                <div className='footerDiv'>
                    <div className="bottomSpace">
                        <div className="footerIconoGrande">
                            <img src={IconoEmpleo} className='imgIconoGrandeFooter'></img>
                            <h3 className="footerIconoGrandeTexto"><i>¿Querés trabajar con nosotros?</i></h3>
                        </div>
                        <div>
                            <p>
                                enviá tu solicitud a:
                                <br></br>
                                <strong><i>empleo@luz-azul.com.ar</i></strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footerIconoGrande">
                            <img src={IconoFranquicia} className='imgIconoGrandeFooter'></img>
                            <h3 className="footerIconoGrandeTexto"><i>¿Querés abrir tu franquicia?</i></h3>
                        </div>
                        <div>
                            <p>
                                escribinos a:
                                <br></br>
                                <strong><i>franquicias@luz-azul.com.ar</i></strong>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='footerDiv'>
                    <ul className="listaEnlacesFooter">
                        <li>
                            <Link to={sobreNosotros} className="footer__link">
                                <strong>Sobre Nosotros</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to={productos} className="footer__link">
                                <strong>Productos</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to={prensa} className="footer__link">
                               <strong>Prensa</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to={sucursales} className="footer__link">
                                <strong>Sucursales</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to={contacto} className="footer__link">
                                <strong>Contacto</strong>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='footerDiv'>
                    <h3 className="footerIconoGrandeTexto"><i>¡Seguinos en las redes!</i></h3>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '1.5rem 0'}}>
                        <a target='_blank' href={facebook.url}>
                            <img className='iconoFooter' src={IconoFacebook}></img>
                        </a>
                        <a target='_blank' href={instagram.url}>
                            <img className='iconoFooter' src={IconoInstagram}></img>
                        </a>
                        <a target='_blank' href={tiktok.url}>
                            <img className='iconoFooter' src={IconoTiktok}></img>
                        </a>
                        <a target='_blank' href={youtube.url}>
                            <img className='iconoFooter' src={IconoYoutube}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}