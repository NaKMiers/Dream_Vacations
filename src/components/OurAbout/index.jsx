import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import ourAboutIcon1 from '../../assets/imgs/ourAboutIcon1.png'
import ourAboutIcon2 from '../../assets/imgs/ourAboutIcon2.png'
import ourAboutIcon3 from '../../assets/imgs/ourAboutIcon3.png'
import { Link } from 'react-router-dom'

function OurAbout({ title, backgroundTitle, content, noBtn }) {
   const titleRef = useRef(null)
   const paragraphRef = useRef(null)
   const categoriesRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (titleRef.current && paragraphRef.current && categoriesRef.current) {
         const elements = [titleRef.current, paragraphRef.current]
         const categoryElements = [...categoriesRef.current.children]

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
         categoryElements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.style.animation = `floatUp 0.6s ease-in-out ${delay}s forwards`
               e.classList.add(styles.appeared)
               delay += 0.2
            }
         })

         // remove event when all are appeared
         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         categoryElements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (countAppeared === elements.length + categoryElements.length) {
            console.log('remove---OurAbout')
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
      <section className={styles.OurAbout}>
         <div className={`${styles.container} container`}>
            <div className={styles.title}>
               <h1 ref={titleRef}>{title}</h1>
               <span className={styles.textBackground}>{backgroundTitle}</span>
            </div>

            <p className={styles.paragraph} ref={paragraphRef}>
               {content}
            </p>

            <div className={styles.categories} ref={categoriesRef}>
               <div className={styles.cateItem}>
                  <div className={styles.icon}>
                     <img src={ourAboutIcon1} alt='icon' />
                  </div>

                  <p className={styles.text}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                     exercitation ullamco nisi ut aliquip ex ea
                  </p>

                  {noBtn || (
                     <Link to='/categories/lifestyle' className={styles.btn}>
                        READ MORE
                     </Link>
                  )}
               </div>
               <div className={styles.cateItem}>
                  <div className={styles.icon}>
                     <img src={ourAboutIcon2} alt='icon' />
                  </div>

                  <p className={styles.text}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                     exercitation ullamco nisi ut aliquip ex ea
                  </p>

                  {noBtn || (
                     <Link to='/categories/travel' className={styles.btn}>
                        READ MORE
                     </Link>
                  )}
               </div>
               <div className={styles.cateItem}>
                  <div className={styles.icon}>
                     <img src={ourAboutIcon3} alt='icon' />
                  </div>

                  <p className={styles.text}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                     exercitation ullamco nisi ut aliquip ex ea
                  </p>

                  {noBtn || (
                     <Link to='/categories/adventure' className={styles.btn}>
                        READ MORE
                     </Link>
                  )}
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(OurAbout)
