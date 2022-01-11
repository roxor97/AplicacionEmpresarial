import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchQuestions } from '../actions/questionActions'
import  Question  from '../components/Question'

const QuestionsPage = () => {
   
    const dispatch = useDispatch()
    const question = useSelector(state => state.question)


    useEffect(() => {
        dispatch(fetchQuestions())
    }, [dispatch])
    
    const renderQuestions = () => {
        if (question.loading) return <p>Loading questions...</p>
        if (question.hasErrors) return <p>Unable to display questions.</p>

        return question.questions.map(question => <Question key={question.id} question={question} excerpt />)
    }

    return (
        <section>
            <h1>Questions</h1>
            {renderQuestions()}
        </section>
    )
}


export default QuestionsPage;
