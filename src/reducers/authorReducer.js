import authorAvt2 from '../assets/images/authorAvt2.jpg'
import authorAvt3 from '../assets/images/authorAvt3.jpg'
import authorAvt4 from '../assets/images/authorAvt4.jpg'
import authorAvt5 from '../assets/images/authorAvt5.jpg'
import authorAvt6 from '../assets/images/authorAvt6.jpg'
import authorAvt7 from '../assets/images/authorAvt7.jpg'
import authorAvt8 from '../assets/images/authorAvt8.jpg'
import authorAvt9 from '../assets/images/authorAvt9.jpg'
import authorAvt10 from '../assets/images/authorAvt10.jpg'
import authorAvt11 from '../assets/images/authorAvt11.jpg'
import authorAvt12 from '../assets/images/authorAvt12.jpg'
import authorAvt13 from '../assets/images/authorAvt13.jpg'

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

      {
         id: 7,
         name: 'Emerson Anderson',
         avatar: authorAvt2,
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed',
      },

      {
         id: 8,
         name: 'Herman Ledford',
         avatar: authorAvt10,
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed',
      },

      {
         id: 9,
         name: 'Kenneth Johnson',
         avatar: authorAvt11,
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed',
      },

      {
         id: 10,
         name: 'Annllela Sagra',
         avatar: authorAvt3,
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed',
      },

      {
         id: 11,
         name: 'Jackie Jackson',
         avatar: authorAvt12,
         desc: 'Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed',
      },

      {
         id: 12,
         name: 'Gordon Edwards',
         avatar: authorAvt13,
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
