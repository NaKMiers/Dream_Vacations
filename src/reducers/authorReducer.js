import authorAvt4 from '../assets/imgs/authorAvt4.jpg'
import authorAvt5 from '../assets/imgs/authorAvt5.jpg'
import authorAvt6 from '../assets/imgs/authorAvt6.jpg'
import authorAvt7 from '../assets/imgs/authorAvt7.jpg'
import authorAvt8 from '../assets/imgs/authorAvt8.jpg'
import authorAvt9 from '../assets/imgs/authorAvt9.jpg'

const initState = {
   authors: [
      {
         id: 1,
         name: 'Herman Ledford',
         avatar: authorAvt4,
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed',
      },
      {
         id: 2,
         name: 'Melany Granville',
         avatar: authorAvt5,
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed',
      },
      {
         id: 3,
         name: 'Gordon Edwards',
         avatar: authorAvt6,
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed',
      },
      {
         id: 4,
         name: 'Ivan Robinson',
         avatar: authorAvt7,
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed',
      },
      {
         id: 5,
         name: 'Cassandra Lynn',
         avatar: authorAvt8,
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed',
      },
      {
         id: 6,
         name: 'Scott Morrison',
         avatar: authorAvt9,
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed',
      },
   ],

   featuredAuthors: [1, 2, 3, 4, 5, 6],
}

function authorReducer(state = initState, action) {
   switch (action.type) {
      case '':
         return state

      default:
         return state
   }
}

export default authorReducer
