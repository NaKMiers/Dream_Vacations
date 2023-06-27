import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function SeparatorTitle({ title, dark, style }) {
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
      <div className={styles.SeparatorTitle} ref={titleRef} style={style}>
         <div className={`${styles.container} ${dark ? styles.dark : styles.light} container`}>
            <div />
            <h2 className={styles.tilte}>{title}</h2>
            <div />
         </div>
      </div>
   )
}

export default memo(SeparatorTitle)
