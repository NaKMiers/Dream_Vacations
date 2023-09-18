import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import contributeBanner from '../../assets/images/contributeBanner.jpg'
import FeaturedBlogsByAuthor from '../../components/FeaturedBlogsByAuthor'
import TopCategories from '../../components/TopCategories'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import styles from './style.module.scss'

function ContributorsPage() {
   const { blogs, featuredBlogsByAuthor } = useSelector(state => state.blogs)
   const data = featuredBlogsByAuthor.map(elm => {
      return {
         main: blogs.find(blog => blog.id === elm.main),
         subs: elm.subs.map(id => blogs.find(blog => blog.id === id)),
      }
   })

   return (
      <div className={styles.ContributorsPage}>
         <WelcomeBannerLite
            title='Contributors'
            subTitle='«Travel is the healthiest addiction»'
            background={contributeBanner}
         />

         <FeaturedBlogsByAuthor data={data[0]} style={{ marginBottom: 240 }} />
         <FeaturedBlogsByAuthor data={data[1]} reverse style={{ marginBottom: -92 }} />

         <TopCategories style={{ paddingBottom: 202 }} />

         <FeaturedBlogsByAuthor data={data[2]} style={{ marginTop: -92, marginBottom: 240 }} />
         <FeaturedBlogsByAuthor data={data[3]} reverse style={{ marginBottom: 240 }} />
         <FeaturedBlogsByAuthor data={data[4]} style={{ marginBottom: 80 }} />
      </div>
   )
}

export default memo(ContributorsPage)
