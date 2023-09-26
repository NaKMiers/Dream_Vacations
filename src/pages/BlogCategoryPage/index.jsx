import React, { memo } from 'react'
import styles from './style.module.scss'
import { useParams } from 'react-router-dom'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import categoryBanner3 from '../../assets/images/categoryBanner3.jpg'
import CategoryPosts from '../../components/CategoryPosts'

function BlogCategoryPage() {
   const { id } = useParams()

   return (
      <div className={styles.BlogCategoryPage}>
         <WelcomeBannerLite
            title={id.charAt(0).toUpperCase() + id.slice(1)}
            subTitle='«Travel is the healthiest addiction»'
            background={categoryBanner3}
         />

         <CategoryPosts id={id} />
      </div>
   )
}

export default memo(BlogCategoryPage)
