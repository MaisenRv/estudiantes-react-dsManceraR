import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const checkSession = ()=>{
    
    const session = sessionStorage.getItem("session")
    if (session) {
        const initialState = {
            usuario: JSON.parse(sessionStorage.getItem("session")).usuario,
            token: JSON.parse(sessionStorage.getItem("session")).token,
            estudiantes: []
        }   
        return initialState
    }
    const initialState = {
        usuario:{
            correo:"",
            identificacion:""
        },
        token:"",
        estudiantes:[]
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
            return {...state, token: action.payload}
        case "SET_ESTUDIANTES":
            return {...state, estudiantes: action.payload}
        default: return state
    }
}




const store = configureStore({
    reducer: storeReducer,
    middleware:[thunk]
})

export default store;