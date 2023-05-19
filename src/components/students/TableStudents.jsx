
import Student from './Student'
const TableStudents = () =>{

    return(
        <>
            <table className='table-students'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nombres</th>
                        <th scope='col'>Apellidos</th>
                        <th scope='col'>Correo</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <Student/>
                    <Student/>
                    <Student/>
                    <Student/>
                    <Student/>
                    <Student/>
                </tbody>
            </table>
        </>
    )
}
export default TableStudents