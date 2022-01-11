import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';


const rootReducer = combineReducers({
    question: questionsReducer,
    auth: authReducer,
    profile: profileReducer
})

export default rootReducer
