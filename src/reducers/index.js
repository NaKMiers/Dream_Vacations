import { combineReducers } from 'redux'
import blogReducer from './blogReducer'
import authorReducer from './authorReducer'

const reducers = combineReducers({ blogs: blogReducer, authors: authorReducer })

export default reducers
