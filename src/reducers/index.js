import { combineReducers } from 'redux'
import blogReducer from './blogReducer'
import authorReducer from './authorReducer'
import imageReviewReducer from './imageReviewReducer'
import podcastReducer from './podcastReducer'

const reducers = combineReducers({
   blogs: blogReducer,
   authors: authorReducer,
   imageReview: imageReviewReducer,
   podcasts: podcastReducer,
})

export default reducers
