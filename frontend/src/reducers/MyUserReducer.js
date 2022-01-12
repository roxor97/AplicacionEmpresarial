import actionsTypesMyUser from "../actions/actionsTypes/ActionsTypeMyUser";

const initialState = {
  isLoading: false,
  myUser: null,
  error: null,
};

const MyPersonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesMyUser.LOAD_SUCCESS_USER:
      return {
        ...state,
        isLoading: false,
        myUser: payload,
        error: null,
      };

    case actionsTypesMyUser.LOADING_USER:
      return {
        ...state,
        isLoading: true,
        error: payload,
      };

    case actionsTypesMyUser.LOAD_FAILURE_USER:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default MyPersonReducer;
