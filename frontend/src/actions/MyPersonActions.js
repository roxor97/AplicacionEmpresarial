import actionsTypesMyPerson from "./actionsTypes/ActionsTypeMyPerson";


export const myPersonLoadSuccess=(person)=>{
    return {
        type:actionsTypesMyPerson.LOAD_SUCCESS_PERSON,
        payload:person
    }
}

export const myPersonLoadError=(error)=>{
    return {
        type:actionsTypesMyPerson.LOAD_FAILURE_PERSON,
        payload:error
    }
}

export const myPersonLoading=()=>{
    return {
        type:actionsTypesMyPerson.LOADING_PERSON
    }
}