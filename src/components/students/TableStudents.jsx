import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import getAllStudents from '../../services/students/getAllStudents'

import Student from './Student'
const TableStudents = () =>{
    const {token, estudiantes} = useSelector(state => state)
    const dispatch = useDispatch()  
    
    useEffect(()=>{
        dispatch( getAllStudents(token));
    },[]) 

    const formatStudents = (students)=>{
        return students.map(s=>(
                <Student {...s} key={s.estudiante_id} />
            )
        )
    }

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
                    {formatStudents(estudiantes)}
                </tbody>
            </table>
        </>
    )
}
export default TableStudents