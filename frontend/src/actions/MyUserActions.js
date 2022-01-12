import actionsTypesMyUser from "./actionsTypes/ActionsTypeMyUser";


export const myUserLoadSuccess=(person)=>{
    return {
        type:actionsTypesMyUser.LOAD_SUCCESS_USER,
        payload:person
    }
}

export const myUserLoadError=(error)=>{
    return {
        type:actionsTypesMyUser.LOAD_FAILURE_USER,
        payload:error
    }
}

export const myUserLoading=()=>{
    return {
        type:actionsTypesMyUser.LOADING_USER
    }
}