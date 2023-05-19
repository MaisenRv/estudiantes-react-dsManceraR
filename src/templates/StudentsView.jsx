import TableStudents from "../components/students/TableStudents"
import ButtonLogout from "../components/session/ButtonLogout"
import '../assets/css/students.css'

const StudentsView = ()=>{
    return(
        <section className="students-view">
            <article className="form-students-container">
                <ButtonLogout/>
            </article>
            <article className="table-students-container">
                <TableStudents/>
            </article>
        </section>
    )
}

export default StudentsView