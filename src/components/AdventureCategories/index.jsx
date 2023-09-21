import Masonry from 'masonry-layout'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import welcomeBanner1 from '../../assets/images/welcomeBanner1.jpg'
import welcomeBanner2 from '../../assets/images/welcomeBanner2.png'
import welcomeBanner3 from '../../assets/images/welcomeBanner3.png'
import BlogType2 from '../BlogType2'
import styles from './style.module.scss'

import { faEllipsis, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import facebook from '../../assets/icons/facebook-color.png'
import instagram from '../../assets/icons/instagram-color.png'
import linkedin from '../../assets/icons/linkedin-color.png'
import pinterest from '../../assets/icons/pinterest-color.png'
import twitter from '../../assets/icons/twitter-color.png'
import youtube from '../../assets/icons/youtube-color.png'
import advertiseBanner from '../../assets/images/advertiseBanner.png'

const categories = [
   'Active',
   'Adventure',
   'Argentina',
   'Beach',
   'Brazil',
   'Cassandra Lynn',
   'Cruise',
   'Diving',
   'Europe',
   'Food & Drink',
   'Herman Ledford',
   'Julianna Galanis',
   'Lake',
   'Latest Podcast',
   'Latest Video',
   'Life',
   'Lifestyle',
   'Mel Granville',
   'Mexico',
   'Nathan Matthews',
   'Nations',
   'Nature',
   'Ocean',
   'Podcast',
   'Recreation',
   'Reviews',
   'River',
   'Routes',
   'Sands',
   'Space',
   'Spring',
   'Sun',
   'Transport',
   'Travel',
   'Uncategorized',
   'Water',
   'Wave',
   'Winter',
   'World',
]

function AdventureCategories() {
   const { blogs, blogHighlights } = useSelector(state => state.blogs)
   let initialData = blogHighlights.map(id => blogs.find(blog => blog.id === id))

   // refs
   const filterBarRef = useRef(null)
   const highLightPostsRef = useRef(null)
   const sideContent = useRef(null)

   const [data, setData] = useState(initialData)
   // filter menu on mobile view
   const [openFilter, setOpenFilter] = useState(false)
   const [filter, setFilter] = useState('all')
   // support to clearAnimation
   const interval = useRef(undefined)

   // masonry layout
   useEffect(() => {
      new Masonry(highLightPostsRef.current, {
         itemSelector: '.grid-item',
         gutter: 0,
      })
   }, [data])

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (highLightPostsRef.current && sideContent.current && filterBarRef.current) {
         const postElements = [...highLightPostsRef.current.children]
         const sideElements = [...sideContent.current.children, filterBarRef.current]

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
            console.log('remove---AdventureCategories')
            window.removeEventListener('scroll', handleScroll)
         }
      }
   }, [])

   // appear animation on scroll
   useEffect(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   // clear animation appear
   const handleClearAnimation = useCallback(() => {
      if (highLightPostsRef.current) {
         const elements = [...highLightPostsRef.current.children]
         elements.forEach(e => {
            e.classList.remove(styles.appeared)
            e.style.animation = 'none'
            e.style.transform = 'none'
            e.opacity = 0
         })
      }
   }, [])

   // handle filter
   const handleFilter = useCallback(
      type => {
         clearInterval(interval.current)
         handleClearAnimation()
         // clear undefine animation delay
         interval.current = setInterval(() => {
            handleScroll()
         }, 300)

         switch (type) {
            case 'all':
               setData(initialData)
               setFilter(type)
               break

            default:
               console.log(initialData)
               const newData = initialData.filter(blog => {
                  console.log('blog: ', blog.categories, type)
                  return blog.categories.includes(type)
               })
               console.log(newData)
               setData(newData)
               setFilter(type)
         }
      },
      [handleClearAnimation, handleScroll, initialData]
   )

   return (
      <section className={styles.AdventureCategories}>
         <div className={`${styles.container} container`}>
            <div className={styles.mainContent}>
               <div className={styles.filterMenuBtn} onClick={() => setOpenFilter(!openFilter)}>
                  <FontAwesomeIcon icon={faEllipsis} />
               </div>
               <ul
                  className={`${styles.filterMenu} ${openFilter ? styles.show : ''}`}
                  onClick={() => setOpenFilter(!openFilter)}
               >
                  <li
                     className={`${filter === 'all' ? styles.active : ''}`}
                     onClick={() => filter !== 'all' && handleFilter('all')}
                  >
                     All
                  </li>
                  <li
                     className={`${filter === 'argentina' ? styles.active : ''}`}
                     onClick={() => filter !== 'argentina' && handleFilter('argentina')}
                  >
                     Argentina
                  </li>
                  <li
                     className={`${filter === 'brazil' ? styles.active : ''}`}
                     onClick={() => filter !== 'brazil' && handleFilter('brazil')}
                  >
                     Brazil
                  </li>
                  <li
                     className={`${filter === 'europe' ? styles.active : ''}`}
                     onClick={() => filter !== 'europe' && handleFilter('europe')}
                  >
                     Europe
                  </li>
                  <li
                     className={`${filter === 'mexico' ? styles.active : ''}`}
                     onClick={() => filter !== 'mexico' && handleFilter('mexico')}
                  >
                     Mexico
                  </li>
               </ul>

               <div className={styles.filterBar} ref={filterBarRef}>
                  <button
                     className={filter === 'all' ? styles.active : ''}
                     onClick={() => filter !== 'all' && handleFilter('all')}
                  >
                     All
                  </button>
                  <button
                     className={filter === 'argentina' ? styles.active : ''}
                     onClick={() => filter !== 'argentina' && handleFilter('argentina')}
                  >
                     Argentina
                  </button>
                  <button
                     className={filter === 'brazil' ? styles.active : ''}
                     onClick={() => filter !== 'brazil' && handleFilter('brazil')}
                  >
                     Brazil
                  </button>
                  <button
                     className={filter === 'europe' ? styles.active : ''}
                     onClick={() => filter !== 'europe' && handleFilter('europe')}
                  >
                     Europe
                  </button>
                  <button
                     className={filter === 'mexico' ? styles.active : ''}
                     onClick={() => filter !== 'mexico' && handleFilter('mexico')}
                  >
                     Mexico
                  </button>
               </div>

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
            </div>

            <div className={styles.sideContent} ref={sideContent}>
               {/* Search */}
               <div className={styles.searchWrap}>
                  <input className={styles.searchInput} type='text' />

                  <div className={styles.searchIcon}>
                     <FontAwesomeIcon icon={faSearch} />
                  </div>
               </div>

               {/* Advertise */}
               <h4 className={styles.title}>Advertise</h4>
               <div className={styles.advertiseBanner}>
                  <img src={advertiseBanner} alt='advertise-banner' />
               </div>

               {/* Categories */}
               <h4 className={styles.title}>Categories</h4>
               <ul className={styles.categoryList}>
                  {categories.map(category => (
                     <li key={category} className={styles.categoryItem}>
                        <a className={styles.categoryLink} href={`/blogs/categories/${category}`}>
                           {category}
                        </a>
                     </li>
                  ))}
               </ul>

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

               {/* Follow Us */}
               <h4 className={styles.title}>Follow Us</h4>
               <div className={styles.socialsWrap}>
                  <a
                     className={styles.socialItem}
                     href='https://www.facebook.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={facebook} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://www.linkedin.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={linkedin} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://twitter.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={twitter} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://www.instagram.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={instagram} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://www.pinterest.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={pinterest} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://www.youtube.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={youtube} alt='social' />
                  </a>
               </div>

               {/* Text Box Banner */}
               <div className={styles.textBox}>
                  <h4>
                     <span>Take only memories,</span>
                     <br />
                     <span>Leave</span>
                     <span> Only Footprints.</span>
                  </h4>

                  <span>Evelyn Snyder</span>
               </div>

               {/* Tags */}
               <h4 className={styles.title}>Hot Tags</h4>
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

export default memo(AdventureCategories)
