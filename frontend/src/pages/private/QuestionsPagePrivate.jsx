import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import QuestionPrivate from '../../components/private/QuestionsPrivate';

const QuestionsPagePrivate = () => {

    const dispatch = useDispatch()

    const {isLoading,questions,error}=useSelector(state=>state.question)

    const state =useSelector(state=>state.auth)
    
    const isFavorite=true;

    useEffect(()=>{
      dispatch(loadAllQuestionFavorite(state.user.uid))
    },[dispatch])
  
    
    return (
        <Fragment>

        <section>
                    
                    {questions?
            (questions.length>0? questions.map((question)=>{
                return(
                    <QuestionPrivate key={question.id} question={question} isFavorite={isFavorite}/>
                )
               
            }):<p>No hay preguntas</p>):null}
                    {isLoading && <h1> Cargando preguntas </h1>}
            {error && <h1> Error {error} </h1>}
        </section>

        </Fragment>
    )
}

export default QuestionsPagePrivate
