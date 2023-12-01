import { AuthState } from './AuthContext'


type AuthAction =
    | { type: 'signIn', payload: { token: string, ownerId: string, username: string } }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'logOut' }
    | { type: 'changeUsername', payload: string }
    | { type: 'comodidades', payload: string }

export const generaEstado = (state: AuthState, action: AuthAction): AuthState => {


    switch (action.type) {
        case 'signIn':
            const { token, ownerId, username } = action.payload;
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
                ownerId: action.payload.ownerId,
                username: action.payload.username,
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
/* 
export const generaEstadoComodidades = (state: comodidades, action: AuthAction): AuthState => {


    switch (action.type) {
        
        case 'comodidades':
            return {
                ...state,
               
            }
            break;
        default:
            return state;

    }
} */