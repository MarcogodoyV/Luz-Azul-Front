import { useState } from "react"
import { Link } from "react-router-dom"
import "./Atajos.css"
import { Modal } from "components/Modal/Modal"
import { paths } from "routes/paths"
import DescargaApp from 'images/descarga_app_btn.png'
import DescargaCatalogo from 'images/descarga_catalogo_btn.png'
import IrListaPrecios from 'images/lista_precios_btn.png'
import Catalogo from 'utils/catalogo.pdf'


export const Atajos = () => {

    const [active, setActive] = useState(false)

    const {catalogo, listaPrecios} = paths

    return (
        <section className="section__atajos">
                <ul className="atajos">
                    <li>
                        <Link to={listaPrecios.url}>
                            {/* <h1 className="btn boxShadow">{listaPrecios.label}</h1> */}
                            <img src={IrListaPrecios} aria-label="catalogo"></img>
                        </Link>
                    </li>
                    <li>
                        <a href={Catalogo} target="_blank">
                            {/* <h1 className="btn boxShadow">{catalogo.label}</h1> */}
                            <img src={DescargaCatalogo} aria-label="catalogo"></img>
                        </a>
                    </li>
                    <li>
                        {/* <button className="btn boxShadow" onClick={() => {setActive(true)}}>Descarga App</button>  */}
                        <img src={DescargaApp} aria-label="catalogo"  onClick={() => {setActive(true)}} style={{ cursor: 'pointer' }}></img>
                    </li>
                </ul>
                {active &&
                <Modal open={true} setActive={setActive}>
                    <div className="atajos__link-container">
                    <a 
                        className="btn" 
                        target='_blank' 
                        onClick={() => { setActive(false)}} 
                        href="https://apps.apple.com/ar/app/luz-azul/id1532822751" 
                        rel="noreferrer" 
                        aria-label="Descarga aplicación para Android"
                    >
                        iOS
                    </a>
                    <a 
                        className="btn" 
                        target='_blank' 
                        onClick={() => { setActive(false)}} 
                        href="https://play.google.com/store/apps/details?id=ar.com.sistemas.j32.luzazul&hl=es&gl=US" 
                        rel="noreferrer" 
                        aria-label="Descarga aplicación para Android"
                    >
                        Android
                    </a>
                    </div>
                </Modal>
                }
        </section>
    )
}