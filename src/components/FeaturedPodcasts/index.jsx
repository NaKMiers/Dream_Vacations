import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import SeparatorTitle from '../../components/SeparatorTitle'
import featuredPodcastsBG from '../../assets/images/featuredPodcastsBG.jpg'
import PodcastItem from '../../components/LatestPodcast/PodcastItem'
import { useSelector } from 'react-redux'
import authorAvt from '../../assets/images/authorAvt11.jpg'
import facebook from '../../assets/icons/facebook-color.png'
import twitter from '../../assets/icons/twitter-color.png'
import instagram from '../../assets/icons/instagram-color.png'
import youtube from '../../assets/icons/youtube-color.png'
import pinterest from '../../assets/icons/pinterest-color.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import galery1 from '../../assets/images/editorPickedImage6.jpg'
import galery2 from '../../assets/images/blogThumb3.jpg'
import galery3 from '../../assets/images/blogThumb62.jpg'
import galery4 from '../../assets/images/galeryItem1.jpg'
import galery5 from '../../assets/images/galeryItem2.jpg'
import galery6 from '../../assets/images/editorPickedImage8.jpg'
import galery7 from '../../assets/images/editorPickedImage7.jpg'
import galery8 from '../../assets/images/blogThumb28.jpg'

const galeries = [galery1, galery2, galery3, galery4, galery5, galery6, galery7, galery8]

function FeaturedPodcasts() {
   const { podcasts, featuredPodcasts } = useSelector(state => state.podcasts)
   const data = featuredPodcasts.map(id => podcasts.find(podcast => podcast.id === id))

   const podcastsWrapRef = useRef(null)
   const sideWrapRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (podcastsWrapRef.current && sideWrapRef.current) {
         const elements = [...podcastsWrapRef.current.children, ...sideWrapRef.current.children]

         // 1
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
            console.log('remove---FeaturedPodcasts')
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
         className={styles.FeaturedPodcasts}
         style={{ background: `url(${featuredPodcastsBG}) no-repeat center / cover` }}
      >
         <SeparatorTitle
            title='The Best Author This Week'
            style={{ marginBottom: 30, paddingTop: 80 }}
         />

         <div className={`${styles.container} container`}>
            <div className={styles.podcastsWrap} ref={podcastsWrapRef}>
               {data.map(podcast => (
                  <PodcastItem data={podcast} type={3} key={podcast.id} />
               ))}
            </div>

            <div className={styles.sideWrap} ref={sideWrapRef}>
               {/* person */}
               <div className={styles.personCard}>
                  <div className={styles.avatar}>
                     <img src={authorAvt} alt='avatar' />
                  </div>

                  <div className={styles.personContent}>
                     <h2 className={styles.name}>Emerson Anderson</h2>
                     <p className={styles.role}>Blogger</p>
                     <h6 className={styles.phone}>+1 (987) 1625346</h6>

                     <div className={styles.socialCardWrap}>
                        <a
                           className={styles.icon}
                           href='https://www.facebook.com'
                           target='_blank'
                           rel='noreferrer'
                        >
                           <img src={facebook} alt='social' />
                        </a>
                        <a
                           className={styles.icon}
                           href='https://twitter.com'
                           target='_blank'
                           rel='noreferrer'
                        >
                           <img src={twitter} alt='social' />
                        </a>
                        <a
                           className={styles.icon}
                           href='https://www.instagram.com'
                           target='_blank'
                           rel='noreferrer'
                        >
                           <img src={instagram} alt='social' />
                        </a>
                     </div>
                  </div>
               </div>

               {/* description */}
               <p className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat.
               </p>

               {/* galery */}
               <div className={styles.galeryWrap}>
                  {galeries.map((galery, index) => (
                     <div className={styles.galeryItem} key={index}>
                        <div className={styles.galeryContainer}>
                           <img src={galery} alt='thumbnail' />

                           <div className={styles.overlay}>
                              <div className={styles.icon}>
                                 <FontAwesomeIcon icon={faCamera} />
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               {/* description */}
               <p className={styles.description}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                  error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
               </p>

               {/* socials */}
               <div className={styles.socialWrap}>
                  <a
                     href='https://www.facebook.com'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialItem}
                  >
                     <img src={facebook} alt='social' />
                  </a>
                  <a
                     href='https://www.twitter.com'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialItem}
                  >
                     <img src={twitter} alt='social' />
                  </a>
                  <a
                     href='https://www.instagram.com'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialItem}
                  >
                     <img src={instagram} alt='social' />
                  </a>
                  <a
                     href='https://www.youtube.com'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialItem}
                  >
                     <img src={youtube} alt='social' />
                  </a>
                  <a
                     href='https://www.pinterest.com'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialItem}
                  >
                     <img src={pinterest} alt='social' />
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(FeaturedPodcasts)
