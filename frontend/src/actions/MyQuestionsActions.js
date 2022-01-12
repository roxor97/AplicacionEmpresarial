import actionsTypesMyQuestion from "./actionsTypes/ActionsTypeMyQuestions"

export const myQuestionsLoading=()=>{
    return {
        type:actionsTypesMyQuestion.LOADING_SUCCESS_MY_QUESTIONS
    }
}

export const myQuestionsLoadSucces=(questions)=>{
    return {
        type:actionsTypesMyQuestion.LOAD_SUCCESS_MY_QUESTIONS,
        payload:questions
    }
}

export const myQuestionDelete=(id)=>{
    return {
        type:actionsTypesMyQuestion.DELETE_SUCCESS,
        payload:id
    }
}

export const myQuestionsLoadError=(error)=>{
    return {
        type:actionsTypesMyQuestion.LOAD_FAILURE_MY_QUESTIONS,
        payload:error
    }
}