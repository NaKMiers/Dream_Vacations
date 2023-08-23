import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import visonBackground from '../../assets/imgs/visionBackground.jpg'

function Vision() {
   const titleRef = useRef(null)
   const containerRef = useRef(null)

   // appear on scroll
   const handleScroll = useCallback(() => {
      if (titleRef.current && containerRef.current) {
         const elements = [titleRef.current, ...containerRef.current.children]

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
            console.log('remove---Vision')
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
         className={styles.Vision}
         style={{ background: `url(${visonBackground}) no-repeat center / cover` }}
      >
         <div className={styles.title} ref={titleRef}>
            <h1>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua.
            </h1>
            <span className={styles.textBackground}>Vision</span>
         </div>

         <div className={`${styles.container} container`} ref={containerRef}>
            <div className={styles.textBoxItem}>
               <div className={styles.textBoxBody}>
                  <h5 className={styles.textBoxTitle}>Explore from the inside looking out</h5>
                  <p className={styles.textBoxContent}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut
                     labore et dolore magna aliqua.
                  </p>
               </div>
            </div>
            <div className={styles.textBoxItem}>
               <div className={styles.textBoxBody}>
                  <h5 className={styles.textBoxTitle}>Explore from the inside looking out</h5>
                  <p className={styles.textBoxContent}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut
                     labore et dolore magna aliqua.
                  </p>
               </div>
            </div>
            <div className={styles.textBoxItem}>
               <div className={styles.textBoxBody}>
                  <h5 className={styles.textBoxTitle}>Explore from the inside looking out</h5>
                  <p className={styles.textBoxContent}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut
                     labore et dolore magna aliqua.
                  </p>
               </div>
            </div>
            <div className={styles.textBoxItem}>
               <div className={styles.textBoxBody}>
                  <h5 className={styles.textBoxTitle}>Explore from the inside looking out</h5>
                  <p className={styles.textBoxContent}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut
                     labore et dolore magna aliqua.
                  </p>
               </div>
            </div>
            <div className={styles.textBoxItem}>
               <div className={styles.textBoxBody}>
                  <h5 className={styles.textBoxTitle}>Explore from the inside looking out</h5>
                  <p className={styles.textBoxContent}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut
                     labore et dolore magna aliqua.
                  </p>
               </div>
            </div>
            <div className={styles.textBoxItem}>
               <div className={styles.textBoxBody}>
                  <h5 className={styles.textBoxTitle}>Explore from the inside looking out</h5>
                  <p className={styles.textBoxContent}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut
                     labore et dolore magna aliqua.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(Vision)
