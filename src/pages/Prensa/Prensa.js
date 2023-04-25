import { Spinner } from 'components/Spinner';
import './Prensa.css'
import React,{useEffect, useState} from 'react'
// import { NewsCard } from 'components/NewsCard/NewsCard'
// import { InfoPrensa } from 'utils/InfoPrensa'
import { Api } from 'utils/api';

export const Prensa = () => {

  const {http} = Api();

  const [posts, setPosts] = useState()
  const [loader, setLoader] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)

        http.get('api/posts').then((res) => {
          setPosts(res.data)
          setLoader(true)
      } )
      }, [])

  return (
        <>
            <h1 className="title">Prensa</h1>
            <section className="section__Prensa container">
                <div className="noticias">
                {loader ? 
                posts.map((param) => (
                  <NewsCard
                      key={param.title}
                      img={param.img}
                      title={param.title}
                      URL={param.URL}
                  >
                      {param.description}
                  </NewsCard>
              )):
                <Spinner />}
                </div>
            </section>
        </>
  )
}

export const NewsCard = ({img,title,URL,id,children}) => {
    return (
      <article className="articulo prensa_articulo" >
          <div className='articulo__img-container'>
            <img alt={`Imagen prensa ${id}`} src={img} className="articulo__img prensa_img"></img>
          </div>
          <div className='articulo__contenido' style={{ gridColumn: 'span 2'}}>
            <div>
              <h3 className="subtitle">
                  {title}
              </h3>
              <p className='prensaParrafo'>
                {children}
              </p>
            </div>
            <div className='articulo__btn'>
              <a className="btn" target='_blank' href={URL} alt="leer más" rel="noreferrer">Leer más</a>
            </div>
          </div>
      </article>
    )
  
    // return (
    //   <article style={{ color: 'var(--bg)', height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    //       <div>
    //         <div style={{ position: 'relative' }}>
    //           <img alt={`Imagen prensa ${id}`} src={img}></img>
    //         </div>
    //         <div>
    //           <h3 >
    //               {title}
    //           </h3>
    //           <p >
    //             {children}
    //           </p>
    //         </div>
    //       </div>
    //       <div className='articulo__btn'>
    //         <a className="btn" target='_blank' href={link} alt="leer más" rel="noreferrer">Leer más</a>
    //       </div>
    //   </article>
    // )
  }
