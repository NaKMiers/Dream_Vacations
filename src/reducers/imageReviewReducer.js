const initState = {
   curImage: '',
   imageList: [],
   autoPlay: false,
}

function imageReviewReducer(state = initState, action) {
   switch (action.type) {
      case 'REVIEW_IMAGE':
         return { ...state, curImage: action.payload }

      case 'REVIEW_IMAGES':
         return { ...state, imageList: action.payload }

      case 'PLAY':
         return { ...state, autoPlay: !state.autoPlay }

      case 'CLOSE':
         return initState

      default:
         return state
   }
}

export default imageReviewReducer
