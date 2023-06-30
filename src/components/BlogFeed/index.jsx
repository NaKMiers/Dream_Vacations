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

   const container1Ref = useRef(null)
   const container2Ref = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (container1Ref.current && container2Ref.current) {
         const elements = [...container1Ref.current.children, ...container2Ref.current.children]

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
         <div className={`${styles.container} container`} ref={container1Ref}>
            <div className={styles.container1}>
               {data.map((blog, index) => {
                  if (blog.type === 1) {
                     return <BlogType1 myArea={index === 0} data={blog} key={blog.id} />
                  } else if (blog.type === 3) {
                     return <BlogQuote data={blog} key={blog.id} />
                  } else {
                     return null
                  }
               })}
            </div>

            <div className={styles.container2} ref={container2Ref}>
               {data.map(blog => blog.type === 2 && <BlogType2 data={blog} key={blog.id} />)}
            </div>
         </div>
      </section>
   )
}

export default memo(BlogFeed)
