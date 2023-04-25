import React, {useEffect} from 'react'
import ImgJubilados from 'images/jubilados.webp'
import ImgPromoHorma from 'images/promo-media-horma.webp'
import Banner2 from "images/banner2.jpg"

export const Catalogo = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='container'>
        <h1 className="title">Catalogo</h1>
        <hr className="divider"></hr>
        <img src={Banner2} alt='catalogo'/>
        <img src={ImgJubilados} alt='catalogo'/>
        <img src={ImgPromoHorma} alt='catalogo'/>
      </div>
    </>
  )
}
