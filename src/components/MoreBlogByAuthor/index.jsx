import React, { memo, useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import moreBlogByAuthorBackground from '../../assets/imgs/moreBlogByAuthorBackground.jpg'
import BlogType2 from '../BlogType2'
import BlogQuote from '../BlogQuote'
import SeparatorTitle from '../SeparatorTitle'
import styles from './style.module.scss'
import Masonry from 'masonry-layout'
import authorSignature from '../../assets/imgs/authorSignature.png'

function MoreBlogByAuthor() {
   const { blogs, moreBlogsByAuthor } = useSelector(state => state.blogs)
   const data = moreBlogsByAuthor.map(id => blogs.find(blog => blog.id === id))

   const containerRef = useRef(null)
   const blogPostsRef = useRef(null)

   // masonry layout
   useEffect(() => {
      new Masonry(blogPostsRef.current, {
         itemSelector: '.grid-item',
         gutter: 0,
      })
   }, [])

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (containerRef.current && blogPostsRef.current) {
         const elements = [...containerRef.current.children]
         const blogElements = [...blogPostsRef.current.children]

         // 1
         elements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.classList.add('floatUp')
               e.classList.add(styles.appeared)
            }
         })

         // 2
         let delay = 0.2
         blogElements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.style.animation = `floatUp 0.6s ease-in-out ${delay}s forwards`
               e.classList.add(styles.appeared)
               delay += 0.2
            }
         })

         // remove event when all are appeared
         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         blogElements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (countAppeared === elements.length + blogElements.length) {
            console.log('remove---MoreBlogByAuthor')
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
      <section
         className={styles.MoreBlogByAuthor}
         style={{ background: `url(${moreBlogByAuthorBackground}) no-repeat center / cover` }}
      >
         <SeparatorTitle title='Articles by Gordon Edwards' />

         <div className={`${styles.container} container`} ref={containerRef}>
            <div className={styles.blogPosts} ref={blogPostsRef}>
               {data.map((blog, index) =>
                  blog.type === 3 ? (
                     <BlogQuote
                        data={blog}
                        type2
                        byAuthor
                        key={blog.id}
                        gridItem
                        style={{ width: '25%' }}
                     />
                  ) : (
                     <BlogType2
                        data={blog}
                        key={blog.id}
                        gridItem
                        byAuthor
                        tall={index % 2 === 0}
                        short={index % 2 !== 0}
                        style={{ width: '25%' }}
                     />
                  )
               )}
            </div>

            <div className={styles.paragraph}>
               <p>
                  …Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!
               </p>
            </div>

            <div className={styles.signature}>
               <img src={authorSignature} alt='signature' />
            </div>
         </div>
      </section>
   )
}

export default memo(MoreBlogByAuthor)
