import {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import './navbar.css';
import logo from "images/logo.png"
import {paths, social_externalLinks} from "routes/paths"
import { Api } from "utils/api";

export const Navbar = () => {
    
    const {http, getToken} = Api()

    const {
        inicio,
        sobreNosotros,
        productos,
        prensa,
        sucursales,
        contacto,
        franquicias,
        login,
        dashboard,
    } = paths;

    const enlaces = [
        inicio,
        sobreNosotros,
        productos,
        prensa,
        sucursales,
        contacto,
        franquicias,
        // login
    ]

    const enlacesLogged = [
        inicio,
        sobreNosotros,
        productos,
        prensa,
        sucursales,
        contacto,
        franquicias,
        // dashboard
    ]

    const {
        facebook,
        instagram,
        youtube,
        tiktok
    } = social_externalLinks

    const socialLinks =[
        facebook,
        instagram,
        youtube,
        tiktok,
    ]

    let toggleClass = "nav__menu-show"
    
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        if(window.innerWidth >= 1200) {
            setToggle(true)
        } 
    },[])
    
    window.addEventListener('resize', () => {
        if(window.innerWidth >= 1200) {
            setToggle(true)
        } else {
            setToggle(false)
        }
     })

     if(!getToken()){
        return(
             <nav className="nav boxShadow">
                 <div className="container">
                     <div className="navbar">
                         <Link to={inicio.url} className="nav__logo" label="Logo Luz Azul">
                             <img src={logo} alt="Logo" className="navbar__logo"></img>
                         </Link>
                         {/* <a href="https://luz-azul.com.ar/" className="nav__logo" label="Logo Luz Azul">
                             <img src={logo} alt="Logo" className="navbar__logo"></img>
                         </a> */}
                         <div>
                             <div className="nav__btns">
                                 <div className="nav__toggle" id="nav-toggle" onClick={() => setToggle(s => !s)}>
                                     <button className={`nav__btn ${toggle ? "activeToggle": ""}`} aria-label="Menu Button">
                                             <div></div>
                                             <div></div>
                                             <div></div>
                                     </button>
                                 </div>
                             </div>
                             <div className={`nav__menu ${toggle && toggleClass}`} id="nav__menu">
                                 <ul className="nav__list" onClick={() => {
                                    if(window.innerWidth < 1200) {
                                         setToggle(s => !s)
                                     }}}>
                                    <li className="nav__item">
                                        {/* <a href='https://luz-azul.com.ar/' className="nav__link">
                                            Inicio
                                        </a> */}
                                        <hr className="divider nav__divider" />
                                    </li>
                                    {enlaces.map ((enlace) => {
                                         return (
                                             <NavList item={enlace} key={enlace.label}/>
                                         )
                                    })}
                                    {socialLinks.map((enlace) => {
                                         return (
                                             <NavSocialList item={enlace} key={enlace.label}/>
                                         )
                                    })}
                                 </ul>
                             </div>
                         </div>
                     </div>
                 </div>
             </nav>
        )
     }
     else {
        return(
            <nav className="nav boxShadow">
                <div className="container">
                    <div className="navbar">
                        <Link to={inicio.url} className="nav__logo" label="Logo Luz Azul">
                            <img src={logo} alt="Logo" className="navbar__logo"></img>
                        </Link>
                        {/* <a href="https://luz-azul.com.ar/" className="nav__logo" label="Logo Luz Azul">
                            <img src={logo} alt="Logo" className="navbar__logo"></img>
                        </a> */}
                        <div>
                            <div className="nav__btns">
                                <div className="nav__toggle" id="nav-toggle" onClick={() => setToggle(s => !s)}>
                                    <button className={`nav__btn ${toggle ? "activeToggle": ""}`} aria-label="Menu Button">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                    </button>
                                </div>
                            </div>
                            <div className={`nav__menu ${toggle && toggleClass}`} id="nav__menu">
                                <ul className="nav__list" onClick={() => {
                                    if(window.innerWidth < 1200) {
                                        setToggle(s => !s)
                                    }}}>
                                    <li className="nav__item">
                                        {/* <a href='https://luz-azul.com.ar/' className="nav__link">
                                            Inicio
                                        </a> */}
                                        <hr className="divider nav__divider" />
                                    </li>
                                    {enlacesLogged.map ((enlace) => {
                                        return (
                                            <NavList item={enlace} key={enlace.label}/>
                                        )
                                    })}
                                    {socialLinks.map((enlace) => {
                                        return (
                                            <NavSocialList item={enlace} key={enlace.label}/>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
       )
     }

}

const NavList = ({item}) => {
    return(
        <li className="nav__item">
            <Link to={item.url} className="nav__link">
                {item.label}
            </Link>
            <hr className="divider nav__divider" />
        </li>
    )
}

const NavSocialList = ({item}) => {
    return (
        <li className="nav__item">
            <a rel="noreferrer" target="_blank" href={item.url} className="nav__link nav__item-social">
                {window.innerWidth < 1200 ? (
                    item.label 
                ):(<img className="svgIcon" src={item.icon} alt="icono enlace youtube" />)}
            </a>
            <hr className="divider nav__divider" />
        </li>
    )
}

export const Navbar1 = () => {
    
    const {http, getToken} = Api()

    const {
        inicio,
        sobreNosotros,
        productos,
        prensa,
        sucursales,
        contacto,
        franquicias,
        login,
        dashboard,
    } = paths;

    const enlaces = [
        sobreNosotros,
        productos,
        prensa,
        sucursales,
        contacto,
        franquicias,
        // login
    ]

    const enlacesLogged = [
        sobreNosotros,
        productos,
        prensa,
        sucursales,
        contacto,
        franquicias,
        // dashboard
    ]

    const {
        facebook,
        instagram,
        youtube,
        tiktok
    } = social_externalLinks

    const socialLinks =[
        facebook,
        instagram,
        youtube,
        tiktok,
    ]

    let toggleClass = "nav__menu-show"
    
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        if(window.innerWidth >= 1200) {
            setToggle(true)
        } 
    },[])
    
    window.addEventListener('resize', () => {
        if(window.innerWidth >= 1200) {
            setToggle(true)
        } else {
            setToggle(false)
        }
     })

     if(!getToken()){
        if(!toggle) {
            return(
                 <nav className="nav boxShadow">
                     <div className="container">
                         <div className="navbar">
                             {/* <Link to={inicio.url} className="nav__logo" label="Logo Luz Azul">
                                 <img src={logo} alt="Logo" className="navbar__logo"></img>
                             </Link> */}
                             <a href="https://luz-azul.com.ar/" className="nav__logo" label="Logo Luz Azul">
                                 <img src={logo} alt="Logo" className="navbar__logo"></img>
                             </a>
                             <div>
                                 <div className="nav__btns">
                                     <div className="nav__toggle" id="nav-toggle" onClick={() => setToggle(s => !s)}>
                                         <button className={`nav__btn ${toggle ? "activeToggle": ""}`} aria-label="Menu Button">
                                                 <div></div>
                                                 <div></div>
                                                 <div></div>
                                         </button>
                                     </div>
                                 </div>
                                 <div className={`nav__menu ${toggle && toggleClass}`} id="nav__menu">
                                     <ul className="nav__list" onClick={() => {
                                        if(window.innerWidth < 1200) {
                                             setToggle(s => !s)
                                         }}}>
                                        {/* <li className="nav__item">
                                            <a href='https://luz-azul.com.ar/' className="nav__link">
                                                Inicio
                                            </a>
                                            <hr className="divider nav__divider" />
                                        </li> */}
                                        {enlaces.map ((enlace) => {
                                             return (
                                                 <NavList item={enlace} key={enlace.label}/>
                                             )
                                        })}
                                        {socialLinks.map((enlace) => {
                                             return (
                                                 <NavSocialList item={enlace} key={enlace.label}/>
                                             )
                                        })}
                                     </ul>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </nav>
            )
        } else {
            
        }
        return(
            <nav className="nav boxShadow">
                <div className="container">
                    <div className="navbar">
                        <Link to={inicio.url} className="nav__logo" label="Logo Luz Azul">
                            <img src={logo} alt="Logo" className="navbar__logo"></img>
                        </Link>
                        {/* <a href="https://luz-azul.com.ar/" className="nav__logo" label="Logo Luz Azul">
                            <img src={logo} alt="Logo" className="navbar__logo"></img>
                        </a> */}
                        {/* <div className="nav__btns">
                            <div className="nav__toggle" id="nav-toggle" onClick={() => setToggle(s => !s)}>
                                <button className={`nav__btn ${toggle ? "activeToggle": ""}`} aria-label="Menu Button">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                </button>
                            </div>
                        </div> */}
                        <div className={`nav__menu ${toggle && toggleClass}`} id="nav__menu">
                            <ul className="nav__list" onClick={() => {
                                if(window.innerWidth < 1200) {
                                    setToggle(s => !s)
                                }}}>
                                {/* <li className="nav__item">
                                    <a href='https://luz-azul.com.ar/' className="nav__link">
                                        Inicio
                                    </a>
                                    <hr className="divider nav__divider" />
                                </li> */}
                                {enlaces.map ((enlace) => {
                                    return (
                                        <NavList item={enlace} key={enlace.label}/>
                                    )
                                })}
                            </ul>
                        </div>
                            <div className="nav__socialLinks">
                                {socialLinks.map((enlace) => {
                                    return (
                                        <NavSocialList item={enlace} key={enlace.label}/>
                                    )
                                })}
                            </div>
                        
                    </div>
                </div>
            </nav>
       )
     }
     else {
        return(
            <nav className="nav boxShadow">
                <div className="container">
                    <div className="navbar">
                        {/* <Link to={inicio.url} className="nav__logo" label="Logo Luz Azul">
                            <img src={logo} alt="Logo" className="navbar__logo"></img>
                        </Link> */}
                        <a href="https://luz-azul.com.ar/" className="nav__logo" label="Logo Luz Azul">
                            <img src={logo} alt="Logo" className="navbar__logo"></img>
                        </a>
                        <div>
                            <div className="nav__btns">
                                <div className="nav__toggle" id="nav-toggle" onClick={() => setToggle(s => !s)}>
                                    <button className={`nav__btn ${toggle ? "activeToggle": ""}`} aria-label="Menu Button">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                    </button>
                                </div>
                            </div>
                            <div className={`nav__menu ${toggle && toggleClass}`} id="nav__menu">
                                <ul className="nav__list" onClick={() => {
                                    if(window.innerWidth < 1200) {
                                        setToggle(s => !s)
                                    }}}>
                                    {/* <li className="nav__item">
                                        <a href='https://luz-azul.com.ar/' className="nav__link">
                                            Inicio
                                        </a>
                                        <hr className="divider nav__divider" />
                                    </li> */}
                                    {enlacesLogged.map ((enlace) => {
                                        return (
                                            <NavList item={enlace} key={enlace.label}/>
                                        )
                                    })} 
                                </ul>
                                {socialLinks.map((enlace) => {
                                        return (
                                            <NavSocialList item={enlace} key={enlace.label}/>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
       )
     }

}