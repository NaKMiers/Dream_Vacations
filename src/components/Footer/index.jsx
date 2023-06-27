import { faChevronRight, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logoFooter from '../../assets/imgs/logo-footer.png'
import twitter from '../../assets/imgs/twitter-blue.png'
import styles from './style.module.scss'
// import 'masonry-layout'

function Footer() {
   const container = useRef(null)
   const item1 = useRef(null)
   const item2 = useRef(null)
   const item3 = useRef(null)
   const item4 = useRef(null)
   const item5 = useRef(null)
   const item6 = useRef(null)

   const handleResponsiveMasonry = useCallback(() => {
      const width = window.innerWidth

      const h1 = item1.current.offsetHeight
      const h2 = item2.current.offsetHeight
      const h3 = item3.current.offsetHeight
      const h4 = item4.current.offsetHeight
      const h5 = item5.current.offsetHeight
      const h6 = item6.current.offsetHeight

      if (width > 980) {
         // pc
         item2.current.style.top = 0
         item2.current.style.left = 25 * 1 + '%'

         item3.current.style.top = 0
         item3.current.style.left = 25 * 2 + '%'

         item4.current.style.top = 0
         item4.current.style.left = 25 * 3 + '%'

         item5.current.style.top = h1 + 42 + 'px'
         item5.current.style.left = 0

         item6.current.style.top = h2 + 42 + 'px'
         item6.current.style.left = 25 * 1 + '%'

         container.current.style.height = Math.max(h1, h2, h3, h4, h5, h1 + h5 + 84, h2 + h6 + 84) + 'px'
      } else if (width <= 980 && width > 768) {
         // tablet
         item2.current.style.top = 0
         item2.current.style.left = '50%'

         item3.current.style.top = h1 + 42 + 'px'
         item3.current.style.left = 0

         item4.current.style.top = h2 + 42 + 'px'
         item4.current.style.left = '50%'

         item5.current.style.top = h1 + 42 + h3 + 42 + 'px'
         item5.current.style.left = 0

         item6.current.style.top = h2 + 42 + h4 + 42 + 'px'
         item6.current.style.left = '50%'

         container.current.style.height = Math.max(h1 + h3 + h5 + 42 * 3, h2 + h4 + h6 + 42 * 3) + 'px'
      } else if (width <= 768) {
         // mobile
         item2.current.style.left = 'unset'
         item2.current.style.top = 'unset'

         item3.current.style.top = 'unset'
         item3.current.style.left = 'unset'

         item4.current.style.top = 'unset'
         item4.current.style.left = 'unset'

         item5.current.style.top = 'unset'
         item5.current.style.left = 'unset'

         item6.current.style.top = 'unset'
         item6.current.style.left = 'unset'

         container.current.style.height = 'auto'
      }
   }, [])

   useEffect(() => {
      handleResponsiveMasonry()
      window.addEventListener('resize', handleResponsiveMasonry)
      return () => {
         window.removeEventListener('resize', handleResponsiveMasonry)
      }
   }, [handleResponsiveMasonry])

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      const elements = [...container.current.children]

      let delay = 0.2
      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.style.animation = `floatUp 0.6s ease-in-out ${delay}s forwards`
            e.classList.add(styles.appeared)
            delay += 0.15
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
         console.log('remove---Footer')
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
      <footer className={styles.Footer}>
         <div className={`${styles.container} container`} ref={container}>
            <div className={`${styles.item} ${styles.item1}`} ref={item1}>
               <div className={styles.logo}>
                  <img src={logoFooter} alt='logo' />
               </div>

               <p className={styles.desc}>
                  Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                  quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                  sed odio sit amet vulputate cursus a sit amet.
               </p>
            </div>

            <div className={`${styles.item} ${styles.item2}`} ref={item2}>
               <h3 className={styles.title}>Useful links</h3>

               <ul className={styles.features}>
                  <li>General Information For Users</li>
                  <li>Interactive Fairy Tales</li>
                  <li>Official Storybook Maker Website</li>
                  <li>Everyday Mathematics Links</li>
                  <li>Basic Knowledge and Experience</li>
                  <li>Research Activities Programm</li>
               </ul>
            </div>

            <div className={`${styles.item} ${styles.item3}`} ref={item3}>
               <h3 className={styles.title}>Twitter Feed</h3>

               <div className={styles.tweetWrap}>
                  <div className={styles.tweetItem}>
                     <div className={styles.icon}>
                        <img src={twitter} alt='icon' />
                        <span>2 years ago</span>
                     </div>

                     <p className={styles.content}>
                        #WordPress redirect best practices to maximize #SEO and #pagespeed. Take a look
                        at the detailed analysis of the imp…{' '}
                        <a className={styles.link} href='/' target='_blank' rel='noreferrer'>
                           https://t.co/Ew4F9rvx1t
                        </a>
                     </p>
                  </div>

                  <div className={styles.tweetItem}>
                     <div className={styles.icon}>
                        <img src={twitter} alt='icon' />
                        <span>2 years ago</span>
                     </div>

                     <p className={styles.content}>
                        How to duplicate pages, posts, products etc. in #WordPress ? Check this useful
                        tool{' '}
                        <a className={styles.link} href='/' target='_blank' rel='noreferrer'>
                           https://t.co/Bu5H0jRrTh
                        </a>
                     </p>
                  </div>

                  <div className={styles.tweetItem}>
                     <div className={styles.icon}>
                        <img src={twitter} alt='icon' />
                        <span>2 years ago</span>
                     </div>

                     <p className={styles.content}>
                        Want to allow your customers to book an appointment directly from your #WordPress
                        site? Check this 6 nice #plugins…{' '}
                        <a className={styles.link} href='/' target='_blank' rel='noreferrer'>
                           https://t.co/zG3iMhewA5
                        </a>
                     </p>
                  </div>
               </div>
            </div>

            <div className={`${styles.item} ${styles.item4}`} ref={item4}>
               <h3 className={styles.title}>Recent Comments</h3>

               <div className={styles.recentCommentWrap}>
                  <div className={styles.recentCommentItem}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCommentDots} />
                     </div>

                     <p className={styles.authorLink}>
                        <span>Jessica Jane</span> on{' '}
                        <Link className={styles.link} to='/blog/1'>
                           Best Trip
                        </Link>
                     </p>
                  </div>
                  <div className={styles.recentCommentItem}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCommentDots} />
                     </div>

                     <p className={styles.authorLink}>
                        <span>Lisa Emerson</span> on{' '}
                        <Link className={styles.link} to='/blog/1'>
                           Best Trip
                        </Link>
                     </p>
                  </div>
                  <div className={styles.recentCommentItem}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCommentDots} />
                     </div>

                     <p className={styles.authorLink}>
                        <span>Jessica Jane</span> on{' '}
                        <Link className={styles.link} to='/blog/1'>
                           Best Trip
                        </Link>
                     </p>
                  </div>
                  <div className={styles.recentCommentItem}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCommentDots} />
                     </div>

                     <p className={styles.authorLink}>
                        <span>Lisa Emerson</span> on{' '}
                        <Link className={styles.link} to='/blog/1'>
                           Best Trip
                        </Link>
                     </p>
                  </div>
               </div>
            </div>

            <div className={`${styles.item} ${styles.item5}`} ref={item5}>
               <h3 className={styles.title}>Newsletter</h3>

               <p className={styles.desc}>
                  Subscribe to our MailChimp newsletter and stay up to date with all events coming
                  straight in your mailbox:
               </p>

               <form className={styles.inputWrap}>
                  <input
                     className={styles.input}
                     type='email'
                     name='email'
                     placeholder='Your email address'
                     required
                  />

                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faChevronRight} />
                  </div>
               </form>

               <div className={styles.smallText}>* Personal data will be encrypted</div>
            </div>

            <div className={`${styles.item} ${styles.item6}`} ref={item6}>
               <h3 className={styles.title}>Tags</h3>

               <div className={styles.tagWrap}>
                  <div className={styles.tagItem}>Agency</div>
                  <div className={styles.tagItem}>Design</div>
                  <div className={styles.tagItem}>Fy</div>
                  <div className={styles.tagItem}>Holiday</div>
                  <div className={styles.tagItem}>Lifestyle</div>
                  <div className={styles.tagItem}>Media</div>
                  <div className={styles.tagItem}>Nature</div>
                  <div className={styles.tagItem}>News</div>
                  <div className={styles.tagItem}>People</div>
                  <div className={styles.tagItem}>Photo</div>
                  <div className={styles.tagItem}>Sea</div>
                  <div className={styles.tagItem}>Sun</div>
                  <div className={styles.tagItem}>Travel</div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default memo(Footer)
