import React from 'react'
import { useEffect,useRef,useState } from 'react';
import { propiedadApi } from '../api/propiedadApi';
import { PropiedadPaginatedResponse, PropiedadSimple, Result } from '../interfaces/propiedadInterfaces';


export const usePropiedadPaginated = () => {

    const [isLoading, setisLoading] = useState(true)

    const [simplePropList, setSimplePropList] = useState<PropiedadSimple[]>([])

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon/?limit=40')

    const cargarPropiedades = async () => {
        setisLoading(true)
        const resp = await propiedadApi.get<PropiedadPaginatedResponse>(nextPageUrl.current)
        nextPageUrl.current=resp.data.next;
        mapPropList(resp.data.results)
    }

    const mapPropList=(propList: Result[])=>{
        const newPropList:PropiedadSimple[]=propList.map( ({name,url})=>{
            const urlPart=url.split('/');
            const id = urlPart[urlPart.length -2]
            const picture=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;


            return{
                id,picture,name
            };
        });
        setSimplePropList([...simplePropList,...newPropList])
        setisLoading(false)
    }

    useEffect(() => {
        cargarPropiedades();
    }, [])

    return{
        isLoading,
        simplePropList,
        cargarPropiedades
    }

    

}