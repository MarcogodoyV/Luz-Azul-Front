import React, {useState, useEffect} from 'react'
import "./ListaPrecios.css"
import { Spinner } from 'components/Spinner'
import UpArrow from "images/upArrow.svg"
import { ListaSinonimos } from 'utils/ListaSinonimos'

export const ListaPrecios = ({id}) => {

    const escongerNombre = (id) => {
        switch(id) {
            case '13':
                return 'Lista Precios Franquicias Interior'
            case '2':
                return 'Lista Precios Por Mayor'
                
            case '5':
                return 'Lista Precios Dist. Zonal'
            case '8':
                return 'Lista Precios Franquicias'
            default:
                return 'Lista precios'
        }
    }

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const [order, setOrder] = useState({order:"DESC",element:"productoId"})
    const [searchState, setSearchState] = useState("")

    /*console.log(ListaSinonimos.map((item) => {
        return Object.entries(item)[0][0].toLowerCase()
    }))
    */
    const fetchData = async () => {
        // const response = await fetch('https://nube.softwaretempo.com:9569/api/lista-precios/1')
        const response = await fetch(`https://temponube.softwaretempo.com:9569/api/lista-precios/${id ? id:'1'}`)
        const data = await response.json()
        setProductos(data)
        setLoading(false)
    }
    
    useEffect(() => {

        

        window.scrollTo(0, 0)
        fetchData()
    }, [])

    const addZeroes = num => Number(num).toFixed(Math.max(num.toString().split('.')[1]?.length, 2) || 2)

    const HandleClick = (col) => {

        if (order.order === "ASC") {
            const sorted = [...productos].sort((a,b) =>
               col === "precio" ? (a[col] > b[col] ? 1: -1) : (a[col].toLowerCase() > b[col].toLowerCase() ? 1: -1)
            )
            setProductos(sorted)
            setOrder({order:"DESC",element:col})
        } else if(order.order === "DESC") {
            const sorted = [...productos].sort((a,b) =>
            col === "precio" ? (a[col] < b[col] ? 1: -1) : (a[col].toLowerCase() < b[col].toLowerCase() ? 1: -1)
            )
            setProductos(sorted)
            setOrder({order:"ASC",element:col})
        }
    }

  return (
    <>
        <h1 className="title">{
           escongerNombre(id)
        }</h1>
        <div className={window.innerWidth > 395 ? (`container listaprecios_container`):""}>
            {loading ? (
            <Spinner />
            ):(
                <div className='listaprecios__box'>
                    <input type="text" placeholder='Buscar por nombre o código' className='searchBar boxShadow' onChange={(e) => {setSearchState(e.target.value)}}/>
                    <table className='productDetail__table listaprecios__table' style={{ color: 'var(--bg)' }}>
                        <thead>
                            <tr>
                                <td onClick={()=> HandleClick("productoId")}>
                                    <strong>
                                        CÓDIGO &nbsp;
                                        <img style={{visibility:`${order.element === "productoId" ? "visible":"hidden"}`}} className={`infobox-arrow ${order.element === "productoId" && order.order === "DESC" && "arrowActive"}`} src={UpArrow} alt="Flecha para desglosar menú" />
                                    </strong>
                                </td>
                                <td onClick={()=> HandleClick("descProducto")}>
                                    <strong>
                                        DESCRIPCIÓN &nbsp;
                                        <img style={{visibility:`${order.element === "descProducto" ? "visible":"hidden"}`}} className={`infobox-arrow ${order.element === "descProducto" && order.order === "DESC" && "arrowActive"}`} src={UpArrow} alt="Flecha para desglosar menú" />
                                    </strong>
                                </td>
                                <td onClick={()=> HandleClick("precio")}>
                                    <strong>
                                        PRECIO &nbsp;
                                        <img style={{visibility:`${order.element === "precio" ? "visible":"hidden"}`}} className={`infobox-arrow ${order.element === "precio" && order.order === "DESC" && "arrowActive"}`} src={UpArrow} alt="Flecha para desglosar menú" />
                                    </strong>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.filter((value) => {
                                if(searchState === "") {
                                    return value
                                } else if(
                                    value.descProducto.toLowerCase().includes(searchState.toLowerCase()) ||
                                    value.productoId === searchState
                                ) {
                                    return value
                                }else return null
                            }).map(({productoId,descProducto,precio}) => {
                                return (
                                    <tr key={productoId} id={productoId}>
                                        <td style={{ color: 'var(--text-color-alt)' }}>{productoId}</td>
                                        <td style={{ color: 'var(--text-color-alt)' }}>{descProducto}</td>
                                        <td style={{ color: 'var(--text-color-alt)' }}>${addZeroes(precio)}</td>
                                    </tr>
                                )
                            })
                            }
                            {ListaSinonimos.map((value) => {
                                if(searchState === ""){
                                    return  null
                                } else if(
                                    searchState.toLowerCase().includes(value.descProducto.toLowerCase().substring(0,searchState.length))
                                ){
                                    return (productos.filter((item) => {
                                        return item.productoId === value.cod
                                    })
                                    ).map(({productoId,descProducto,precio}) => {
                                        return (
                                            <tr key={productoId}>
                                                <td>{productoId}</td>
                                                <td>{descProducto}</td>
                                                <td>${precio}</td>
                                            </tr>
                                        )
                                    })
                                } else return null
                            })
                        }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    </>
  )
}