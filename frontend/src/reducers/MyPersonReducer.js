import actionsTypesMyPerson from "../actions/actionsTypes/ActionsTypeMyPerson";

const initialState = {
    isLoading: false,
    myPerson: null,
    error: null
}

const MyPersonReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionsTypesMyPerson.LOAD_SUCCESS_PERSON:
            return {
                ...state,
                isLoading: false,
                myPerson: payload,
                error: null
            }
        case actionsTypesMyPerson.LOAD_FAILURE_PERSON:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case actionsTypesMyPerson.LOADING_PERSON
            :
            return {
                ...state,
                isLoading: true,
                error: payload
            }
        default: return state;
    }
}

export default MyPersonReducer