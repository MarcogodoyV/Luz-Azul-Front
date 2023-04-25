import React, {useState, useEffect} from 'react'
import './Alert.css'

export const Alert = ({children, type}) => {

  let fondoColor

  if (type === 'red'){
    fondoColor = 'rgba(255, 0, 0, 0.507)'
  } else {
    fondoColor = 'rgba(144, 238, 144, 0.705)'
  }

  const [showAlert,setShowAlert] = useState(false)

  useEffect(() =>{
    if(!showAlert) {
      // setTimeout(() => {
      //   setShowAlert(() => true)
      // }, 3000)
    }
  },[showAlert])
  

  return (
    <div className={`alert ${showAlert ? 'hideAlert':''}`} style={{ backgroundColor: `${fondoColor}`}}>
      {children}
    </div>
  )
}