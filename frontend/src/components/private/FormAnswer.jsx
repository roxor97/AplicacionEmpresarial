import React, { useState } from 'react';
import useFormData from '../../hooks/UseFormData'
import { postAnswer } from '../../app/middleware/payloadQuestions';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert'
import { useParams } from 'react-router-dom';

const FormAnswer = ({ idQuestion }) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.auth)
    const { form, formData, updateFormData } = useFormData()
    const [alert, setAlert] = useState(false)
    const questionId = useParams()

    const validator = (e) => {
        e.preventDefault()
        formData.answer.length < 15 ? setAlert(true) : submitForm(e)
    }

    const submitForm = (e) => {
        setAlert(false)
        dispatch(postAnswer(formData))
        form.current.reset()
        swal({ title: "Respuesta guardada", text: "Click en el botón Ok!", icon: "success" });
    }

    return (
        <div className="col-6 offset-3">
            <hr />
            <form ref={form} onSubmit={validator} onChange={updateFormData}>
                <h3>Añade tu respuesta.</h3>
                {alert &&
                    <div className="alert alert-danger" role="alert">
                        El mensaje debe tener mas de 15 caracteres.
                    </div>
                }
                <input hidden name="userId" type="text" defaultValue={state.user.uid} ></input>
                <input hidden name="questionId" type="text" defaultValue={questionId.id} ></input>
                <div className="input-group mb-3">
                    <input
                        required
                        type="text"
                        className="form-control"
                        name="answer"
                        placeholder="Ingresa aqui una respuesta"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-success" type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default FormAnswer