// Dependencies
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup"
// Hooks
import { useDispatch, useSelector } from "react-redux";
// Components
import login from "../services/auth/login"
// Styles
import imageFormLogin from "../assets/images/student.png"
import "../assets/css/login.css"

const FormLogin = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
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
                initialValues={{ correo: "", identificacion: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    const { correo, identificacion } = values

                    dispatch(login(correo, identificacion))
                    setSubmitting(false)
                    resetForm()
                }}
            >
                {
                    ({ isSubmitting }) => (
                        <Form className="login-form">
                            <img src={imageFormLogin} />
                            <Field
                                id="correo"
                                type="email"
                                name="correo"
                                placeholder="ejemplo@ejemplo.com"
                            />
                            <Field
                                id="identificacion"
                                type="number"
                                name="identificacion"
                                placeholder="Identificacion"
                            />
                            <div>
                                <button type="submit" disabled={isSubmitting}> Enviar</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}

export default FormLogin;