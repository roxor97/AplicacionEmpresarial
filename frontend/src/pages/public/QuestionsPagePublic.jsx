import {useEffect} from'react'
import { useDispatch,useSelector } from "react-redux";
import { loadAllQuestion } from '../../app/middleware/payloadQuestions';
import QuestionPublic from '../../components/public/QuestionsPublic';

const QuestionsPagePublic = () => {
    const dispatch = useDispatch()
    const {isLoading,questions,error}=useSelector(state=>state.question)


    useEffect(()=>{
      dispatch(loadAllQuestion())
    },[dispatch])
  
    
    return (
        <section>
             {questions?
            (questions.length>0? questions.map((question)=>{
                return(
                    <QuestionPublic key={question.id} question={question}/>
                )
               
            }):<p>No hay preguntas</p>):null}
                    {isLoading && <h1> Cargando preguntas </h1>}
            {error && <h1> Error {error} </h1>}
        </section>
    )
}

export default QuestionsPagePublic
