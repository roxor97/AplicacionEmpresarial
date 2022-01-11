

import {
  CREATE_PROFILE,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR,
  START_GET_PROFILE,
  GET_PROFILE_SUCCESSFUL,
  GET_PROFILE_ERROR,
  START_EDITING_PROFILE,
  EDITED_PROFILE_SUCCESS,
  EDITED_PROFILE_ERROR,
} from "../actions/ProfileActions";

export const initialState = {
  profile: {},
  error: null,
  loading: false,
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PROFILE:
    case START_GET_PROFILE:
    case START_EDITING_PROFILE:
      return {
        ...state,
        loading: action.payload,
      };
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case CREATE_PROFILE_ERROR:
    case GET_PROFILE_ERROR:
    case EDITED_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PROFILE_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        error: null,
        profile: action.payload,
      };

    case EDITED_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        profile: action.payload,
      };

    default:
      return state;
  }
}
