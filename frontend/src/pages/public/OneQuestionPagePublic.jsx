import { useDispatch,useSelector } from "react-redux";
import { loadById } from '../../app/middleware/payloadQuestions';
import {useEffect} from'react'
import { useParams } from "react-router-dom";
import ViewAnswer from "../../components/private/ViewAnswer";
import OneQuestionPublic from '../../components/public/OneQuestionPublic';


const OneQuestionPagePublic = () => {

    const dispatch = useDispatch();
    const {id}=useParams();
    const {oneQuestion} = useSelector(state => state.oneQuestion)

    useEffect(()=>{
      dispatch(loadById(id))
    },[])
  
    return (    
        <section>
        {oneQuestion&&(
        <>
        <OneQuestionPublic question={oneQuestion}/>
        {oneQuestion.answers.map((answer,index)=>{
                return(
                    <ViewAnswer key={index} answer={answer} ></ViewAnswer>
                )})}
        </>
        )}
        </section>
    )
}

export default OneQuestionPagePublic;
