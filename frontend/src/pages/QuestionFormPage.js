import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { postQuestion } from '../actions/questionActions'
import { useDispatch, useSelector } from 'react-redux'

const FormPage = () => {
    
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const dispatch = useDispatch()
    const question = useSelector(state => state.question)
    const auth = useSelector(state => state.auth)

    const onSubmit = data => {
        data.userId = auth.uid;
        data.ownerEmail=auth.email;
        dispatch(postQuestion(data));
    };

    useEffect(() => {
        if (question.redirect) {
            history.push(question.redirect);
        }
    }, [question.redirect, history])

    return (
        <section>
            <h1>New Question</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label for="type">Type</label>
                    <select {...register("type")} id="">
                        <option value="OPEN (LONG OPEN BOX)">OPEN (LONG OPEN BOX)</option>
                        <option value="OPINION (SHORT OPEN BOX)">OPINION (SHORT OPEN BOX)</option>
                        <option value="WITH RESULT (OPEN BOX WITH LINK)">WITH RESULT (OPEN BOX WITH LINK)</option>
                        <option value="WITH EVIDENCE (OPEN BOX WITH VIDEO)">WITH EVIDENCE (OPEN BOX WITH VIDEO)</option>
                    </select>
                </div>
                <div>
                    <label for="category">Category</label>
                    <select {...register("category")} id="category">
                        <option value="TECHNOLOGY AND COMPUTER">TECHNOLOGY AND COMPUTER</option>
                        <option value="SCIENCES">SCIENCES</option>
                        <option value="SOFTWARE DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
                        <option value="SOCIAL SCIENCES">SOCIAL SCIENCES</option>
                        <option value="LANGUAGE">LANGUAGE</option>

                    </select>
                </div>

                <div>
                    <label for="question">Question</label>
                    <textarea id="question" {...register("question", { required: true, maxLength: 300 })} />
                </div>
                <button type="submit" className="button" disabled={question.loading} >{
                    question.loading ? "Saving ...." : "Save"
                }</button>
            </form>
        </section>

    );
}


export default FormPage;