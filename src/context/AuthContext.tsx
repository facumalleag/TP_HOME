import React,{ createContext, useReducer } from "react"
import { generaEstado } from "./authReducer"

//Definir como luce, que infor tendremos aqui

export interface AuthState{
    isLoggedIn:boolean,
    token:string,
    idUser:string,
    username?:string,
    favoriteIcon?:string
    comodidades:string
}


// Estado inicial
export const authSInitialState:AuthState={
    isLoggedIn:false,
    username:undefined,
    favoriteIcon:undefined,
    comodidades:'',
    token:'',
    idUser:'',
}


//Lo usaremos para decirle a react como luce y que expone el context

export interface AuthContextProps{
    authState:AuthState,
    signIn:()=>void,
    changeFavortiteIcon:(iconName:string)=>void,
    logOut:()=>void,
    changeUsername:(iconName:string)=>void,
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

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavortiteIcon,
            logOut,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>

    )
}