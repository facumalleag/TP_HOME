import { useState, useEffect } from 'react';
import { PropiedadFullDesc } from '../interfaces/propiedadInterfaces';
import { propiedadApi } from '../api/propiedadApi';

export const usePropiedad = (id:string) => {
  
    const [isLoading, setisLoading] = useState(true)
    const [propiedad, setPropiedad] = useState<PropiedadFullDesc>({} as PropiedadFullDesc)

    const loadPropiedad= async ()=>{
        const resp=await propiedadApi.get<PropiedadFullDesc>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPropiedad(resp.data);
        setisLoading(false)
    }
    useEffect(() => {
        loadPropiedad();
    }, [])
    

    return{
        isLoading,
        propiedad,
    }
    
}

