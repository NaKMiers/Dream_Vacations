import Masonry from 'masonry-layout'
import React, { memo, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import flickrImg1 from '../../assets/imgs/flickrImg1.jpg'
import flickrImg2 from '../../assets/imgs/flickrImg2.jpg'
import flickrImg3 from '../../assets/imgs/flickrImg3.jpg'
import flickrImg4 from '../../assets/imgs/flickrImg4.jpg'
import flickrImg5 from '../../assets/imgs/flickrImg5.jpg'
import flickrImg6 from '../../assets/imgs/flickrImg6.jpg'
import flickrImg7 from '../../assets/imgs/flickrImg7.jpg'
import flickrImg8 from '../../assets/imgs/flickrImg8.jpg'
import flickrImg9 from '../../assets/imgs/flickrImg9.jpg'
import welcomeBanner1 from '../../assets/imgs/welcomeBanner1.jpg'
import welcomeBanner2 from '../../assets/imgs/welcomeBanner2.png'
import welcomeBanner3 from '../../assets/imgs/welcomeBanner3.png'
import BlogType2 from '../BlogType2'
import SeparatorTitle from '../SeparatorTitle'
import styles from './style.module.scss'

function TravelHighlights() {
   const { blogs, blogHighlights } = useSelector(state => state.blogs)
   const data = blogHighlights.map(id => blogs.find(blog => blog.id === id))

   const highLightPostsRef = useRef(null)

   // masonry layout
   useEffect(() => {
      new Masonry(highLightPostsRef.current, {
         itemSelector: '.grid-item',
         gutter: 0,
      })
   }, [])

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

            <div className={styles.sideContent}>
               <div className={styles.textBox}>
                  <h4>
                     <span>Take only memories,</span>
                     <br />
                     <span>Leave</span>
                     <span> Only Footprints.</span>
                  </h4>

                  <span>Evelyn Snyder</span>
               </div>

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

               <h4 className={styles.title}>Flickr Feed</h4>
               <div className={styles.flickrFeedWrap}>
                  <div className={styles.flickrItem}>
                     <img src={flickrImg1} alt='flickr' />
                     <div className={styles.overlay} />
                  </div>
                  <div className={styles.flickrItem}>
                     <img src={flickrImg2} alt='flickr' />
                     <div className={styles.overlay} />
                  </div>
                  <div className={styles.flickrItem}>
                     <img src={flickrImg3} alt='flickr' />
                     <div className={styles.overlay} />
                  </div>
                  <div className={styles.flickrItem}>
                     <img src={flickrImg4} alt='flickr' />
                     <div className={styles.overlay} />
                  </div>
                  <div className={styles.flickrItem}>
                     <img src={flickrImg5} alt='flickr' />
                     <div className={styles.overlay} />
                  </div>
                  <div className={styles.flickrItem}>
                     <img src={flickrImg6} alt='flickr' />
                     <div className={styles.overlay} />
                  </div>
                  <div className={styles.flickrItem}>
                     <img src={flickrImg7} alt='flickr' />
                     <div className={styles.overlay} />
                  </div>
                  <div className={styles.flickrItem}>
                     <img src={flickrImg8} alt='flickr' />
                     <div className={styles.overlay} />
                  </div>
                  <div className={styles.flickrItem}>
                     <img src={flickrImg9} alt='flickr' />
                     <div className={styles.overlay} />
                  </div>
               </div>

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
