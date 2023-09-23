import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import advertiseBanner from '../../assets/images/advertiseBanner.png'
import PodcastItem from '../../components/LatestPodcast/PodcastItem'
import SeparatorTitle from '../SeparatorTitle'
import styles from './style.module.scss'

import facebook from '../../assets/icons/facebook-color.png'
import instagram from '../../assets/icons/instagram-color.png'
import linkedin from '../../assets/icons/linkedin-color.png'
import pinterest from '../../assets/icons/pinterest-color.png'
import twitter from '../../assets/icons/twitter-color.png'
import youtube from '../../assets/icons/youtube-color.png'

const tags = [
   'Agency',
   'Design',
   'Fly',
   'Holiday',
   'Lifestyle',
   'Media',
   'Nature',
   'News',
   'People',
   'Photo',
   'Sea',
   'Sun',
   'Travel',
]

function PopularPodcasts() {
   const { podcasts, popularPodcasts } = useSelector(state => state.podcasts)
   const initialData = popularPodcasts.map(id => podcasts.find(podcast => podcast.id === id))

   const [page, setPage] = useState(1)
   const itemPerPage = 3
   const [numberOfPage] = useState(Math.ceil(initialData.length / itemPerPage))
   const [data, setData] = useState(initialData.slice((page - 1) * itemPerPage, page * itemPerPage))

   // refs
   const podcastsWrapRef = useRef(null)
   const sideContent = useRef(null)
   const interval = useRef(undefined)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (podcastsWrapRef.current && sideContent.current) {
         const postElements = [...podcastsWrapRef.current.children]
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
            console.log('remove---PopularPodcasts')
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

   // clear animation appear
   const handleClearAnimation = useCallback(() => {
      if (podcastsWrapRef.current) {
         const elements = [...podcastsWrapRef.current.children]
         elements.slice(0, elements.length - 1).forEach(e => {
            e.classList.remove(styles.appeared)
            e.style.animation = 'none'
            e.style.transform = 'none'
            e.opacity = 0
         })
      }
   }, [])

   // handle change page
   const handleChangePage = useCallback(
      page => {
         clearInterval(interval.current)
         handleClearAnimation()
         // clear undefine animation delay
         interval.current = setInterval(() => {
            handleScroll()
         }, 300)

         const dataPage = initialData.slice((page - 1) * itemPerPage, page * itemPerPage)
         setData(dataPage)
         setPage(page)
      },
      [initialData, handleClearAnimation, handleScroll]
   )

   return (
      <section className={styles.PopularPodcasts}>
         <SeparatorTitle title='Popular Podcast' dark style={{ margin: '32px 0 50px 0' }} />

         <div className={`${styles.container} container`}>
            <div className={`${styles.podcastsWrap}`} ref={podcastsWrapRef}>
               {data.map(podcast => (
                  <PodcastItem data={podcast} type={4} key={podcast.id} />
               ))}

               {numberOfPage > 1 && (
                  <div className={styles.pagination}>
                     {page !== 1 && (
                        <button
                           className={`${styles.pageBtn} ${styles.prev}`}
                           onClick={() => handleChangePage(page - 1)}
                        >
                           <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                     )}

                     {[...Array.from({ length: numberOfPage })].map((_, index) => (
                        <button
                           key={index}
                           className={`${styles.pageBtn} ${page === index + 1 ? styles.active : ''}`}
                           onClick={() => handleChangePage(index + 1)}
                        >
                           {index + 1}
                        </button>
                     ))}

                     {page !== numberOfPage && (
                        <button
                           className={`${styles.pageBtn} ${styles.next}`}
                           onClick={() => handleChangePage(page + 1)}
                        >
                           <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                     )}
                  </div>
               )}
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

               {/* Hot Tags */}
               <h4 className={styles.title}>Hot Tags</h4>
               <div className={styles.tagWrap}>
                  {tags.map((tag, index) => (
                     <Link
                        to={`/blogs/categories/${tag.toLowerCase()}`}
                        className={styles.tagItem}
                        key={index}
                     >
                        {tag}
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(PopularPodcasts)
