// Dependencies
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup"
// Hooks
import { useSelector } from "react-redux";
// Styles
import imageFormLogin from "../assets/images/student.png"
import "../assets/css/login.css"

const FormLogin = () => {
    const validationSchema = yup.object({
        correo: yup.string()
            .email("Email invalido")
            .required("Campo requerido"),
        identificacion: yup.number()
            .required('Campo requerido')
    })
    return (
        <>
            <Formik
                initialValues={{correo:"",identificacion:""}}
                validationSchema={validationSchema}
                onSubmit={(values ,{ setSubmitting, resetForm})=>{
                    setTimeout(()=>{
                        alert(JSON.stringify(values))
                        resetForm()
                        setSubmitting(false)
                    }, 500)
                }}
            >
                {
                    ({ isSubmitting }) => (
                        <Form className="login-form">
                            <img src={imageFormLogin} />
                            <Field 
                                id = "correo"
                                type = "email" 
                                name = "correo" 
                                placeholder = "ejemplo@ejemplo.com"
                            />
                            <Field 
                                id = "identificacion"
                                type = "number" 
                                name = "identificacion" 
                                placeholder = "Identificacion"
                            />
                            <div>
                                <button type="submit"> Enviar</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}

export default FormLogin;