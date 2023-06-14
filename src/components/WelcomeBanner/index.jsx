import React, { memo, useState } from 'react'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import welcomeBanner1 from '../../assets/imgs/welcomeBanner1.jpg'
import welcomeBanner2 from '../../assets/imgs/welcomeBanner2.png'
import welcomeBanner3 from '../../assets/imgs/welcomeBanner3.png'
import welcomeBanner4 from '../../assets/imgs/welcomeBanner4.jpg'
import { Link } from 'react-router-dom'

function WelcomeBanner() {
   const [isSliding, setSliding] = useState(false)
   const [slide, setSlide] = useState(1)
   console.log(slide)

   const nextSlide = () => {
      if (!isSliding) {
         setSliding(true)
         setSlide(slide === 4 ? 1 : slide + 1)

         setTimeout(() => {
            setSliding(false)
         }, 1010) // slide duration 1s
      }
   }

   const prevSlide = () => {
      if (!isSliding) {
         setSliding(true)
         setSlide(slide === 1 ? 4 : slide - 1)

         setTimeout(() => {
            setSliding(false)
         }, 1010) // slide duration 1s
      }
   }

   return (
      <section className={styles.WelcomeBanner}>
         <button className={`${styles.slideBtn} ${styles.prevBtn}`} onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
         </button>
         <button className={`${styles.slideBtn} ${styles.nextBtn}`} onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
         </button>

         <div className={styles.slideNav}>
            <button
               className={`${styles.navBtn} ${slide === 1 ? styles.active : ''}`}
               onClick={() => setSlide(1)}
            />
            <button
               className={`${styles.navBtn} ${slide === 2 ? styles.active : ''}`}
               onClick={() => setSlide(2)}
            />
            <button
               className={`${styles.navBtn} ${slide === 3 ? styles.active : ''}`}
               onClick={() => setSlide(3)}
            />
            <button
               className={`${styles.navBtn} ${slide === 4 ? styles.active : ''}`}
               onClick={() => setSlide(4)}
            />
         </div>

         <div
            className={`${styles.slide} ${slide === 1 ? styles.active : ''}`}
            style={{ background: `url(${welcomeBanner1}) no-repeat center / cover` }}
         >
            <div className={styles.slideFeatures}>
               <div className={styles.categories}>
                  <span>Nations</span>
                  {', '}
                  <span>World</span>
               </div>

               <h1 className={styles.title}>Coral Bay Travel</h1>
               <p className={styles.subTitle}>«Travel is the healthiest addiction»</p>

               <h5 className={styles.date}>August 27, 2023</h5>

               <Link to='/blogs/1' className={`button`}>
                  READ MORE
               </Link>
            </div>
         </div>

         <div
            className={`${styles.slide} ${slide === 2 ? styles.active : ''}`}
            style={{ background: `url(${welcomeBanner2}) no-repeat center / cover` }}
         >
            <div className={styles.slideFeatures}>
               <div className={styles.categories}>
                  <span>Nations</span>
                  {', '}
                  <span>World</span>
               </div>

               <h1 className={styles.title}>Best Weekend</h1>
               <p className={styles.subTitle}>«The world is too big to leave unexplored»</p>

               <h5 className={styles.date}>August 27, 2023</h5>

               <Link to='/blogs/1' className={`button`}>
                  READ MORE
               </Link>
            </div>
         </div>

         <div
            className={`${styles.slide} ${slide === 3 ? styles.active : ''}`}
            style={{ background: `url(${welcomeBanner3}) no-repeat center / cover` }}
         >
            <div className={styles.slideFeatures}>
               <div className={styles.categories}>
                  <span>Nations</span>
                  {', '}
                  <span>World</span>
               </div>

               <h1 className={styles.title}>Best Trip</h1>
               <p className={styles.subTitle}>
                  «Be fearless in the pursuit of what sets your soul on fire!»
               </p>

               <h5 className={styles.date}>August 27, 2023</h5>

               <Link to='/blogs/1' className={`button`}>
                  READ MORE
               </Link>
            </div>
         </div>
         <div
            className={`${styles.slide} ${slide === 4 ? styles.active : ''}`}
            style={{ background: `url(${welcomeBanner4}) no-repeat center / cover` }}
         >
            <div className={styles.slideFeatures}>
               <div className={styles.categories}>
                  <span>Nations</span>
                  {', '}
                  <span>World</span>
               </div>

               <h1 className={styles.title}>Flying Over</h1>
               <p className={styles.subTitle}>«The world is yours to explore»</p>

               <h5 className={styles.date}>August 27, 2023</h5>

               <Link to='/blogs/1' className={`button`}>
                  READ MORE
               </Link>
            </div>
         </div>
      </section>
   )
}

export default memo(WelcomeBanner)
