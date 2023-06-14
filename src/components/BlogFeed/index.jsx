import React, { memo } from 'react'
import BlogType1 from '../BlogType1'
import styles from './style.module.scss'
import { useSelector } from 'react-redux'

function BlogFeed() {
   const { blogs, blogFeed } = useSelector(state => state.blogs)
   const data = blogFeed.map(blog => {
      const datum = blogs.find(e => e.id === blog.blogId)

      return { ...datum, ...blog }
   })

   // visual, small, extraSmall, noOverlayContent

   return (
      <section className={styles.BlogFeed}>
         <div className={`${styles.container} container`}>
            <BlogType1 data={data[2]} />
         </div>
      </section>
   )
}

export default memo(BlogFeed)
