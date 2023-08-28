import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import aboutImage from '../../assets/images/aboutImage.jpg'

function Greeting() {
   const containerRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (containerRef.current) {
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
            console.log('remove---Greeting')
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
      <section className={styles.Greeting}>
         <div className={`${styles.container} container`} ref={containerRef}>
            <div className={styles.title}>
               <h1>Welcome to TheGem Travel Blog</h1>
               <span className={styles.textBackground}>Welcome</span>
            </div>

            <p className={styles.paragraph}>
               Our goal at Vacations & Travel TheGem Blog is to connect our readers and audience with the
               vast amount of travel destinations throughout our wonderful planet.
            </p>

            <p className={styles.paragraph}>
               Our mission is to inspire people to discover unique locations and show them ways to plan
               and book their dream vacation. Established in 2000, Vacations & Travel magazine is highly
               respected and the longest-running quarterly travel blog title.
            </p>

            <div className={styles.image}>
               <img src={aboutImage} alt='about' />
            </div>
         </div>
      </section>
   )
}

export default memo(Greeting)
