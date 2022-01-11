import React, { Fragment, useState } from 'react'
import profile from '../../media/person.jpg'
import { app, google } from "../../service/firebase"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import useFormData from '../../hooks/UseFormData'
import { getPersonValid, postPerson } from '../../app/middleware/payloadQuestions'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(false)
    const dispatch = useDispatch()
    const [userMail, setUserMail] = useState(null)
    const { form, formData, updateFormData } = useFormData();

    const [alert, setAlert] = useState([false, ""])
    const [alertPass, setAlertPass] = useState(false)
    const navigate = useNavigate()

    const handler = () => {
        app.auth().signInWithPopup(google)
            .then(user => {
                dispatch(getPersonValid(user.user.multiFactor.user, navigate))
            })
            .catch()
    }

    const createUser = (mail, password) => {
        app.auth().createUserWithEmailAndPassword(mail, password)
            .then((firebaseUser) => {
                setAlert([false, ""])
                setUserMail(firebaseUser);
                dispatch(postPerson(
                    firebaseUser.user.email,
                    firebaseUser.user.email.split("@")[0],
                    firebaseUser.user.uid,
                    profile
                ))
            })
            .catch((error) => {
                setAlert([true, "El usuario ya existe."])
            });
    }

    const signIn = (mail, password) => {
        app.auth().signInWithEmailAndPassword(mail, password)
            .then((firebaseUser) => {
                setAlert([false, ""])
                setUserMail(firebaseUser);
            })
            .catch((error) => {
                setAlert([true, "El usuario no existe o contraseña erronea"])
            });
    }

    const validator = (e) => {
        e.preventDefault()
        e.target.value.length < 8 ? setAlertPass(true) : setAlertPass(false)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const mail = e.target.emailField.value;
        const password = e.target.passwordField.value;
        setAlert([false, ""])

        if (isSignIn && mail && password && password.length >= 8) createUser(mail, password);

        if (!isSignIn && mail && password) signIn(mail, password);
    }

    return (
        <Fragment>
            <div className="col-8 offset-2">
                <form ref={form} onSubmit={submitHandler} onChange={updateFormData} className='mt-1 py-1 mt-md-3 py-md-3 px-md-5'>
                    <h1 style={{ margin: "50px" }}>{isSignIn ? "Regístrate" : "Iniciar Sesión"}</h1>
                    <input type="email" id="emailField" placeholder='Correo Electrónico' className="form-control" style={{ margin: "10px 0" }} />
                    <input onChange={e => validator(e)} type="password" id="passwordField" placeholder='Contraseña' className="form-control" />

                    {alert[0] && <div className="alert alert-danger" role="alert">{alert[1]}</div>}
                    {alertPass && <div className="alert alert-warning" role="alert">La constraseña debe tener mas de 8 caracteres</div>}

                    <button type='submit' className="btn btn-primary" style={{ background: "#0d6efd", border: "none", margin: "30px 15px" }}>
                        {isSignIn ? "Regístrate" : "Iniciar sesión"}
                    </button>
                    <button type='submit' onClick={() => setIsSignIn(!isSignIn)} className="btn btn-light" style={{ border: "none", margin: "30px 0" }}>
                        {isSignIn
                            ? "¿Ya tienes cuenta? ¡Inicia sesión!"
                            : "¿No tienes cuenta? ¡Registrate, es gratis!"
                        }
                    </button>
                </form>
                <div className="text-center">
                    <button className="btn btn-outline-danger" onClick={handler}>
                        <img src="/googleLogo.png" width={25} height={25} alt="" />
                        Iniciar Sesión con google
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Login
