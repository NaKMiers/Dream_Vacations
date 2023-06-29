import blogThumb1 from '../assets/imgs/blogThumb1.png'
import blogThumb2 from '../assets/imgs/blogThumb2.jpg'
import blogThumb3 from '../assets/imgs/blogThumb3.jpg'
import blogThumb4 from '../assets/imgs/blogThumb4.jpg'
import blogThumb5 from '../assets/imgs/blogThumb5.jpg'
import blogThumb6 from '../assets/imgs/blogThumb6.jpg'
import blogThumb7 from '../assets/imgs/blogThumb7.jpg'
import blogThumb8 from '../assets/imgs/blogThumb8.jpg'
import blogThumb9 from '../assets/imgs/blogThumb9.jpg'
import blogThumb10 from '../assets/imgs/blogThumb10.jpg'
import blogThumb11 from '../assets/imgs/blogThumb11.jpg'
import blogThumb12 from '../assets/imgs/blogThumb12.jpg'
import blogThumb13 from '../assets/imgs/blogThumb13.jpg'
import blogThumb14 from '../assets/imgs/blogThumb14.jpg'
import blogThumb15 from '../assets/imgs/blogThumb15.jpg'
import blogThumb16 from '../assets/imgs/blogThumb16.jpg'
import blogThumb17 from '../assets/imgs/blogThumb17.jpg'
import blogThumb18 from '../assets/imgs/blogThumb18.jpg'
import blogThumb19 from '../assets/imgs/blogThumb19.jpg'
import blogThumb20 from '../assets/imgs/blogThumb20.jpg'
import blogThumb21 from '../assets/imgs/blogThumb21.jpg'
import blogThumb22 from '../assets/imgs/blogThumb22.jpg'
import blogThumb23 from '../assets/imgs/blogThumb23.jpg'
import blogThumb24 from '../assets/imgs/blogThumb24.jpg'
import blogThumb25 from '../assets/imgs/blogThumb25.jpg'
import blogThumb26 from '../assets/imgs/blogThumb26.jpg'
import blogThumb27 from '../assets/imgs/blogThumb27.jpg'
import blogThumb28 from '../assets/imgs/blogThumb28.jpg'
import blogThumb29 from '../assets/imgs/blogThumb29.jpg'
import blogThumb30 from '../assets/imgs/blogThumb30.jpg'
import authorAvt1 from '../assets/imgs/authorAvt1.jpeg'

import editorPickedImage1 from '../assets/imgs/editorPickedImage1.jpg'
import editorPickedImage2 from '../assets/imgs/editorPickedImage2.jpg'
import editorPickedImage3 from '../assets/imgs/editorPickedImage3.jpg'
import editorPickedImage4 from '../assets/imgs/editorPickedImage4.jpg'
import editorPickedImage5 from '../assets/imgs/editorPickedImage5.jpg'
import editorPickedImage6 from '../assets/imgs/editorPickedImage6.jpg'
import editorPickedImage7 from '../assets/imgs/editorPickedImage7.jpg'
import editorPickedImage8 from '../assets/imgs/editorPickedImage8.jpg'

