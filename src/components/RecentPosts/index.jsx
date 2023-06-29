import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import BlogType3 from '../BlogType3'
import SeparatorTitle from '../SeparatorTitle'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import banner from '../../assets/imgs/banner.png'
import facebook from '../../assets/imgs/facebook-color.png'
import linkedin from '../../assets/imgs/linkedin-color.png'
import twitter from '../../assets/imgs/twitter-color.png'
import instagram from '../../assets/imgs/instagram-color.png'
import pinterest from '../../assets/imgs/pinterest-color.png'
import youtube from '../../assets/imgs/youtube-color.png'
import { Link } from 'react-router-dom'
import MoreStories from '../MoreStories'

function RecentPosts() {
   const { blogs, recentPosts } = useSelector(state => state.blogs)
   const [page, setPage] = useState(1)

   const data = recentPosts
      .map(id => {
         return blogs.find(blog => blog.id === id)
      })
      .slice(3 * page - 3, 3 * page)

   const pageNumber = []
   for (let i = 1; i <= Math.ceil(recentPosts.length / 3); i++) {
      pageNumber.push(i)
   }

   const postWrapRef = useRef(null)
   const sideContentRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      const elements = [...postWrapRef.current.children, ...sideContentRef.current.children]

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
         console.log('remove---RecentPosts')
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
   }, [handleScroll, page])

   return (
      <section className={styles.RecentPosts}>
         <SeparatorTitle title='Recent Posts' dark style={{ marginBottom: 50, paddingTop: 50 }} />

         <div className={`${styles.container} container`}>
            <div className={styles.postWrap} ref={postWrapRef}>
               {data.map(post => (
                  <BlogType3 data={post} key={post.id} />
               ))}

               <div className={styles.pagination}>
                  {page !== 1 && (
                     <div className={styles.pageBtn} onClick={() => setPage(page - 1)}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                     </div>
                  )}

                  {pageNumber.map(value => (
                     <div
                        className={`${styles.pageBtn} ${page === value ? styles.active : ''}`}
                        key={value}
                        onClick={() => setPage(value)}
                     >
                        {value}
                     </div>
                  ))}

                  {page !== Math.ceil(recentPosts.length / 3) && (
                     <div className={styles.pageBtn} onClick={() => setPage(page + 1)}>
                        <FontAwesomeIcon icon={faChevronRight} />
                     </div>
                  )}
               </div>
            </div>

            <div className={styles.sideContent} ref={sideContentRef}>
               <div className={styles.search}>
                  <input className={styles.input} type='text' />

                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faSearch} />
                  </div>
               </div>

               <div className={styles.banner}>
                  <img src={banner} alt='banner' />
               </div>

               <h4 className={styles.sideTitle}>Newsletter</h4>

               <div className={styles.formFiled}>
                  <p>
                     Subscribe to our MailChimp newsletter and stay up to date with all events coming
                     straight in your mailbox:
                  </p>

                  <form className={styles.form}>
                     <input className={styles.input} type='text' placeholder='Your Email Address' />

                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faChevronRight} />
                     </div>
                  </form>

                  <p>* Personal data will be encrypted</p>
               </div>

               <h4 className={styles.sideTitle}>Follow Us</h4>

               <div className={styles.socialWrap}>
                  <a className={styles.socialItem} href='/' target='_blank' rel='noreferrer'>
                     <img src={facebook} alt='social' />
                  </a>
                  <a className={styles.socialItem} href='/' target='_blank' rel='noreferrer'>
                     <img src={linkedin} alt='social' />
                  </a>
                  <a className={styles.socialItem} href='/' target='_blank' rel='noreferrer'>
                     <img src={twitter} alt='social' />
                  </a>
                  <a className={styles.socialItem} href='/' target='_blank' rel='noreferrer'>
                     <img src={instagram} alt='social' />
                  </a>
                  <a className={styles.socialItem} href='/' target='_blank' rel='noreferrer'>
                     <img src={pinterest} alt='social' />
                  </a>
                  <a className={styles.socialItem} href='/' target='_blank' rel='noreferrer'>
                     <img src={youtube} alt='social' />
                  </a>
               </div>

               <h4 className={styles.sideTitle}>Tags</h4>

               <div className={styles.tagWrap}>
                  <Link to='/blogs/categories/1' className={styles.tagItem}>
                     Agency
                  </Link>
                  <Link to='/blogs/categories/1' className={styles.tagItem}>
                     Design
                  </Link>
                  <Link to='/blogs/categories/1' className={styles.tagItem}>
                     Fy
                  </Link>
                  <Link to='/blogs/categories/1' className={styles.tagItem}>
                     Holiday
                  </Link>
                  <Link to='/blogs/categories/1' className={styles.tagItem}>
                     Lifestyle
                  </Link>
                  <Link to='/blogs/categories/1' className={styles.tagItem}>
                     Media
                  </Link>
                  <Link to='/blogs/categories/1' className={styles.tagItem}>
                     Nature
                  </Link>
                  <Link to='/blogs/categories/1' className={styles.tagItem}>
                     News
                  </Link>
                  <Link to='/blogs/categories/1' className={styles.tagItem}>
                     People
                  </Link>
                  <Link to='/blogs/categories/1' className={styles.tagItem}>
                     Photo
                  </Link>
                  <Link to='/blogs/categories/1' className={styles.tagItem}>
                     Sea
                  </Link>
                  <Link to='/blogs/categories/1' className={styles.tagItem}>
                     Sun
                  </Link>
                  <Link to='/blogs/categories/1' className={styles.tagItem}>
                     Travel
                  </Link>
               </div>
            </div>

            <MoreStories />
         </div>
      </section>
   )
}

export default memo(RecentPosts)
