import { useDispatch, useSelector } from "react-redux";
import { loadById, deleteAnswer } from '../../app/middleware/payloadQuestions';
import OneQuestionPrivate from '../../components/private/OneQuestionPrivate';
import { Fragment, useEffect } from 'react'
import { useParams } from "react-router-dom";
import FormAnswer from "../../components/private/FormAnswer";
import ViewAnswer from "../../components/private/ViewAnswer";
import swal from 'sweetalert'

const OneQuestionPagePrivate = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { isLoading, oneQuestion, error } = useSelector(state => state.oneQuestion)

    useEffect(() => {
        dispatch(loadById(id))
    }, [dispatch, id])

    const deleteModal = (id) => {
        swal({
            title: "Estas segur@?",
            text: "Una vez eliminada, ¡no podrá recuperar esta respuesta!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("¡Tu respuesta ha sido eliminada!", { icon: "success" });
                    dispatch(deleteAnswer(id))
                }
            });
    }

    return (
        <Fragment>
            {oneQuestion &&
                <>
                    <OneQuestionPrivate oneQuestion={oneQuestion} />
                    <div className="col-6 offset-3">
                        <hr />
                        <h3>{oneQuestion.answers.length} Respuestas</h3>
                    </div>
                    {oneQuestion.answers && oneQuestion.answers.map((answer) => {
                        return (
                            <ViewAnswer key={answer.id} answer={answer} deleteAnswer={deleteModal} />
                        )
                    })}
                    <FormAnswer idQuestion={oneQuestion.id}></FormAnswer>
                </>
            }
            {oneQuestion && oneQuestion.answers.length === 0 && <p className="text-center">No hay respuestas para mostrar</p>}
            {isLoading && <h1>Cargando...</h1>}
            {error && <h1> Error {error} </h1>}
        </Fragment>
    )
}

export default OneQuestionPagePrivate