const initState = {
   blogs: [
      {
         id: 1,
         image: blogThumb1,
         author: 'Scott Jackson',
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
         author: 'Scott Jackson',
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
         author: 'Scott Jackson',
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
         author: 'Scott Jackson',
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
         author: 'Scott Jackson',
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
         author: 'Scott Jackson',
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
         author: 'Scott Jackson',
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
      {
         id: 8,
         image: blogThumb8,
         author: 'Scott Jackson',
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

      {
         id: 9,
         image: blogThumb9,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Double Item Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua lorem ipsum. Dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas.',
         date: 'July 3, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 4,
      },
      {
         id: 10,
         image: blogThumb10,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua lorem ipsum. Dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas.',
         date: 'July 3, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 4,
      },
      {
         id: 11,
         image: blogThumb11,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua lorem ipsum. Dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas.',
         date: 'July 3, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 4,
      },
      {
         id: 12,
         image: blogThumb12,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua lorem ipsum. Dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas.',
         date: 'July 3, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 4,
      },
      {
         id: 13,
         image: blogThumb13,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua lorem ipsum. Dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas.',
         date: 'July 3, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 4,
      },
      {
         id: 14,
         image: blogThumb14,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua lorem ipsum. Dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas.',
         date: 'July 3, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 4,
      },
      {
         id: 15,
         image: blogThumb15,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua lorem ipsum. Dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas.',
         date: 'July 3, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 4,
      },
      {
         id: 16,
         image: blogThumb16,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua lorem ipsum. Dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas.',
         date: 'July 3, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 4,
      },
      {
         id: 17,
         image: blogThumb17,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua lorem ipsum. Dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas.',
         date: 'July 3, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 4,
      },
      {
         id: 18,
         image: blogThumb18,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua lorem ipsum. Dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas.',
         date: 'July 3, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 4,
      },
      {
         id: 19,
         image: blogThumb19,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua lorem ipsum. Dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas.',
         date: 'July 3, 2023',
         createAt: 1686735683881,
         comments: 2,
         styles: {},
         type: 4,
      },

      {
         id: 20,
         image: blogThumb20,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'You don’t have to be rich to travel well',
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
         date: 'November 30, 2020',
         createAt: 1686735683888,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 21,
         image: blogThumb21,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Travel is never a matter of money but of courage',
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
         date: 'November 30, 2020',
         createAt: 1686735683123,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 22,
         image: blogThumb22,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Then I realized adventures are the best way to learn',
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
         date: 'November 30, 2020',
         createAt: 1686735683777,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 23,
         image: blogThumb23,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
         date: 'October 26, 2020',
         createAt: 1686735682890,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 24,
         image: blogThumb24,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
         date: 'October 11, 2020',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      //
      {
         id: 25,
         image: editorPickedImage6,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Simple Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud',
         date: '20 Nov',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 26,
         image: editorPickedImage7,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Simple Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud',
         date: '20 Nov',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 27,
         image: editorPickedImage8,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Simple Blog Post',
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud',
         date: '20 Nov',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 28,
         image: editorPickedImage1,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Nathan Matthews',
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis ut aliquip exea',
         date: '20 Nov',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 29,
         image: editorPickedImage2,
         author: 'Julianna Galanis',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis ut aliquip exea',
         date: '20 Nov',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 30,
         image: editorPickedImage3,
         author: 'Mel Granville',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis ut aliquip exea',
         date: '20 Nov',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 31,
         image: editorPickedImage4,
         author: 'Cassandra Lynn',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis ut aliquip exea',
         date: '20 Nov',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 32,
         image: editorPickedImage5,
         author: 'Herman Ledford',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis ut aliquip exea',
         date: '20 Nov',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 33,
         image: blogThumb25,
         author: 'Small Blog Post',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: '«Travel is the healthiest addiction»',
         date: 'October 25, 2020',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 34,
         image: blogThumb26,
         author: 'Small Blog Post',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: '«Travel is the healthiest addiction»',
         date: 'October 24, 2020',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 35,
         image: blogThumb27,
         author: 'Small Blog Post',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: '«Travel is the healthiest addiction»',
         date: 'October 24, 2020',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 36,
         image: blogThumb28,
         author: 'Small Blog Post',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: '«Travel is the healthiest addiction»',
         date: 'October 20, 2020',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 37,
         image: blogThumb29,
         author: 'Small Blog Post',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: '«Travel is the healthiest addiction»',
         date: 'October 20, 2020',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 38,
         image: blogThumb30,
         author: 'Small Blog Post',
         avatar: authorAvt1,
         title: 'Medium Blog Post',
         desc: '«Travel is the healthiest addiction»',
         date: 'October 19, 2020',
         createAt: 1686735683583,
         comments: 2,
         styles: {},
         type: 1,
      },

      {
         id: 99,
         image: null,
         author: 'Scott Jackson',
         avatar: null,
         title: ['Life if a Journey.', 'Make', 'the Best of it.'],
         desc: '',
         createAt: 1686735683881,
         date: 'July 3, 2023',
         styles: {},
         type: 3,
         comments: 0,
         likes: 0,
      },
      {
         id: 98,
         image: null,
         author: 'Lao Tzu, Chinese philosopher',
         avatar: null,
         title: ['A journey is Best Measured.', 'in Friend,', 'Rather Than Miles'],
         desc: '',
         createAt: 1686735683881,
         date: 'July 3, 2023',
         styles: {},
         type: 3,
         comments: 0,
         likes: 0,
      },
   ],

   blogFeed: [
      { blogId: 1, type: 1, styles: {} },
      { blogId: 2, type: 1, styles: { small: true, noOverlayContent: true } },
      { blogId: 3, type: 1, styles: { small: true, visual: true } },
      { blogId: 4, type: 1, styles: { extraSmall: true, visual: true } },
      { blogId: 5, type: 1, styles: { extraSmall: true, visual: true } },
      { blogId: 99, type: 3 },
      { blogId: 6, type: 1, styles: { extraSmall: true, visual: true } },
      { blogId: 7, type: 2 },
      { blogId: 8, type: 2 },
   ],

   blogGallery: [9, 10, 11, 12, 13, 98, 14, 15, 16, 17, 18, 19],

   recentPosts: [20, 21, 22, 23, 24],

   editorPinkedNews: [25, 26, 27, 28, 29, 30, 31, 32],

   moreStories: [25, 26, 27, 4, 5, 19, 6, 12, 33, 34, 13, 35, 36, 37, 38],
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
