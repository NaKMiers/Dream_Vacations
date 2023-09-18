import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import topCategoriesBG from '../../assets/images/topCategoriesBG.jpg'
import topCatImg1 from '../../assets/images/topCatImg1.jpg'
import topCatImg2 from '../../assets/images/topCatImg2.jpg'
import topCatImg3 from '../../assets/images/topCatImg3.jpg'
import topCatImg4 from '../../assets/images/topCatImg4.jpg'
import topCatImg5 from '../../assets/images/topCatImg5.jpg'
import topCatImg6 from '../../assets/images/topCatImg6.jpg'
import { Link } from 'react-router-dom'
import SeparatorTitle from '../SeparatorTitle'

function TopCategories({ style }) {
   const categoriesWrapRef = useRef(null)
   const buttonWrapRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (categoriesWrapRef.current && buttonWrapRef) {
         const elements = [...categoriesWrapRef.current.children]

         // 1
         let delay = 0.2
         elements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.style.animation = `floatUp 0.6s ease-in-out ${delay}s forwards`
               e.classList.add(styles.appeared)
               delay += 0.2
            }
         })

         // 2
         const btnTop = buttonWrapRef.current.getBoundingClientRect().top
         const btnBottom = buttonWrapRef.current.getBoundingClientRect().bottom

         if (btnTop < window.innerHeight && btnBottom > 0) {
            buttonWrapRef.current.classList.add('floatLeft')
            buttonWrapRef.current.classList.add(styles.appeared)
         }

         // remove event when all are appeared
         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (buttonWrapRef.current.className.includes(styles.appeared)) {
            countAppeared++
         }

         if (countAppeared === elements.length + 1) {
            console.log('remove---TopCategories')
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
         className={styles.TopCategories}
         style={{ background: `url(${topCategoriesBG}) no-repeat center / cover`, ...style }}
      >
         <div className={`${styles.container} container`}>
            <SeparatorTitle title='Top Categories' />

            <div className={styles.categoriesWrap} ref={categoriesWrapRef}>
               <div className={styles.categoriesItem}>
                  <img src={topCatImg1} alt='thumbnail' />
                  <h6 className={styles.cateTitle}>
                     <Link to='/categories/adventure'>Adventure</Link>
                  </h6>
               </div>
               <div className={styles.categoriesItem}>
                  <img src={topCatImg2} alt='thumbnail' />
                  <h6 className={styles.cateTitle}>
                     <Link to='/categories/adventure'>Travel</Link>
                  </h6>
               </div>
               <div className={styles.categoriesItem}>
                  <img src={topCatImg3} alt='thumbnail' />
                  <h6 className={styles.cateTitle}>
                     <Link to='/categories/adventure'>Active</Link>
                  </h6>
               </div>
               <div className={styles.categoriesItem}>
                  <img src={topCatImg4} alt='thumbnail' />
                  <h6 className={styles.cateTitle}>
                     <Link to='/categories/adventure'>Lifestyle</Link>
                  </h6>
               </div>
               <div className={styles.categoriesItem}>
                  <img src={topCatImg5} alt='thumbnail' />
                  <h6 className={styles.cateTitle}>
                     <Link to='/categories/adventure'>Reviews</Link>
                  </h6>
               </div>

               <div className={styles.categoriesItem}>
                  <img src={topCatImg6} alt='thumbnail' />
                  <h6 className={styles.cateTitle}>
                     <Link to='/categories/adventure'>Routes</Link>
                  </h6>
               </div>
            </div>

            <div className={styles.buttonWrap} ref={buttonWrapRef}>
               <Link to='/categories' className={`button`}>
                  VIEW ALL CATEGORIES
               </Link>
            </div>
         </div>
      </section>
   )
}

export default memo(TopCategories)
