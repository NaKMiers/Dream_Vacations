import React, { memo, useCallback, useEffect, useRef } from 'react'
import podcastBackground from '../../assets/images/podcastBackground.jpg'
import SeparatorTitle from '../SeparatorTitle'
import PodcastItem from './PodcastItem'
import styles from './style.module.scss'
import { useSelector } from 'react-redux'

function LatestPodcast() {
   const { podcasts, latestPodcasts } = useSelector(state => state.podcasts)
   const data = latestPodcasts.map(id => podcasts.find(podcast => podcast.id === id))

   // refs
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
               {data.map(podcast => (
                  <PodcastItem data={podcast} key={podcast.id} />
               ))}
            </div>
         </div>
      </section>
   )
}

export default memo(LatestPodcast)
