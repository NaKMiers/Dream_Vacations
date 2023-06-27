import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import SeparatorTitle from '../SeparatorTitle'
import authorReviewThumb1 from '../../assets/imgs/authorReviewThumb1.jpg'
import authorReviewThumb2 from '../../assets/imgs/authorReviewThumb2.jpg'
import authorAvt2 from '../../assets/imgs/authorAvt2.jpg'
import authorAvt3 from '../../assets/imgs/authorAvt3.jpg'

function AuthorReviews() {
   const containerRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      const elements = [...containerRef.current.children]

      elements.forEach(item => {
         const top = item.getBoundingClientRect().top
         const bottom = item.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            item.classList.add(styles.appeared)
            const items = [...item.children]

            let delay = 0.2
            items.forEach(e => {
               e.style.animation = `floatUp 0.6s ease-in-out ${delay}s forwards`
               delay += 0.3
            })
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
         console.log('remove---AuthorReviews')
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
      <section className={styles.AuthorReviews}>
         <SeparatorTitle title='Hot Tours Author’s Reviews' dark style={{ margin: '80px 0 65px' }} />

         <div className={styles.container} ref={containerRef}>
            <div className={styles.item}>
               <div className={styles.thumb}>
                  <img src={authorReviewThumb1} alt='thumbnail' />
                  <div className={styles.border} />
               </div>

               <div className={styles.reviewContent}>
                  <div className={styles.avatar}>
                     <img src={authorAvt2} alt='avatar' />
                  </div>
                  <h6 className={styles.name}>Nathan Matthews</h6>
                  <h2 className={styles.title}>{`Wherever you go, go\nwith all your heart!`}</h2>
                  <h4 className={styles.date}>24 March 2019</h4>
                  <p className={styles.desc}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore
                  </p>
               </div>
            </div>

            <div className={`${styles.item} ${styles.reverse}`}>
               <div className={styles.thumb}>
                  <img src={authorReviewThumb2} alt='thumbnail' />
                  <div className={styles.border} />
               </div>

               <div className={styles.reviewContent}>
                  <div className={styles.avatar}>
                     <img src={authorAvt3} alt='avatar' />
                  </div>
                  <h6 className={styles.name}>Julianna Galanis</h6>
                  <h2
                     className={styles.title}
                  >{`Then I realized adventures\nare the best way to learn.`}</h2>
                  <h4 className={styles.date}>24 June 2019</h4>
                  <p className={styles.desc}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(AuthorReviews)
