import { combineReducers } from 'redux'
import blogReducer from './blogReducer'

const reducers = combineReducers({ blogs: blogReducer })

export default reducers
