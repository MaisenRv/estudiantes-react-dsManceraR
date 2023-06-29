 
const Student = ({estudiante_id,estudiante_nombres,estudiante_apellidos,estudiante_correo}) =>{
    return(
        <tr>
            <td>{estudiante_id}</td>
            <td>{estudiante_nombres}</td>
            <td>{estudiante_apellidos}</td>
            <td>{estudiante_correo}</td>
            <td>{estudiante_correo}</td>
        </tr>
    )
}
export default Student