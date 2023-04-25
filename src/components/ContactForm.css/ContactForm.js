import React, {useState} from 'react'
import "./ContactForm.css"
import { Alert } from 'components/MessageBox/Alert';
import { Api } from 'utils/api';

export const ContactForm = () => {

  const{http} = Api()

  const [showAlert, setShowAlert] = useState()
  const [typeAlert, setTypeAlert] = useState()
  const[message, setMessage] = useState()

  const FormSubmit = async () =>{

    let config = {
      headers: {
        "Accept": "application/json"
      }
  }

    let formData = new FormData()

    formData.append('nombre',formularioData.nombre)
    formData.append('email',formularioData.email)
    formData.append('asunto',formularioData.asunto)
    formData.append('mensaje',formularioData.mensaje)

    http.post('api/formulariocontacto', formData, config).then((res) => {
      console.log(res.data)
      setMessage(res.data)
      setShowAlert(true)
      setTypeAlert(() => 'green')
      setTimeout(() => {
        setShowAlert(() => false)
      }, 3000)
    }).catch((err) => {
      console.log(err.response.data[0])
      setMessage(err.response.data[0])
      setTypeAlert(() => 'red')
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(() => false)
      }, 3000)
    })
    document.getElementById('form__field').reset()
  }

  const  [formularioData, setFormularioData] = useState({
    nombre:"",
    email:"",
    asunto:"",
    mensaje:""
})

  const handleChange = (e) => {
    setFormularioData({
        ...formularioData,[e.target.name]: `${e.target.value}`
    })
  }

  return (
    <form action="" id="form__field" className="contact__form">
      <div className="form__nombre field">
        <label htmlFor="nombre" className="contact_label">
          Nombre
          <input 
            onChange={handleChange} 
            id="nombre" 
            type="text" 
            className="contact__input border-rounded" 
            name="nombre"
          />
        </label>
      </div>
      <div className="form__email field">
        <label htmlFor="email" className="contact_label">
          Email
          <input 
            onChange={handleChange} 
            id="email" 
            type="text" 
            className="contact__input" 
            name="email"
          />
        </label>
      </div>
      <div className="form__asunto field">
        <label htmlFor="asunto" className="contact_label">
          Asunto
          <input 
            onChange={handleChange} 
            id="asunto" 
            type="text" 
            className="contact__input" 
            name="asunto"
          />
        </label>
      </div>
      <div className="form__mensaje field">
        <label htmlFor="mensaje" className="contact_label">
          Mensaje
          <textarea 
            onChange={handleChange} 
            id="mensaje" 
            cols="0" 
            rows="7" 
            className="contact__input" 
            name="mensaje"
          />
        </label>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <button 
          className="btn btn__close"
          onClick={(e) => {
            FormSubmit()
          e.preventDefault()}}
        >
          Enviar formulario
        </button>
      </div>
      {showAlert ? (
      <Alert type={typeAlert}>
        {message}
      </Alert>): ('')
      }
    </form>
  )
}
