import ActionsTypeOneQuestion from "./actionsTypes/ActionsTypeOneQuestion";


export const oneQuestionLoadSucces=(question)=>{
    return {
        type:ActionsTypeOneQuestion.LOAD_SUCCESS_QUESTION,
        payload:question
    }
}

export const oneQuestionLoadError=(error)=>{
    return {
        type:ActionsTypeOneQuestion.LOAD_FAILURE_QUESTION,
        payload:error
    }
}

export const oneQuestionsLoading=()=>{
    return {
        type:ActionsTypeOneQuestion.LOADDING_QUESTION
    }
}

export const oneQuestionsDeleteAnswer=(id)=>{
    return {
        type:ActionsTypeOneQuestion.DELETE_ANSWER,
        payload:id
    }
}
