import { useDispatch, useSelector } from "react-redux"
import { Fragment, useEffect } from "react"
import { getUserQuestion, deleteQuestion } from "../../app/middleware/payloadQuestions"
import QuestionsPrivate from "../../components/private/QuestionsPrivate"
import swal from 'sweetalert'

const MyQuestions = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { isLoading, myQuestions, error } = useSelector(state => state.myQuestion)

    useEffect(() => {
        dispatch(getUserQuestion(user.uid));
    }, [user, dispatch]);

    const deleteModal = (id) => {
        swal({
            title: "Estas segur@?",
            text: "Una vez eliminada, ¡no podrá recuperar esta pregunta!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("¡Tu pregunta ha sido eliminada!", { icon: "success" });
                    dispatch(deleteQuestion(id))
                }
            });
    }

    return (
        <Fragment>
            <div className="mt-3 mb-3">
                <div className="text-center">
                    <h1>Mis Preguntas</h1>
                    <p>{myQuestions && myQuestions.length} Preguntas</p>
                </div>
                <div className="col-6 offset-3">
                    {myQuestions
                        ? (myQuestions.length > 0
                            ? myQuestions.map((question) => {
                                return (
                                    <QuestionsPrivate
                                        key={question.id}
                                        question={question}
                                        deleteQuestion={deleteModal}
                                    />
                                )
                            })
                            : <p className="text-center">No hay preguntas para mostrar</p>)
                        : null}
                    {isLoading && <h1>Cargando...</h1>}
                    {error && <h1> Error {error} </h1>}
                </div>
            </div>
        </Fragment>
    )
}

export default MyQuestions
