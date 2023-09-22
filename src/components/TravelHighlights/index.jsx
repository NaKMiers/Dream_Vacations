import Masonry from 'masonry-layout'
import React, { memo, useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import flickrImg1 from '../../assets/images/flickrImg1.jpg'
import flickrImg2 from '../../assets/images/flickrImg2.jpg'
import flickrImg3 from '../../assets/images/flickrImg3.jpg'
import flickrImg4 from '../../assets/images/flickrImg4.jpg'
import flickrImg5 from '../../assets/images/flickrImg5.jpg'
import flickrImg6 from '../../assets/images/flickrImg6.jpg'
import flickrImg7 from '../../assets/images/flickrImg7.jpg'
import flickrImg8 from '../../assets/images/flickrImg8.jpg'
import flickrImg9 from '../../assets/images/flickrImg9.jpg'
import welcomeBanner1 from '../../assets/images/welcomeBanner1.jpg'
import welcomeBanner2 from '../../assets/images/welcomeBanner2.png'
import welcomeBanner3 from '../../assets/images/welcomeBanner3.png'
import BlogType2 from '../BlogType2'
import SeparatorTitle from '../SeparatorTitle'
import styles from './style.module.scss'
import actions from '../../actions'

const flickrImages = [
   flickrImg1,
   flickrImg2,
   flickrImg3,
   flickrImg4,
   flickrImg5,
   flickrImg6,
   flickrImg7,
   flickrImg8,
   flickrImg9,
]

function TravelHighlights() {
   const { blogs, blogHighlights } = useSelector(state => state.blogs)
   const dispatch = useDispatch()
   const data = blogHighlights.map(id => blogs.find(blog => blog.id === id))

   const highLightPostsRef = useRef(null)
   const sideContent = useRef(null)

   // masonry layout
   useEffect(() => {
      new Masonry(highLightPostsRef.current, {
         itemSelector: '.grid-item',
         gutter: 0,
      })
   }, [])

   // review image
   const handleReviewImage = (image, flickrImages) => {
      dispatch(actions.reviewImage(image))
      dispatch(actions.reviewImages(flickrImages))
      dispatch(actions.play())
   }

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (highLightPostsRef.current && sideContent.current) {
         const postElements = [...highLightPostsRef.current.children]
         const sideElements = [...sideContent.current.children]

         // 1
         let delay = 0.2
         postElements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.style.animation = `floatUp 0.6s ease-in-out ${delay}s forwards`
               e.classList.add(styles.appeared)
               delay += 0.2
            }
         })

         // 2
         sideElements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.classList.add('floatUp')
               e.classList.add(styles.appeared)
            }
         })

         // remove event when all are appeared
         let countAppeared = 0
         postElements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         sideElements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (countAppeared === postElements.length + sideElements.length) {
            console.log('remove---TravelHighlights')
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
      <section className={styles.TravelHighlights}>
         <SeparatorTitle title='Travel Highlights' dark style={{ margin: '45px 0 1.1rem' }} />

         <div className={`${styles.container} container`}>
            <div className={`${styles.highLightPosts}`} ref={highLightPostsRef}>
               {data.map((blog, index) => (
                  <BlogType2
                     data={blog}
                     key={blog.id}
                     gridItem
                     tall={index % 2 === 0}
                     short={index % 2 !== 0}
                  />
               ))}
            </div>

            <div className={styles.sideContent} ref={sideContent}>
               {/* Text box */}
               <div className={styles.textBox}>
                  <h4>
                     <span>Take only memories,</span>
                     <br />
                     <span>Leave</span>
                     <span> Only Footprints.</span>
                  </h4>

                  <span>Evelyn Snyder</span>
               </div>

               {/* Recent Posts */}
               <h4 className={styles.title}>Recent Posts</h4>
               <div className={styles.recentPostWrap}>
                  <div className={styles.recentPostItem}>
                     <Link to='/blogs/1' className={styles.thumbnail}>
                        <img src={welcomeBanner1} alt='thumbnail' />
                     </Link>

                     <div className={styles.content}>
                        <Link to='/blogs/1' className={styles.label}>
                           Coral Bay Travel
                        </Link>
                        <p className={styles.date}>August 27, 2021</p>
                     </div>
                  </div>
                  <div className={styles.recentPostItem}>
                     <Link to='/blogs/1' className={styles.thumbnail}>
                        <img src={welcomeBanner2} alt='thumbnail' />
                     </Link>

                     <div className={styles.content}>
                        <Link to='/blogs/1' className={styles.label}>
                           Best Weekend
                        </Link>
                        <p className={styles.date}>August 27, 2021</p>
                     </div>
                  </div>
                  <div className={styles.recentPostItem}>
                     <Link to='/blogs/1' className={styles.thumbnail}>
                        <img src={welcomeBanner3} alt='thumbnail' />
                     </Link>

                     <div className={styles.content}>
                        <Link to='/blogs/1' className={styles.label}>
                           Flying Over
                        </Link>
                        <p className={styles.date}>August 27, 2021</p>
                     </div>
                  </div>
               </div>

               {/* Flickr Feed */}
               <h4 className={styles.title}>Flickr Feed</h4>
               <div className={styles.flickrFeedWrap}>
                  {flickrImages.map((image, index) => (
                     <div
                        className={styles.flickrItem}
                        key={index}
                        onClick={() => handleReviewImage(image, flickrImages)}
                     >
                        <img src={image} alt='flickr' />
                        <div className={styles.overlay} />
                     </div>
                  ))}
               </div>

               {/* Tags */}
               <h4 className={styles.title}>Tags</h4>
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
         </div>
      </section>
   )
}

export default memo(TravelHighlights)
