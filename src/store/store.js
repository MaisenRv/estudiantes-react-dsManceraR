import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const checkSession = ()=>{
    let initialState
    const session = sessionStorage.getItem("session")
    if (session) {
        initialState = JSON.parse(sessionStorage.getItem("session"))
    }else{
        initialState = {
            usuario:{
                correo:"",
                identificacion:""
            },
            token:""
        }
    }
    return initialState

}


const storeReducer = (state = checkSession(), action)=>{
    switch (action.type) {
        case "SET_CORREO": 
            return {...state, usuario:{...state.usuario, correo: action.payload}}
        case "SET_IDENTIFICACION":
            return {...state, usuario:{...state.usuario, identificacion: action.payload}}
        case "SET_TOKEN":
            return {...state,token: action.payload}
        default: return state
    }
}




const store = configureStore({
    reducer: storeReducer,
    middleware:[thunk]
})

export default store;