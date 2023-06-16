import React, { memo, useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import BlogGalleryItem from '../BlogGalleryItem'
import BlogQuote from '../BlogQuote'
import styles from './style.module.scss'

function BlogGallery() {
   const { blogGallery, blogs } = useSelector(state => state.blogs)
   const data = blogGallery.map(blog => {
      const datum = blogs.find(e => e.id === blog)
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
         console.log('remove---BlogGallery')
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
      <section className={styles.BlogGallery}>
         <div className={styles.container} ref={containerRef}>
            {data.map((blog, index) => {
               if (blog.type === 4) {
                  return <BlogGalleryItem data={blog} myArea={index === 0} key={blog.id} />
               } else if (blog.type === 3) {
                  return <BlogQuote data={blog} type2 key={blog.id} />
               } else {
                  return null
               }
            })}
         </div>
      </section>
   )
}

export default memo(BlogGallery)
