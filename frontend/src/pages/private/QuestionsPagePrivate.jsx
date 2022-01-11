import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadAllQuestion } from '../../app/middleware/payloadQuestions';
import QuestionPrivate from '../../components/private/QuestionsPrivate';

const QuestionsPagePrivate = () => {
    const dispatch = useDispatch()
    const { isLoading, questions, error } = useSelector(state => state.question)


    useEffect(() => {
        dispatch(loadAllQuestion())
    }, [dispatch])


    return (
        <Fragment>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Top Preguntas</h1>
                </div>
            </div>
            <div className='col-6 offset-3'>
                {questions && questions.map((question) => {
                    return (
                        <QuestionPrivate key={question.id} question={question} />
                    )
                })}
                {questions &&
                    questions.length === 0 &&
                    <p className="text-center">No hay preguntas para mostrar</p>
                }
                {isLoading && <h1>Cargando...</h1>}
                {error && <h1>Error {error}</h1>}
            </div>
        </Fragment>
    )
}

export default QuestionsPagePrivate
