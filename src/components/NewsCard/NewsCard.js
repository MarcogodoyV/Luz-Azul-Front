import React from 'react'
import './NewsCard.css'

export const NewsCard = ({img,title,link,id,children}) => {
  

  let text1 = children.substr(0, 90); // Gets the first part
  let text2 = children.substr(91, 120)
  let text3 = children.substr(120 + 1);  // Gets the text part

  return (
    <article style={{ color: 'var(--bg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', marginBottom: '3rem' }}>
        <div>
          <div style={{ position: 'relative', height: '300px', marginBottom: '2rem' }}>
            <img alt={`Imagen prensa ${id}`} src={img} style={{height: '100%', width: '100%',objectFit: 'cover'}}></img>
          </div>
          <div>
            <h3 style={{ marginBottom: '.5rem' }}>
                {title}
            </h3>
            {/* <p className='blurText'>
              {children}
            </p> */}
            {/* <p style={{ display: 'inline' }}>{text1}</p> */}
            <p className='semiBlurText' style={{ display: 'inline' }}>{children}</p>
            {/* <p className='blurText' style={{ display: 'inline' }}>{text3}</p> */}
          </div>
        </div>
        <div className='articulo__btn'>
          <a className="btn" target='_blank' href={link} alt="leer más" rel="noreferrer">Leer más</a>
        </div>
    </article>
  )
}

// export const NewsCardPrensa = ({img,title,link,id,children})  => {
//   return (
//     <article className="articulo">
//         <div className='articulo__img-container'>
//           <img alt={`Imagen prensa ${id}`} src={img} className="articulo__img"></img>
//         </div>
//         <div className='articulo__contenido'>
//           <div>
//             <h3 className="subtitle">
//                 {title}
//             </h3>
//             <p className='prensaParrafo'>
//               {children}
//             </p>
//           </div>
//           <div className='articulo__btn'>
//             <a className="btn" target='_blank' href={link} alt="leer más" rel="noreferrer">Leer más</a>
//           </div>
//         </div>
//     </article>
//   )
// }