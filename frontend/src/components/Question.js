import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Question = ({ question, excerpt, onDelete }) => {

  
const confirmDelete = (id) => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "no podras recuperar la pregunta!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      onDelete(id)
    }
  })
}


  return ( <article className={excerpt ? 'question-excerpt' : 'question'}>
  <h2>{question.question}</h2>
  <p>{question.category}  - <small>{question.type}</small></p>
 
  {onDelete && (
    <button className="button right" onClick={() => confirmDelete(question.id)}>DELETE</button>
  )}
  {excerpt && (
    <Link to={`/question/${question.id}`} className="button">
      View Question
    </Link>
  )}
</article> );
}
 
export default Question;
