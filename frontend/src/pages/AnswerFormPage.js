import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {  fetchQuestion, postAnswer } from '../actions/questionActions'
import { useDispatch, useSelector } from 'react-redux'
import { Question } from '../components/Question'

const FormPage = ( {match}) => {
    
    const dispatch = useDispatch()
    const question = useSelector(state => state.question)
    const auth = useSelector(state => state.auth)

    const { register, handleSubmit } = useForm();
    const { id } = match.params
    const history = useHistory();

    const onSubmit = data => {
        data.userId =  auth.uid;
        data.questionId = id;
        dispatch(postAnswer(data));
    };

    useEffect(() => {
        dispatch(fetchQuestion(id))
    }, [dispatch, id])

    useEffect(() => {
        if (question.redirect) {
            history.push(question.redirect);
        }
    }, [question.redirect, history])

    const renderQuestion = () => {
        if (question.loading.question) return <p>Loading question...</p>
        if (question.hasErrors.question) return <p>Unable to display question.</p>

        return <Question question={question.question} />
    }


    return (
        <section>
            {renderQuestion()}
            <h1>New Answer</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label for="answer">Answer</label>
                    <textarea id="answer" {...register("answer", { required: true, maxLength: 300 })} />
                </div>
                <button type="submit" className="button" disabled={question.loading} >{
                    question.loading ? "Saving ...." : "Save"
                }</button>
            </form>
        </section>

    );
}


export default FormPage;