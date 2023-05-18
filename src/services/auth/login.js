// Dependencies
import axios from "axios"
import ConfigApi from "../../config/ConfigApi"

const login = (correo, identificacion)=>{
    return (dispatch) =>{

        const {url} = ConfigApi.getToken

        axios.post(url,{correo,identificacion})
            .then(response =>{
                dispatch({type:"SET_TOKEN", payload: response.data.token}) 
                dispatch({type:"SET_IDENTIFICACION", payload: identificacion}) 
                dispatch({type:"SET_CORREO", payload: correo}) 
            }).catch(error =>{
                console.log(error);
            })
    }
}

export default login