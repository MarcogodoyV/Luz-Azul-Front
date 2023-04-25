import React from 'react'
import './MaterialFranquiciados.css'
import {InfoMaterialFranquiciados} from 'utils/InfoMaterialFranquiciados'

export const MaterialFranquiciados = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    })

  return (
    <div>
        <h1 className='title'>Material para Franquiciados</h1>
        <p style={{ color: 'var(--text-color-alt)', textAlign: 'center', fontSize: '1.2rem' }}>Buscá el material clickeando en los botones</p>
        <span className='divider'></span>
        <section className='materialContainer container'>
            {InfoMaterialFranquiciados.map((params) => {
                return(
                    <a href={params.url} key={params.url} rel='noreferrer' target='_blank' className='btnMateriales'>
                        {params.label}
                    </a>        
                )
            })}
        </section>
    </div>
  )
}
