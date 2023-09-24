import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import blogBanner from '../../assets/images/blogBanner.jpg'
import BlogContent from '../../components/BlogContent'

function BlogPage() {
   return (
      <div className={styles.BlogPage}>
         <WelcomeBannerLite
            title='Coral Bay Travel'
            subTitle='«Travel is the healthiest addiction»'
            background={blogBanner}
         />

         <BlogContent />
      </div>
   )
}

export default memo(BlogPage)
