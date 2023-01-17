import  { createContext, useReducer } from 'react'

function authReducer(state, action){
    switch(action.type){
        case 'LOGIN':
            return {...state, isConnected : true, data: action.payload.data }
        
        case 'Metamask':
            return {...state, isConnected: true, metamask: action.payload.metamask}

        default:
            return state
    }
}


export const AuthContext = createContext()
export function AuthProvider({children}){

const [state, dispatch] = useReducer(authReducer , {
        isConnected : false,
        data : null,
        metamask : null

    })

const userLogin = (data) =>{
    console.log("in use context" , data)
    dispatch({
        type: "LOGIN",
        payload: {data}
    })
}


const userMetamask = (metamask) =>{
    console.log("metamask context: ", metamask)
    dispatch({
        type: "Metamask",
        payload: {metamask}
    })
}
  


    return(
    <AuthContext.Provider value={{...state, userLogin, userMetamask}}>
        {children}
    </AuthContext.Provider>
)}