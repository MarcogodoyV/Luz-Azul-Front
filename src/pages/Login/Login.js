import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from 'utils/api';
import { Spinner } from 'components/Spinner';
import { Alert } from 'components/MessageBox/Alert';

export const Login = () => {

  const {getToken,http, setToken} = Api()

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)

  const [showAlert, setShowAlert] = useState(false)

  const  [formData, setFormData] = useState({
    email:"",
    password:""
  })

  React.useEffect((() => {
    if(getToken()) {
      navigate("/dashboard")
    }
  }),[])

  const FormSubmit = () =>{
    setLoading(true)
    http.get('/sanctum/csrf-cookie').then(
      (response) => {
        http.post('api/login', {email: formData.email, password: formData.password}).then( res => {
          setToken(res.data.user.email,res.data.token)
          setLoading(false)
        }).catch(err => {
        setLoading(false)
        setShowAlert(true)
        console.log(err)
        setTimeout(() => {
          setShowAlert(() => false)
        }, 3000)
      })
      }).catch(err => {
        setLoading(false)
        console.log(err)
      })
    setFormData({
        email:"",
        password:""
    })
  }

  const handleChange = (e) => {
    setFormData({
        ...formData,[e.target.name]: `${e.target.value}`
    })
  }

  return (
    <div className='container' style={{ marginTop: '5rem', height: '80vh' }}>
      {showAlert ? (
        <Alert type='red'>
          Error al iniciar sesión, verifique los datos
        </Alert>
      ):''}
      <form action="" id="form__field" className="contact__form container">
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
        <div className="form__password field">
          <label htmlFor="password" className="contact_label">
            Contraseña
            <input 
              onChange={handleChange} 
              id="password" 
              type="password" 
              className="contact__input" 
              name="password"
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
            Entrar
          </button>
        </div>
      </form>
      {loading ? <Spinner />:''}
    </div>
  )
}
