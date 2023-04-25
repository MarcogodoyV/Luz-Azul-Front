import React from 'react'
import ReactDOM from 'react-dom'
import "./Modal.css"

export const Modal = ( {open,setActive, children, width} ) => {

    const openModal = open

    if(!openModal) return null

    return ReactDOM.createPortal(
        <>
            <div className="overlay"></div>
            <div className="modalStyle">
                <div className="modal__container">
                    <button onClick={() => setActive(false)} className='btn__close-modal'>Cerrar</button>
                    <div className="img__style" style={{ maxWidth:`${width}` }}>
                        {children}
                    </div>
                </div>
            </div>
        </>,
    document.getElementById('portal')
    )
}
