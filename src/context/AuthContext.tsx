import React,{ createContext, useReducer, useState } from "react"
import { generaEstado } from "./authReducer"
import { Propiedad } from "../interfaces/propiedadInterfaces";

//Definir como luce, que infor tendremos aqui

export interface AuthState{
    isLoggedIn:boolean,
    token:string,
    username?:string,
    favoriteIcon?:string,
    ownerId:string,
    tipoOperacion:string,
    direccion:string,
    numero:string,
    piso:string,
    localidad:string,
    barrio:string,
    provincia:string,
    pais:string,
    antiguedad:string,
    tipoDePropiedad:string,
    superficieCubierta:string,
    superficieSemicubierta:string,
    superficieDescubierta:string,
    cantidadAmbientes:string,
    cantidadDormitorios:string,
    cantidadBanios:string,
    cantidadCocheras:string,
    fotos:string,
    comodidades:string,
    orientacion:string,
    sentido:string,
    descripcion:string,
    precio:string,
    moneda:string,
    expensas:string,
    estado:string,
    
}


// Estado inicial
export const authSInitialState:AuthState={
    isLoggedIn:false,
    username:undefined,
    favoriteIcon:undefined,
    token:'',
    ownerId:'',
    tipoOperacion:'',
    direccion:'',
    numero:'',
    piso:'',
    localidad:'',
    barrio:'',
    provincia:'',
    pais:'',
    antiguedad:'',
    tipoDePropiedad:'',
    superficieCubierta:'',
    superficieSemicubierta:'',
    superficieDescubierta:'',
    cantidadAmbientes:'',
    cantidadDormitorios:'',
    cantidadBanios:'',
    cantidadCocheras:'',
    fotos:'',
    comodidades:'',
    orientacion:'',
    sentido:'',
    descripcion:'',
    precio:'',
    moneda:'',
    expensas:'',
    estado:'',
}


//Lo usaremos para decirle a react como luce y que expone el context

export interface AuthContextProps{
    authState:AuthState,
    signIn:()=>void,
    changeFavortiteIcon:(iconName:string)=>void,
    logOut:()=>void,
    changeUsername:(iconName:string)=>void,
    propiedad: Propiedad[];
    loadPropiedad: () => Promise<void>
    addPropiedad: (categoryId: string, propName: string) => Promise<void>
    updatePropiedad: (categoryId: string, propName: string, propiedadId: string) => Promise<void>
    deletePropiedad: (propiedadId: string) => Promise<void>
    loadPropiedadByIdOwner: (idOwner: string) => Promise<Propiedad>
    uploadImage: (data: any, id: string) => Promise<void>
}

//Crear el contexto
export const AuthContext=createContext( {} as AuthContextProps)

//Componenete que es el proveedor de estado

export const AuthProvider = ({children}: any) =>{

    const changeFavortiteIcon= (iconName:string) =>{
        dispatch({type:'changeFavIcon',payload:iconName })
    }

    const logOut =()=>{
        dispatch({type:'logOut'})
    }


    const [authState, dispatch] = useReducer(generaEstado, authSInitialState);

    const signIn=()=>{
        dispatch({type:'signIn'})
    }
    
    const changeUsername=(nombre:string)=>{
        dispatch({type:'changeUsername',payload:nombre })
    }

    const [propiedad, setPropiedad] = useState<Propiedad[]>([])

    const loadPropiedad = async() => {

    }
    const addPropiedad = async(categoryId: string, propName: string) => {

    }
    const updatePropiedad =async (categoryId: string, propName: string, propiedadId: string) => {

    }
    const deletePropiedad = async(propiedadId: string) => {

    }
    const loadPropiedadByIdOwner =async (idOwner: string) => {
        throw new Error ('Not implemented')

    }
    const uploadImage = async(data: any, id: string) => {

    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavortiteIcon,
            logOut,
            changeUsername,
            propiedad,
            loadPropiedad,
            addPropiedad,
            updatePropiedad,
            deletePropiedad,
            loadPropiedadByIdOwner,
            uploadImage,
        }}>
            {children}
        </AuthContext.Provider>

    )
}