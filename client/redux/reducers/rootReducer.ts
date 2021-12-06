import { combineReducers } from 'redux'
import userExistsReducer from './userReducer'


const rootReducer = combineReducers({
  userExists: userExistsReducer,
})

export default rootReducer
