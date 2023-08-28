import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function WelcomeBannerLite({ title, subTitle, background }) {
   const titleRef = useRef(null)
   const subTitleRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (titleRef.current && subTitleRef) {
         const elements = [titleRef.current, subTitleRef.current]

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
            console.log('remove---WelcomeBannerLite')
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
         className={styles.WelcomeBannerLite}
         style={{ background: `url(${background}) no-repeat center / cover` }}
      >
         <div className={`${styles.container} container`}>
            <h1 className={styles.title} ref={titleRef}>
               {title}
            </h1>
            <p className={styles.subTitle} ref={subTitleRef}>
               {subTitle}
            </p>
         </div>
      </section>
   )
}

export default memo(WelcomeBannerLite)
