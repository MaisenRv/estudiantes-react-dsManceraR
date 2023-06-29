import axios from "axios";
import ConfigApi from "../../config/ConfigApi";


const getAllStudents = (token) =>{
    return (dispatch)=>{

        const {url} = ConfigApi.getAllStudents;

        
        axios.get(url,{ headers:{Authorization: `Bearer ${token}`} }).then(response =>{
            dispatch({type: 'SET_ESTUDIANTES', payload: response.data.data})
        } )
        .catch(error=> console.log(error));
    }
}

export default getAllStudents