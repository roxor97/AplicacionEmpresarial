import React, { useState } from 'react';
import { putUser } from '../../app/middleware/payloadQuestions';
import useFormData from '../../hooks/UseFormData'
import swal from 'sweetalert'
import { useDispatch, } from "react-redux"

const FormUser = ({ user, editProfile }) => {
    const dispatch = useDispatch()
    const [name, setName] = useState(user.name);
    const [lastName, setLastName] = useState(user.lastName);
    const { form, formData, updateFormData } = useFormData();

    const submitForm = (e) => {
        editProfile(false)
        dispatch(putUser(formData))
        form.current.reset()
        swal({ title: "Actualizado", text: "Click en el botón Ok!", icon: "success" });
    }

    return (
        <div>
            <h1>Actualización de los datos personales</h1>
            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Ingrese Nombre'
                    className="input-name"
                    required
                />
                <input
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Ingrese Apellido'
                    className="imput-lastname"
                />
                <input hidden name="id" type="text" defaultValue={user.id}></input>
                <input hidden name="uid" type="text" defaultValue={user.uid}></input>
                <input hidden name="email" type="text" defaultValue={user.email}></input>
                <input hidden name="IMG_URL" type="text" defaultValue={user.pictureURL}></input>
                <button onClick={() => editProfile(false)} className="btn btn-danger" type="button">Cancelar</button>
                <button disabled={name === user.name && lastName === user.lastName} className="btn btn-dark" type="submit">Actualizar</button>
            </form>
        </div>
    )
}

export default FormUser;