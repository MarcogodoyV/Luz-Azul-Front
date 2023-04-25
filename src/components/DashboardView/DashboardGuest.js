import React, {useState} from 'react'
import { Api } from 'utils/api'
import { Spinner } from 'components/Spinner';
import { Alert } from 'components/MessageBox/Alert';

export const DashboardGuest = () => {

  const [downLoadloading, setDownloadLoading] = useState(false)
  const [typeAlert, setTypeAlert] = useState('')
  const [loading, setLoading] = useState(false)
  
  const {getToken,logout, http, URI} = Api()
  const token = getToken()

  const logoutUser = () => {
    setLoading(true)
    const token = getToken()

    let config = {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json"
      }
    }
    
    if(token !== undefined) {

        // var myHeaders = new Headers();
        // myHeaders.append("Accept", "application/json");
        // myHeaders.append("Authorization", `Bearer ${token}`);

        // var requestOptions = {
        // method: 'POST',
        // headers: myHeaders,
        // redirect: 'follow'
        // };

        // fetch("http://localhost:8000/api/logout", requestOptions)
        // .then(response => response.text())
        // .then(result => {
        //     setLoading(false)
        //     logout()
        // })
        // .catch(error => {
        //   setLoading(false)
        //
        // });

        
        http.post('api/logout','',config)
        .then(result => {
            setLoading(false)
            logout()
        })
        .catch(error => {
          setLoading(false)
    
        });

        
    }
}

  const handleClick = () => {



    let config = {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json"
      }
    }

    setDownloadLoading(true)
    setTypeAlert(() => 'green')

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    try {
      fetch(`${URI}/api/listaprecios`, requestOptions)
      .then( res => res.blob() )
      .then( blob => {
        var file = window.URL.createObjectURL(blob);
        window.location.assign(file);
        setDownloadLoading(false)
      })
    } catch(error) {
      setDownloadLoading(false)

    };
    }

  return (
    <div className='container' style={{ marginTop: '5rem', minHeight: '80vh', marginBottom: '3em' }}>
      <h1 className='title'>Dashboard</h1>
        <div style= {{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: '2em 0'}}>
          <button 
              className="btn btn__close" 
              onClick={(e) => {
                handleClick()
              e.preventDefault()}}
            >
              Descargar Lista Precios
            </button>
            <button
              className="btn btn__close" 
              onClick={logoutUser}
            >
              Salir de la cuenta
            </button>
        </div>
        {downLoadloading ? (
        <><Alert type={typeAlert}>
        Descargando Archivo
      </Alert>
      <Spinner /></>): ''}
    </div>
  )
}
