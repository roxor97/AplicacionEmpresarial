import React, { useState } from 'react';
import { putPerson } from '../../app/middleware/payloadQuestions';
import useFormData from '../../hooks/UseFormData'
import swal from 'sweetalert'
import { useDispatch, } from "react-redux"

const FormUsuario = ({ person, editProfile }) => {
    const dispatch = useDispatch()
    const [name, setName] = useState(person.name);
    const [lastName, setLastName] = useState(person.lastName);
    const { form, formData, updateFormData } = useFormData();

    const submitForm = (e) => {
        editProfile(false)
        dispatch(putPerson(formData))
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
                    className="form-control-lg mb-3"
                    required
                />
                <input
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Ingrese Apellido'
                    className="form-control-lg mb-3"
                />
                <input hidden name="id" type="text" defaultValue={person.id}></input>
                <input hidden name="uid" type="text" defaultValue={person.uid}></input>
                <input hidden name="email" type="text" defaultValue={person.email}></input>
                <input hidden name="pictureURL" type="text" defaultValue={person.pictureURL}></input>
                <button onClick={() => editProfile(false)} className="btn btn-danger" type="button">Cancelar</button>
                <button disabled={name === person.name && lastName === person.lastName} className="btn btn-dark" type="submit">Actualizar</button>
            </form>
        </div>
    )
}

export default FormUsuario;