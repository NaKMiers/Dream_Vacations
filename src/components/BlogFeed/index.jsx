import React, { memo, useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import BlogQuote from '../BlogQuote'
import BlogType1 from '../BlogType1'
import BlogType2 from '../BlogType2'
import styles from './style.module.scss'

function BlogFeed() {
   const { blogs, blogFeed } = useSelector(state => state.blogs)
   const data = blogFeed.map(blog => {
      const datum = blogs.find(e => e.id === blog.blogId)

      return { ...datum, ...blog }
   })

   const containerRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      const elements = [...containerRef.current.children]

      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('floatUp')
            e.classList.add(styles.appeared)
         }
      })

      // remove event when all are appeared
      let countAppeared = 0
      elements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })

      if (countAppeared === elements.length) {
         console.log('remove---BlogFeed')
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   // appear on scroll
   useEffect(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   return (
      <section className={styles.BlogFeed}>
         <div className={`${styles.container} container`} ref={containerRef}>
            {data.map(blog => {
               if (blog.type === 1) {
                  return <BlogType1 data={blog} key={blog.id} />
               }

               if (blog.type === 2) {
                  return <BlogType2 data={blog} key={blog.id} />
               }

               if (blog.type === 3) {
                  return <BlogQuote data={blog} key={blog.id} />
               }

               return null
            })}
         </div>
      </section>
   )
}

export default memo(BlogFeed)
