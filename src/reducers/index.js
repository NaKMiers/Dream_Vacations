import { combineReducers } from 'redux'
import blogReducer from './blogReducer'
import authorReducer from './authorReducer'
import imageReviewReducer from './imageReviewReducer'

const reducers = combineReducers({
   blogs: blogReducer,
   authors: authorReducer,
   imageReview: imageReviewReducer,
})

export default reducers
