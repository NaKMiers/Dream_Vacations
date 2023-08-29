import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import categoryBanner3 from '../../assets/images/categoryBanner3.jpg'
import BlogCategory1 from '../../components/BlogCategory1'
import LatestVideo from '../../components/LatestVideo'

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
      </div>
   )
}

export default memo(TravelPage)
