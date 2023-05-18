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
                
                const session = {
                    usuario:{
                        correo:correo,
                        identificacion:identificacion
                    },
                    token:response.data.token
                }

                sessionStorage.setItem("session",JSON.stringify(session))
            }).catch(error =>{
                console.log(error);
            })
    }
}

export default login