import {Routes,Route} from 'react-router-dom'
import {paths} from "./paths"

import {Inicio} from "pages/Inicio/Inicio"
import {Catalogo} from "pages/Catalogo/Catalogo"
import {Productos} from 'pages/Productos/Productos'
import {Prensa} from 'pages/Prensa/Prensa'
import {Picadas} from 'pages/Picadas/Picadas'
import {SobreNosotros} from 'pages/SobreNosotros/SobreNosotros'
import {Sucursales} from 'pages/Sucursales/Sucursales'
import {Contacto} from 'pages/Contacto/Contacto'
import {Franquicias} from 'pages/Franquicias/Franquicias'
import {TyC} from 'pages/TyC/TyC'
import {Cajas} from 'pages/Cajas/Cajas'
import { Franquiciado } from 'pages/Franquiciado/Franquiciado'
import { ProductDetails } from 'components/ProductDetails/ProductDetails'
import { SucursalesDetails } from 'components/SucursalesDetails/SucursalesDetails'
import { ListaPrecios } from 'pages/ListaPrecios/ListaPrecios'
import { SeccionesFranquiciados } from 'pages/Franquiciado/SeccionesFranquiciados/SeccionesFranquiciados'
import { Page404 } from 'pages/Page404/Page404'
import { Pronostigol } from 'pages/Pronostigol'
import { Login } from 'pages/Login/Login'
import { Dashboard } from 'pages/Dashboard/Dashboard'
import { MaterialFranquiciados } from 'pages/MaterialFranquiciados/MaterialFranquiciados'
import { AdminListaPrecios } from 'pages/ListaPrecios/AdminListaPrecios'
import { PresentacionFranquicia } from 'pages/PresentacionFranquicia/PresentacionFranquicia'


export const NavRoutes = () =>{
    
return (
    <Routes>
        <Route path={paths.inicio.url} element={<Inicio />} />
        <Route path={paths.catalogo.url} element={<Catalogo />} />
        {/* <Route path={`${paths.catalogo.url}/{filter}`} element={<Productos filter={filter} />} /> */}
        <Route path={paths.productos.url} element={<Productos />} />
        <Route path={paths.productosTipo.url} element={<Productos />} />
        <Route path={paths.cajas.url} element={<Cajas />} />
        <Route path={paths.picadas.url} element={<Picadas />} />
        <Route path={paths.prensa.url} element={<Prensa />} />
        <Route path={paths.sobreNosotros.url} element={<SobreNosotros />} />
        <Route path={paths.sucursales.url} element={<Sucursales />} />
        <Route path={paths.contacto.url} element={<Contacto />} />
        <Route path={paths.franquicias.url} element={<Franquicias />} />
        <Route path={paths.TyC.url} element={<TyC />} />
        <Route path={paths.productDetails.url} element={<ProductDetails />} />
        <Route path={paths.franquiciado.url} element={<Franquiciado />} />
        <Route path={paths.sucursalesDetails.url} element={<SucursalesDetails />} />
        <Route path={paths.seccionesFranquiciados.url} element={<SeccionesFranquiciados />} />
        <Route path={paths.adminListaPrecios.url} element={<AdminListaPrecios />} />  
        <Route path={paths.listaPrecios.url} element={<ListaPrecios />} />  
        <Route path={paths.pronostigol.url} element={<Pronostigol />} /> 
        <Route path={paths.login.url} element={<Login />} /> 
        <Route path={paths.dashboard.url} element={<Dashboard />}/>
        <Route path={paths.pageError.url} element={<Page404 />} />
        <Route path={paths.materialFranquiciados.url} element={<MaterialFranquiciados />} />
        <Route path={paths.presentacionComercialFranquicia.url} element={<PresentacionFranquicia />}
        />
    </Routes>
)}