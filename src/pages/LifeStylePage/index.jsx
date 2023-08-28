import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import BlogFeed from '../../components/BlogFeed'
import LatestPodcast from '../../components/LatestPodcast'
import MoreStories from '../../components/MoreStories'
import categoryBanner2 from '../../assets/images/categoryBanner2.jpg'

function LifeStylePage() {
   return (
      <div className={styles.LifeStylePage}>
         <WelcomeBannerLite
            title='Lifestyle'
            subTitle='«Travel is the healthiest addiction»'
            background={categoryBanner2}
         />
         <BlogFeed blogFeedType2 style={{ margin: '-158px 0 -125px' }} />
         <LatestPodcast />
         <MoreStories floating style={{ margin: '-120px auto 100px' }} />
      </div>
   )
}

export default memo(LifeStylePage)
