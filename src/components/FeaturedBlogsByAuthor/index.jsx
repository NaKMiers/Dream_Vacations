import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback, useEffect, useRef } from 'react'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import pinterest from '../../assets/icons/pinterest.png'
import twitter from '../../assets/icons/twitter.png'
import youtube from '../../assets/icons/youtube.png'
import styles from './style.module.scss'

function FeaturedBlogsByAuthor({ data, reverse, style }) {
   const blogContentWrapRef = useRef(null)
   const moreBlogsWrapRef = useRef(null)
   const allBlogBtnWrapRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (blogContentWrapRef.current && moreBlogsWrapRef.current && allBlogBtnWrapRef.current) {
         const elements = [
            ...blogContentWrapRef.current.children,
            ...moreBlogsWrapRef.current.children,
            allBlogBtnWrapRef.current,
         ]

         // 1
         let delay = 0.2
         elements.forEach(e => {
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

         if (countAppeared === elements.length) {
            console.log('remove---FeaturedBlogsByAuthor')
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
      <section className={styles.FeaturedBlogsByAuthor} style={style}>
         <div className={`${styles.container} container`}>
            {/* TOP */}
            <div
               className={`${styles.blogContentWrap} ${reverse ? styles.reverse : ''}`}
               ref={blogContentWrapRef}
            >
               <div className={styles.blog}>
                  <div className={styles.thumbnail}>
                     <img src={data.main.image} alt='thumbnail' />
                     <div className={styles.overlay}>
                        <div className={styles.overlayBackground} />

                        <div className={styles.blogDesc}>
                           <p className={styles.desc}>{data.main.desc}</p>

                           <div className={styles.iconsWrap}>
                              <div className={styles.icon}>
                                 <FontAwesomeIcon icon={faShareAlt} />
                              </div>
                              <div className={styles.icon}>
                                 <FontAwesomeIcon icon={faCommentAlt} />
                              </div>
                              <span>{data.main.likes}</span>
                           </div>
                        </div>

                        <div className={styles.blogTitleWrap}>
                           <p className={styles.blogDate}>{data.main.date}</p>
                           <h3 className={styles.blogTitle}>{data.main.title}</h3>
                        </div>
                     </div>
                  </div>
               </div>

               <div className={styles.authorInfo}>
                  <div className={styles.avatar}>
                     <img src={data.main.avatar} alt='avatar' />
                  </div>

                  <h6 className={styles.name}>{data.main.author}</h6>

                  <p className={styles.role}>{data.main.role}</p>

                  <h2 className={styles.slogan}>{data.main.slogan}</h2>

                  <div className={styles.socialWrap}>
                     <a href='https://twitter.com' className={styles.socialIcon}>
                        <img src={twitter} alt='twitter' />
                     </a>
                     <a href='https://www.facebook.com' className={styles.socialIcon}>
                        <img src={facebook} alt='facebook' />
                     </a>
                     <a href='https://www.instagram.com' className={styles.socialIcon}>
                        <img src={instagram} alt='instagram' />
                     </a>
                     <a href='https://www.youtube.com' className={styles.socialIcon}>
                        <img src={youtube} alt='youtube' />
                     </a>
                     <a href='https://www.pinterest.com' className={styles.socialIcon}>
                        <img src={pinterest} alt='pinterest' />
                     </a>
                  </div>
               </div>
            </div>

            {/* BOTTOM */}
            <div className={styles.moreBlogsWrap} ref={moreBlogsWrapRef}>
               {data.subs.map(blog => (
                  <div className={styles.blog} key={blog.id}>
                     <div className={styles.thumbnail}>
                        <img src={blog.image} alt='thumbnail' />
                        <div className={styles.overlay}>
                           <div className={styles.overlayBackground} />

                           <div className={styles.blogDesc}>
                              <div className={styles.author}>
                                 <div className={styles.avatar}>
                                    <img src={blog.avatar} alt='avatar' />
                                 </div>
                                 <span>By {blog.author}</span>
                              </div>

                              <div className={styles.iconsWrap}>
                                 <div className={styles.icon}>
                                    <FontAwesomeIcon icon={faShareAlt} />
                                 </div>
                                 <div className={styles.icon}>
                                    <FontAwesomeIcon icon={faCommentAlt} />
                                 </div>
                                 <span>{blog.likes}</span>
                              </div>
                           </div>

                           <div className={styles.blogTitleWrap}>
                              <p className={styles.blogDate}>{blog.date}</p>
                              <h3 className={styles.blogTitle}>{blog.title}</h3>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className={styles.allBlogBtnWrap} ref={allBlogBtnWrapRef}>
               <button>All post by {data.main.author}</button>
            </div>
         </div>
      </section>
   )
}

export default FeaturedBlogsByAuthor
