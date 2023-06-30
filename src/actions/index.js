const actions = {
   reviewImage: payload => ({ type: 'REVIEW_IMAGE', payload }),
   reviewImages: payload => ({ type: 'REVIEW_IMAGES', payload }),
   play: () => ({ type: 'PLAY' }),
   close: () => ({ type: 'CLOSE' }),
}

export default actions
