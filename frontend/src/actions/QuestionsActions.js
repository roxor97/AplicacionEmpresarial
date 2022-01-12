import actionsTypesQuestions from "./actionsTypes/ActiosTypesQuestions";


export const questionsLoading=()=>{
    return {
        type:actionsTypesQuestions.LOADING
    }
}

export const questionsLoadSucces=(questions)=>{
    return {
        type:actionsTypesQuestions.LOAD_SUCCESS,
        payload:questions
    }
}

export const questionsLoadError=(error)=>{
    return {
        type:actionsTypesQuestions.LOAD_FAILURE,
        payload:error
    }
}

export const questionsAddFavorite=(data)=>{
    return {
        type:actionsTypesQuestions.ADD_FAVORITE,
        payload:data
    }
}


export const questionsDeleteFavorite=(id)=>{
    return {
        type:actionsTypesQuestions.DELETE_FAVORITE_SUCCESS,
        payload:id
    }
}
