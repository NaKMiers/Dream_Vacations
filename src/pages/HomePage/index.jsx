import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBanner from '../../components/WelcomeBanner'
import BlogFeed from '../../components/BlogFeed'
import TopCategories from '../../components/TopCategories'

function HomePage() {
   return (
      <div className={styles.HomePage}>
         <WelcomeBanner />
         <BlogFeed />
         <TopCategories />
      </div>
   )
}

export default memo(HomePage)
