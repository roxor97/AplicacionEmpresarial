import useFormData from '../../hooks/UseFormData'
import { postQuestion } from '../../app/middleware/payloadQuestions';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const FormQuestion = () => {

  const navigate = useNavigate();
  const state = useSelector(state => state.auth)

  const { form, formData, updateFormData } = useFormData();

  const submitForm = (e) => {
    e.preventDefault();

    postQuestion(formData, navigate)
    form.current.reset();

    swal({ title: "Pregunta guardada", text: "Click en el botón Ok!", icon: "success" });
  }

  return (
    <div className="col-8 offset-2 mt-3" disabled={!state.user}>
      <form ref={form} onSubmit={submitForm} onChange={updateFormData}>

        <h3>Añadir nueva pregunta</h3>
        <div className="mb-3">
          <label className="form-label">Escribe tu pregunta.</label>
          <input required className="form-control-lg" name="question" type="text" placeholder='Ingresa aqui una pregunta'></input>
          <input required className="form-control" name="userId" hidden type="text" defaultValue={state.user.uid} placeholder='Ingresa un userId' />
          <input required className="form-control" name="email" hidden type="text" defaultValue={state.user.email} placeholder='Ingresa aqui un email aqui' />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo</label>
          <select required className="form-control-lg" name="type" defaultValue="">
            <option disabled type="String" value="">Seleccionar Tipo</option>
            <option value="OPEN">Abierta</option>
            <option value="OPINION">Opinion</option>
            <option value="WITH_RESULT">Con resultado</option>
            <option value="WITH_EVIDENCE">Con evidencia</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Categoria</label>
          <select required className="form-control-lg" name="category" defaultValue="">
            <option disabled type="String" value="">Seleccionar Categoria</option>
            <option type="String" value="TECHNOLOGY_AND_COMPUTER">Tecnologia y computación</option>
            <option type="String" value="SCIENCES">Ciencias</option>
            <option type="String" value="SOFTWARE_DEVELOPMENT">Desarrollo de software</option>
            <option type="String" value="SOCIAL_SCIENCES">Ciencias Sociales</option>
            <option type="String" value="LANGUAGE">Lenguaje</option>
          </select>
        </div>
        <div className="mb-3">
          <button className="btn btn-success" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )

}

export default FormQuestion