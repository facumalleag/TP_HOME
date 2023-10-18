import React from 'react'
import { AuthState } from './AuthContext'

type AuthAction =
    | { type: 'signIn' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'logOut' }
    | { type: 'changeUsername', payload: string }

export const generaEstado = (state: AuthState, action: AuthAction): AuthState => {


    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
            break;
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
            break;
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
            break;
        case 'changeUsername':
            return {
                ...state,
                username: action.payload,
            }
            break;

        default:
            return state;

    }

}