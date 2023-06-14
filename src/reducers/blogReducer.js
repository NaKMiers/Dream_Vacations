import blogThumb1 from '../assets/imgs/blogThumb1.png'
import blogThumb2 from '../assets/imgs/blogThumb2.jpg'
import blogThumb3 from '../assets/imgs/blogThumb3.jpg'
import blogThumb4 from '../assets/imgs/blogThumb4.jpg'
import blogThumb5 from '../assets/imgs/blogThumb5.jpg'
import blogThumb6 from '../assets/imgs/blogThumb6.jpg'
import blogThumb7 from '../assets/imgs/blogThumb7.jpg'
import blogThumb8 from '../assets/imgs/blogThumb8.jpg'
import authorAvt1 from '../assets/imgs/authorAvt1.jpeg'

const initState = {
   blogs: [
      {
         id: 1,
         image: blogThumb1,
         author: 'By Scott Jackson',
         avatar: authorAvt1,
         title: 'Super Simple Blog Post Medium',
         desc: '«Travel is the healthiest addiction»',
         date: 'July 2, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 1,
      },
      {
         id: 2,
         image: blogThumb2,
         author: 'By Scott Jackson',
         avatar: authorAvt1,
         title: 'Super Simple Blog Post Small',
         desc: '«Travel is the healthiest addiction»',
         date: 'July 2, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 1,
      },
      {
         id: 3,
         image: blogThumb3,
         author: 'By Scott Jackson',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: '«Travel is the healthiest addiction»',
         date: 'July 2, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 1,
      },
      {
         id: 4,
         image: blogThumb4,
         author: 'By Scott Jackson',
         avatar: authorAvt1,
         title: 'Simple Blog Post',
         desc: '«Travel is the healthiest addiction»',
         date: 'July 2, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 1,
      },
      {
         id: 5,
         image: blogThumb5,
         author: 'By Scott Jackson',
         avatar: authorAvt1,
         title: 'Super Blog Post',
         desc: '«Travel is the healthiest addiction»',
         date: 'July 2, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 1,
      },
      {
         id: 6,
         image: blogThumb6,
         author: 'By Scott Jackson',
         avatar: authorAvt1,
         title: 'Super Simple Post',
         desc: '«Travel is the healthiest addiction»',
         date: 'July 2, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 1,
      },
      {
         id: 7,
         image: blogThumb7,
         author: 'By Scott Jackson',
         avatar: authorAvt1,
         title: 'Super Simple Post',
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         date: 'July 3, 2023',
         createAt: 1686735683881,
         comments: 2,
         likes: 2,
         styles: {},
         type: 1,
      },
      {
         id: 8,
         image: blogThumb8,
         author: 'By Scott Jackson',
         avatar: authorAvt1,
         title: 'Lorem ipsum dolor sit amet',
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         date: 'July 3, 2023',
         createAt: 1686735683881,
         comments: 2,
         likes: 2,
         styles: {},
         type: 1,
      },
   ],

   blogFeed: [
      { blogId: 1, type: 1, styles: {} },
      { blogId: 2, type: 1, styles: { small: true, noOverlayContent: true } },
      { blogId: 3, type: 1, styles: { small: true, visual: true } },
      { blogId: 4, type: 1, styles: { extraSmall: true, visual: true } },
      { blogId: 5, type: 1, styles: { extraSmall: true, visual: true } },
      { blogId: 6, type: 1, styles: { extraSmall: true, visual: true } },
      { blogId: 7, type: 2 },
      { blogId: 8, type: 2 },
   ],
}

function blogReducer(state = initState, action) {
   switch (action.type) {
      case '':
         return state

      default:
         return state
   }
}

export default blogReducer
