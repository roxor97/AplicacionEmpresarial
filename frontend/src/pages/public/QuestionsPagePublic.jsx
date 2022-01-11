import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadAllQuestion } from '../../app/middleware/payloadQuestions';
import QuestionPublic from '../../components/public/QuestionsPublic';

const QuestionsPagePublic = () => {
    const dispatch = useDispatch()
    const { isLoading, questions, error } = useSelector(state => state.question)

    useEffect(() => {
        dispatch(loadAllQuestion())
    }, [dispatch])


    return (
        <Fragment>
            <div className="row">
                <div className="col-12 text-center mt-3 mb-3">
                    <h1>Bienvenidos a la App de preguntas</h1>
                </div>
            </div>
            <div className='col-sm-12 col-md-8 offset-md-2 offset-0'>
                {questions && questions.map((question) => {
                    return (
                        <QuestionPublic key={question.id} question={question} />
                    )
                })}
                {isLoading && <h1>Cargando...</h1>}
                {error && <h1>Error {error}</h1>}
            </div>
        </Fragment>
    )
}

export default QuestionsPagePublic
