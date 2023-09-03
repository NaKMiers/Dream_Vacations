import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import categoryBanner3 from '../../assets/images/categoryBanner3.jpg'
import BlogCategory1 from '../../components/BlogCategory1'
import LatestVideo from '../../components/LatestVideo'
import EditorPickedNews from '../../components/EditorPickedNews'
import MoreStories from '../../components/MoreStories'

// const newsData = {
//    bigThumb: '',

//    blogs: [
//       {
//          id: 1,
//          image: blogThumb4,
//          author: 'Scott Jackson',
//          avatar: authorAvt1,
//          title: 'Simple Blog Post',
//          desc: '«Travel is the healthiest addiction»',
//          date: 'July 2, 2023',
//          createdAt: 1686735683881,
//          comments: 2,
//          likes: 0,
//          styles: {},
//          type: 1,
//       },
//    ],
// }

function TravelPage() {
   return (
      <div className={styles.TravelPage}>
         <WelcomeBannerLite
            title='Travel'
            subTitle='«Travel is the healthiest addiction»'
            background={categoryBanner3}
         />
         <BlogCategory1 style={{ margin: '-160px 0 -125px' }} />
         <LatestVideo />
         <EditorPickedNews title='Most Popular Destinations' type2 />
         <EditorPickedNews noTitle reverse title='Most Popular Destinations' type2 />
         <MoreStories floating style={{ marginBottom: 100 }} />
      </div>
   )
}

export default memo(TravelPage)
