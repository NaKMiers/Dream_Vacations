import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import statsBackground from '../../assets/imgs/statsBackground.jpg'
import Odo from './odo'
import styles from './style.module.scss'

function Stats() {
   const counterNumberRef1 = useRef(null)
   const [run, setRun] = useState({ facebook: false, twitter: false, instagram: false })

   const subTitleRef = useRef(null)
   const statWraperRef = useRef(null)

   // render stats
   const renderStats = (value, indicate) =>
      value
         .split('')
         .map((element, index) => (
            <Odo
               key={index}
               dataValue={+element}
               time={3}
               delay={index / 10}
               run={run[indicate]}
               index={index}
            />
         ))

   console.log(run)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (subTitleRef.current && statWraperRef.current) {
         const statElements = [...statWraperRef.current.children]

         // 1
         const top = subTitleRef.current.getBoundingClientRect().top
         const bottom = subTitleRef.current.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            subTitleRef.current.classList.add('floatUp')
            subTitleRef.current.classList.add(styles.appeared)
         }

         // 2
         let delay = 0.2
         statElements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.style.animation = `floatUp 0.6s ease-in-out ${delay}s forwards`
               e.classList.add(styles.appeared)
               delay += 0.2

               const itemType = e.getAttribute('item-type')
               setRun(prev => ({ ...prev, [itemType]: true }))
            }
         })

         // remove event when all are appeared
         let countAppeared = 0
         statElements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (subTitleRef.current.className.includes(styles.appeared)) {
            countAppeared++
         }

         if (countAppeared === statElements.length + 1) {
            console.log('remove---Stats')
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
         className={styles.Stats}
         style={{ background: `url(${statsBackground}) no-repeat center / cover` }}
      >
         <div className={`${styles.container} container`}>
            <p className={styles.subTitle} ref={subTitleRef}>
               Our goal at Vacations & Travel TheGem Blog is to connect our readers and audience with the
               vast amount of travel destinations throughout our wonderful planet.
            </p>

            <div className={styles.statWraper} ref={statWraperRef}>
               <div className={styles.statItem} item-type='facebook'>
                  <span className={styles.statTitle} style={{ color: '#608fe6' }}>
                     Facebook
                  </span>

                  <div className={styles.counterNumber} ref={counterNumberRef1} data-value='77500'>
                     {renderStats('77500', 'facebook')}
                     <div>+</div>
                  </div>

                  <span className={styles.statUnit}>followers</span>
               </div>

               <div className={styles.statItem} item-type='twitter'>
                  <span className={styles.statTitle} style={{ color: '#4dd8e1' }}>
                     Twitter
                  </span>

                  <div className={styles.counterNumber} ref={counterNumberRef1} data-value='77500'>
                     {renderStats('6100', 'twitter')}
                     <div>+</div>
                  </div>

                  <span className={styles.statUnit}>followers</span>
               </div>

               <div className={styles.statItem} item-type='instagram'>
                  <span className={styles.statTitle} style={{ color: '#79dd97' }}>
                     Instagram
                  </span>

                  <div className={styles.counterNumber} ref={counterNumberRef1} data-value='77500'>
                     {renderStats('2500', 'instagram')}
                     <div>+</div>
                  </div>

                  <span className={styles.statUnit}>followers</span>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(Stats)
