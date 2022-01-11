import actionsTypesOneQuestion from "../actions/actionsTypes/ActionsTypeOneQuestion";

const initialState = {
    isLoading: false,
    oneQuestion: null,
    error: null
}

const OneQuestionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionsTypesOneQuestion.LOAD_SUCCESS_QUESTION:
            return {
                ...state,
                isLoading: false,
                oneQuestion: payload,
                error: null
            }
        case actionsTypesOneQuestion.LOAD_FAILURE_QUESTION:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case actionsTypesOneQuestion.DELETE_ANSWER:
            const answer = state.oneQuestion.answers.filter(question => question.id !== payload);
            return {
                ...state,
                isLoading: false,
                error: null,
                oneQuestion: { ...state.oneQuestion, answers: answer }
            }
        case actionsTypesOneQuestion.LOADING_QUESTION
            :
            return {
                ...state,
                isLoading: true,
                error: payload
            }
        default: return state;
    }
}

export default OneQuestionReducer

