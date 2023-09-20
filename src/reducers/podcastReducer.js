import authorAvt1 from '../assets/images/authorAvt1.jpeg'
import podcast1 from '../assets/audios/letme.mp3'

const initState = {
   podcasts: [
      {
         id: 1,
         audio: podcast1,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'This Florida City Is the Best Place to Retire in the U.S., According to Experts',
         desc: 'Lorem ipsum dolor sit amet, consectetur loerm adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore…',
         date: 'November 23, 2020',
         createdAt: 1686735683583,
         comments: 2,
         likes: 0,
         categories: ['adventure', 'cruise'],
      },
      {
         id: 2,
         audio: podcast1,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'You Can Have Puppies and Prosecco Delivered to Your Room at This Denver Hotel',
         desc: 'Lorem ipsum dolor sit amet, consectetur loerm adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore…',
         date: 'November 23, 2020',
         createdAt: 1686735683583,
         comments: 2,
         likes: 0,
         categories: ['adventure', 'diving'],
      },
      {
         id: 3,
         audio: podcast1,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Another Tourist Was Attacked by a Bison in a National Park This Week',
         desc: 'Lorem ipsum dolor sit amet, consectetur loerm adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore…',
         date: 'November 23, 2020',
         createdAt: 1686735683583,
         comments: 2,
         likes: 0,
         categories: ['adventure', 'diving'],
      },
      {
         id: 4,
         audio: podcast1,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'How America Eats: Bringing Culinary Travel Inspiration Home',
         desc: 'Lorem ipsum dolor sit amet, consectetur loerm adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore…',
         date: 'November 23, 2020',
         createdAt: 1686735683583,
         comments: 2,
         likes: 0,
         categories: ['cruise'],
      },
      {
         id: 5,
         audio: podcast1,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Please Don’t Treat National Parks Like a Garbage Can',
         desc: 'Lorem ipsum dolor sit amet, consectetur loerm adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore…',
         date: 'November 23, 2020',
         createdAt: 1686735683583,
         comments: 2,
         likes: 0,
         categories: ['cruise'],
      },
      {
         id: 6,
         audio: podcast1,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: '67 Percent of People Don’t Use Enough Sunscreen, U.K. Study Says',
         desc: 'Lorem ipsum dolor sit amet, consectetur loerm adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore…',
         date: 'November 23, 2020',
         createdAt: 1686735683583,
         comments: 2,
         likes: 0,
         categories: ['cruise'],
      },
      {
         id: 7,
         audio: podcast1,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'You Can Have Puppies and Prosecco Delivered to Your Room at This Denver Hotel',
         desc: 'Lorem ipsum dolor sit amet, consectetur loerm adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore…',
         date: 'November 23, 2020',
         createdAt: 1686735683583,
         comments: 2,
         likes: 0,
         categories: ['diving'],
      },
      {
         id: 8,
         audio: podcast1,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'This Florida City Is the Best Place to Retire in the U.S., According to Experts',
         desc: 'Lorem ipsum dolor sit amet, consectetur loerm adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore…',
         date: 'November 23, 2020',
         createdAt: 1686735683583,
         comments: 2,
         likes: 0,
         categories: ['adventure'],
      },
      {
         id: 9,
         audio: podcast1,
         author: 'Scott Jackson',
         avatar: authorAvt1,
         title: 'Another Tourist Was Attacked by a Bison in a National Park This Week',
         desc: 'Lorem ipsum dolor sit amet, consectetur loerm adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore…',
         date: 'November 23, 2020',
         createdAt: 1686735683583,
         comments: 2,
         likes: 0,
         categories: ['adventure', 'cruise', 'diving'],
      },
   ],

   latestPodcasts: [1, 2, 3],
   podcastFeeds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9],
}

function podcastReducer(state = initState, action) {
   switch (action.type) {
      case '':
         return state

      default:
         return state
   }
}

export default podcastReducer
