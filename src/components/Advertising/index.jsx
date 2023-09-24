import React, { memo, useCallback, useEffect, useRef } from 'react'
import advertiseBanner from '../../assets/images/advertiseBanner2.jpg'
import SeparatorTitle from '../../components/SeparatorTitle'
import styles from './styles.module.scss'

function Advertising() {
   const containerRef = useRef(null)

   // show on scroll
   const handleScroll = useCallback(() => {
      // console.log('handleScroll')
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

         // remove event listener after all showed
         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })
         if (countAppeared === elements.length) {
            console.log('removed---Advertising')
            window.removeEventListener('scroll', handleScroll)
         }
      }
   }, [])

   // show on scroll
   useEffect(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   return (
      <section className={styles.Advertising}>
         <div className={`${styles.container} container`} ref={containerRef}>
            <SeparatorTitle title='Advertise With Us' dark style={{ marginBottom: '30px' }} />

            <p className={styles.paragraph}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
               exercitationtempor incididunt ut labore et dolore magna aliqua enim!
            </p>
            <p className={styles.paragraph}>
               If you would like to advertise with us, please contact our Digital Sales Planner:
            </p>

            <h3 className={styles.email}>
               <a href='mailto:advertising@domain.ltd'>advertising@domain.ltd</a>
            </h3>

            <div className={styles.advertiseBanner}>
               <img src={advertiseBanner} alt='advertise-banner' />
            </div>
         </div>
      </section>
   )
}

export default memo(Advertising)
