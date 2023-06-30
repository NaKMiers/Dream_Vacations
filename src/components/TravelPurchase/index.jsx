import React, { memo, useCallback, useEffect, useRef } from 'react'
import facebook from '../../assets/imgs/facebook-cirle.png'
import instagram from '../../assets/imgs/instagram-cirle.png'
import linkedin from '../../assets/imgs/linkedin-cirle.png'
import pinterest from '../../assets/imgs/pinterest-cirle.png'
import travelBG from '../../assets/imgs/travelBG.jpg'
import twitter from '../../assets/imgs/twitter-cirle.png'
import vimeo from '../../assets/imgs/vimeo-cirle.png'
import wechat from '../../assets/imgs/wechat-cirle.png'
import wordpress from '../../assets/imgs/wordpress-cirle.png'
import youtube from '../../assets/imgs/youtube-cirle.png'
import styles from './styles.module.scss'

function TravelPurchase() {
   const containerRef = useRef(null)
   const socialWrapRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (containerRef.current && socialWrapRef.current) {
         const elements = [...containerRef.current.children]
         const socialElements = [...socialWrapRef.current.children]

         // 1
         elements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.classList.add('floatUp')
               e.classList.add(styles.appeared)
            }
         })

         // 2
         let delay = 0.2
         socialElements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.style.animation = `floatLeft 0.6s ease-in-out ${delay}s forwards`
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

         socialElements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (countAppeared === elements.length + socialElements.length) {
            console.log('remove---TravelPurchase')
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
         className={styles.TravelPurchase}
         style={{ background: `url(${travelBG}) no-repeat top center / cover` }}
      >
         <div className={`${styles.container} container`} ref={containerRef}>
            <h1 className={styles.title}>The Gem Travel</h1>

            <p className={styles.paragraph}>
               TheGem is a versatile, responsive, high-performance WordPress theme with a modern creative
               design to suit a multitude of creative uses for building websites.
            </p>

            <div className={styles.socialWrap} ref={socialWrapRef}>
               <a
                  href='https://www.facebook.com/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.socialItem}
               >
                  <img src={facebook} alt='social' />
               </a>
               <a
                  href='https://twitter.com/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.socialItem}
               >
                  <img src={twitter} alt='social' />
               </a>
               <a
                  href='https://www.linkedin.com/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.socialItem}
               >
                  <img src={linkedin} alt='social' />
               </a>
               <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.socialItem}
               >
                  <img src={instagram} alt='social' />
               </a>
               <a
                  href='https://www.pinterest.com/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.socialItem}
               >
                  <img src={pinterest} alt='social' />
               </a>
               <a
                  href='https://vimeo.com/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.socialItem}
               >
                  <img src={vimeo} alt='social' />
               </a>
               <a
                  href='https://www.youtube.com/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.socialItem}
               >
                  <img src={youtube} alt='social' />
               </a>
               <a
                  href='https://www.wechat.com/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.socialItem}
               >
                  <img src={wechat} alt='social' />
               </a>
               <a
                  href='https://wordpress.com/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.socialItem}
               >
                  <img src={wordpress} alt='social' />
               </a>
            </div>

            <button className={styles.button}>PURCHASE THEGEM</button>
         </div>
      </section>
   )
}

export default memo(TravelPurchase)
