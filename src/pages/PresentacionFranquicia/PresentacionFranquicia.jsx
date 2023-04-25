import React from 'react'
import PresentacionFranquicias from 'utils/presentacionComercialFranquicia.pdf'

export const PresentacionFranquicia = () => {
  return (
     // <embed src='https://drive.google.com/file/d/1BZRHViRXxC6fmP4eEpoNtVEzOyBOwdBn/view?usp=sharing' width="100%" height="650" /> 
    <div style={{ color: 'var(--bg)', fontSize: '24px'}}>
        <p style={{ margin: '1rem' }}>En caso de no poder visualizar el archivo
        <a style={{ color: 'var(--bg)', fontWeight: 'bold' }} rel="noreferrer" href={PresentacionFranquicias} target='_blank' aria-label='Link descarga PDF'> <i>haz click aquí.</i></a></p>
        <object width="100%" height="1000" data={PresentacionFranquicias} aria-label='Presentación Franquicia' type="application/pdf"></object>
    </div>
  )
}
