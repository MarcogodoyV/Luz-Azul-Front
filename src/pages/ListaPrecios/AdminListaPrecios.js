import { ListaPrecios } from "./ListaPrecios";
import { useParams } from "react-router-dom";

import React from 'react'

export const AdminListaPrecios = () => {

    const {id} = useParams()

    if(id) {
        const nombre = id.substring(1,2)
        if(nombre === '0'){
            return <ListaPrecios id={id.substring(2,4)} />
        }
        else{
            return <ListaPrecios id={nombre} />
        }
    }
}
