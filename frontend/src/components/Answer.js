import React from "react";
import { useDispatch } from "react-redux";
import { deleteAnswer } from "../actions/questionActions";
import Swal from "sweetalert2";

const Answer = ({answer, log}) => {

  const dispatch = useDispatch()

  const onDeleteAnswer = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Una vez eliminada no podras recuperar la respuesta!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAnswer(id, answer.questionId));
      }
    })
  };

  return ( <aside className="answer">
  <p>{answer.answer}</p>
  {
    log === answer.userId && < button className="button right" onClick={() => onDeleteAnswer(answer.id)}>
      DELETE
    </button>
  }
</aside> );
}
 
export default Answer;