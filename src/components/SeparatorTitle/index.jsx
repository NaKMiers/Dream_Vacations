import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function SeparatorTitle() {
   const titleRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      const top = titleRef.current.getBoundingClientRect().top
      const bottom = titleRef.current.getBoundingClientRect().bottom

      if (top < window.innerHeight && bottom > 0) {
         titleRef.current.classList.add('floatUp')

         // remove event when all are appeared
         console.log('remove---SeparatorTitle')
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
      <div className={styles.SeparatorTitle} ref={titleRef}>
         <div />
         <h2 className={styles.tilte}>Top Categories</h2>
         <div />
      </div>
   )
}

export default memo(SeparatorTitle)
