import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Api } from 'utils/api'
import { Spinner } from 'components/Spinner';
import { DashboardAdmin } from 'components/DashboardView/DashboardAdmin';
import { DashboardGuest } from 'components/DashboardView/DashboardGuest';

export const Dashboard = () => {

  const navigate = useNavigate();

  const {getToken,http} = Api()

  const [role,setRole] = useState(null)

  useEffect((() => {
    if(!getToken()) {
      sessionStorage.clear()
      navigate("/login")
    }
    if(!role) {
      http.get('api/role',{headers:{"Authorization": `Bearer ${getToken()}`}}).then(res => {
          setRole(res.data[0])
      }).catch(err => {
        sessionStorage.clear()
        navigate("/login")
      })
    }
    }),[])

    

const ReturnView = (role) => {
  if(role === 'Admin') {
    return <DashboardAdmin />
  } else {
    return <DashboardGuest />
  }
}

return role ? ReturnView(role):(<div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Spinner /></div>)
     
}