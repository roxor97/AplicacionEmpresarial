import { combineReducers } from "@reduxjs/toolkit";
import reducerAuth from "../reducers/AuthReducer";
import myQuestionReducer from "../reducers/MyQuestionsReducer";
import myUserReducer from "../reducers/MyUserReducer";
import reducerQuestions from "../reducers/QuestionsReducer";
import OneQuestionReducer from "../reducers/OneQuestionReducer";


const rootReducer = () => {

    return combineReducers(
        {
            question: reducerQuestions,
            auth: reducerAuth,
            oneQuestion: OneQuestionReducer,
            myQuestion: myQuestionReducer,
            user: myUserReducer
        }
    )
}

export default rootReducer
