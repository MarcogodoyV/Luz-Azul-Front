import React,{useState} from 'react'
import UpArrow from "images/upArrow.svg"
import "./Infobox.css"

export const Infobox = ({title,children}) => {

    const [active, setActive] = useState(false)

  return (
    <div className='infobox'>
      <div className='infobox-main' onClick={() => {setActive(!active)}}>
        <div className='infobox-boxtitle'>
          <h3>{title}</h3>
          <div>
            <img className={`infobox-arrow ${active && "arrowActive"}`} src={UpArrow} alt="Flecha para desglosar menú" />
          </div>
        </div>
      </div>
      <div className={`infobox-innerpanel ${active && "innerpanel-active"}`}>
        {children}
      </div>
    </div>
  )
}
