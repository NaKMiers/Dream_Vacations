import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import aboutBanner2 from '../../assets/images/aboutBanner2.jpg'
import AuthorInfo from '../../components/AuthorInfo'
import MoreBlogByAuthor from '../../components/MoreBlogByAuthor'
import MoreStories from '../../components/MoreStories'

function AuthorPage() {
   return (
      <div className={styles.AuthorPage}>
         <WelcomeBannerLite
            title='Gordon Edwards'
            subTitle='«Travel is the healthiest addiction»'
            background={aboutBanner2}
         />
         <AuthorInfo />
         <MoreBlogByAuthor />
         <MoreStories floating style={{ margin: '-292px auto 100px' }} />
      </div>
   )
}

export default memo(AuthorPage)
