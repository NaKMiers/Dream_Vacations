import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBanner from '../../components/WelcomeBanner'
import BlogFeed from '../../components/BlogFeed'
import TopCategories from '../../components/TopCategories'
import OurAbout from '../../components/OurAbout'
import BlogGallery from '../../components/BlogGallery'

function HomePage() {
   return (
      <div className={styles.HomePage}>
         <WelcomeBanner />
         <BlogFeed />
         <TopCategories />
         <OurAbout />
         <BlogGallery />
      </div>
   )
}

export default memo(HomePage)
