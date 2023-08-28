import React, { memo, useCallback, useEffect, useRef } from 'react'
import podcastBackground from '../../assets/imgs/podcastBackground.jpg'
import SeparatorTitle from '../SeparatorTitle'
import PostcastItem from './postcastItem'
import styles from './style.module.scss'

function LatestPodcast() {
   const podcastWrapperRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (podcastWrapperRef.current) {
         const elements = [...podcastWrapperRef.current.children]

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
            console.log('remove---LatestPodcast')
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
         className={styles.LatestPodcast}
         style={{ background: `url(${podcastBackground}) no-repeat center / cover` }}
      >
         <SeparatorTitle title='Latest Podcast' />

         <div className={`${styles.container} container`}>
            <div className={styles.podcastWrapper} ref={podcastWrapperRef}>
               <PostcastItem />
               <PostcastItem />
               <PostcastItem />
            </div>
         </div>
      </section>
   )
}

export default memo(LatestPodcast)
