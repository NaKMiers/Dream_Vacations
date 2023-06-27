import React, { memo, useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import facebook from '../../assets/imgs/facebook-cirle.png'
import instagram from '../../assets/imgs/instagram-cirle.png'
import linkedin from '../../assets/imgs/linkedin-cirle.png'
import pinterest from '../../assets/imgs/pinterest-cirle.png'
import twitter from '../../assets/imgs/twitter-cirle.png'
import youtube from '../../assets/imgs/youtube-cirle.png'
import styles from './style.module.scss'

function FooterNav() {
   const containerRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      const elements = [...containerRef.current.children]

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
         console.log('remove---FooterNav')
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
      <section className={styles.FooterNav}>
         <div className={`${styles.container} container`} ref={containerRef}>
            <div className={styles.copyrights}>
               <span>© Copyrights</span>
               <a href='/'>CodexThemes</a>
            </div>

            <div className={styles.nav}>
               <Link to='/' className={styles.navItem}>
                  Support
               </Link>
               <Link to='/' className={styles.navItem}>
                  Contact Us
               </Link>
               <Link to='/' className={styles.navItem}>
                  Disclaimer
               </Link>
               <Link to='/' className={styles.navItem}>
                  Privacy Policy
               </Link>
            </div>

            <div className={styles.socialsWrap}>
               <a href='/' className={styles.socialItem} target='_blank' rel='noreferrer'>
                  <img src={facebook} alt='social' />
               </a>
               <a href='/' className={styles.socialItem} target='_blank' rel='noreferrer'>
                  <img src={linkedin} alt='social' />
               </a>
               <a href='/' className={styles.socialItem} target='_blank' rel='noreferrer'>
                  <img src={twitter} alt='social' />
               </a>
               <a href='/' className={styles.socialItem} target='_blank' rel='noreferrer'>
                  <img src={instagram} alt='social' />
               </a>
               <a href='/' className={styles.socialItem} target='_blank' rel='noreferrer'>
                  <img src={pinterest} alt='social' />
               </a>
               <a href='/' className={styles.socialItem} target='_blank' rel='noreferrer'>
                  <img src={youtube} alt='social' />
               </a>
            </div>
         </div>
      </section>
   )
}

export default memo(FooterNav)
