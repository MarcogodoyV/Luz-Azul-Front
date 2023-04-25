import React,{useEffect} from 'react'
import "./Contacto.css"
import { ContactForm } from 'components/ContactForm.css/ContactForm'

export const Contacto = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <h1 className="title">Contacto</h1>
      <section className="section__contacto container">
        <div className="contacto__body">
          <div className='contacto_info'>
              <h3 className='subtitle contacto__subtitle'>Fábrica y Administración</h3>
              <p className="footer__contacto-p">
                  <strong>Dirección:</strong> Maipú Norte 499 . Azul - Buenos Aires - Argentina.
              </p>
              <p className="footer__contacto-p">
                  <strong>Teléfono:</strong> +54 9 2281 68-3346
              </p>
              <p className="footer__contacto-p">
                  <strong>Email:</strong> contacto@luz-azul.com.ar
              </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
