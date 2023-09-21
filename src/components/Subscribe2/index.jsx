import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function Subscribe2() {
   const containerRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (containerRef.current) {
         const elements = [...containerRef.current.children]

         // 1
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
            console.log('remove---Subscribe2')
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
      <section className={styles.Subscribe2}>
         <div className={`${styles.container} container`} ref={containerRef}>
            <h1 className={styles.title}>Get Expert Travel</h1>
            <h2 className={styles.subtitle}>Inspiration and Tips Sent Straight to Your Inbox</h2>

            <p className={styles.paragraph}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
               ut labore.
            </p>

            <form className={styles.subscribeForm} action='/' onSubmit={e => e.preventDefault()}>
               <input type='email' placeholder='Enter your E-mail...' required />

               <button>Subscribe</button>
            </form>
         </div>
      </section>
   )
}

export default memo(Subscribe2)
