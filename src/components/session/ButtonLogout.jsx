import { useDispatch } from "react-redux"
import '../../assets/css/btnLogout.css'
const ButtonLogout = ()=>{
    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch({type:'SET_CORREO', payload:''})
        dispatch({type:'SET_IDENTIFICACION', payload:''})
        dispatch({type:'SET_TOKEN', payload:''})
        sessionStorage.removeItem("session")
    }

    return(
        <button onClick={handleClick} className="button-logout">Cerrar sesion</button>
    )
    
}

export default ButtonLogout