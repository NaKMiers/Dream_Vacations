import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import authorAvt4 from '../../assets/images/authorAvt4.jpg'
import twitter from '../../assets/icons/twitter.png'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import youtube from '../../assets/icons/youtube.png'
import pinterest from '../../assets/icons/pinterest.png'

function AuthorInfo() {
   const containerRef = useRef(null)
   const progressWrapRef = useRef(null)

   const isCounting = useRef(false)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (containerRef.current) {
         let elements = [...containerRef.current.children]

         // 1
         elements.forEach(item => {
            const top = item.getBoundingClientRect().top
            const bottom = item.getBoundingClientRect().bottom

            let delay = 0
            if (top < window.innerHeight && bottom > 0) {
               item.classList.add(styles.appeared)

               item.style.animation = `floatUp 0.6s ease-in-out ${delay}s forwards`
               delay += 0.3
            }
         })

         // 2
         const top = progressWrapRef.current.getBoundingClientRect().top
         const bottom = progressWrapRef.current.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            const progressElements = [...progressWrapRef.current.children]
            progressWrapRef.current.classList.add(styles.appeared)

            if (!isCounting.current) {
               isCounting.current = true

               progressElements.forEach(e => {
                  const label = e.children[0].children[1]
                  const bar = e.children[1].children[0]
                  const dataValue = parseInt(label.getAttribute('data-value'))

                  bar.style.width = dataValue + '%'

                  let startValue = 0
                  let endValue = dataValue
                  let interval = setInterval(() => {
                     startValue += 1
                     label.textContent = startValue + '%'
                     if (startValue === endValue) {
                        clearInterval(interval)
                     }
                  }, 15)
               })
            }
         }

         // remove event when all are appeared
         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (progressWrapRef.current && progressWrapRef.current.className.includes(styles.appeared)) {
            countAppeared++
         }

         if (countAppeared === elements.length + 1) {
            console.log('remove---AuthorInfo')
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
      <section className={styles.AuthorInfo}>
         <div className={`${styles.container} container`} ref={containerRef}>
            <div className={styles.avatarWrap}>
               <div className={styles.avatar}>
                  <img src={authorAvt4} alt='avatar' />
               </div>
            </div>

            <h3 className={styles.name}>Gordon Edwards</h3>

            <p className={styles.title}>TheGem Blogger</p>

            <div className={styles.socialWrap}>
               <a className={styles.social} href='https://twitter.com'>
                  <img src={twitter} alt='social' />
               </a>
               <a className={styles.social} href='https://www.facebook.com'>
                  <img src={facebook} alt='social' />
               </a>
               <a className={styles.social} href='https://www.instagram.com'>
                  <img src={instagram} alt='social' />
               </a>
               <a className={styles.social} href='https://www.youtube.com'>
                  <img src={youtube} alt='social' />
               </a>
               <a className={styles.social} href='https://www.pinterest.com'>
                  <img src={pinterest} alt='social' />
               </a>
            </div>

            <div className={styles.infoWrapper}>
               <div className={styles.info}>
                  <div className={styles.infoItem}>Born on: May 05, 1993</div>
                  <div className={styles.infoItem}>
                     Email: <span>mymaik@gmail.com</span>
                  </div>
                  <div className={styles.infoItem}>Phone: +00011 100 2000</div>
                  <div className={styles.infoItem}>Lives in: 11 W 53rd St, New York, NY 10019</div>
                  <div className={styles.infoItem}>Education: Fine Arts School</div>
                  <div style={{ marginBottom: 60 }} />
               </div>

               <div className={styles.progressWrap} ref={progressWrapRef}>
                  <div className={styles.progress} style={{ '--progress-color': '#31dcf2' }}>
                     <div className={styles.progressLabel}>
                        <span>Adventure</span>
                        <span data-value='89%'>0</span>
                     </div>
                     <div className={styles.progressBar}>
                        <div />
                     </div>
                  </div>

                  <div className={styles.progress} style={{ '--progress-color': '#97e7af' }}>
                     <div className={styles.progressLabel}>
                        <span>Travel</span>
                        <span data-value='60%'>0</span>
                     </div>
                     <div className={styles.progressBar}>
                        <div />
                     </div>
                  </div>

                  <div className={styles.progress} style={{ '--progress-color': '#53b2f0' }}>
                     <div className={styles.progressLabel}>
                        <span>Active</span>
                        <span data-value='73%'>0</span>
                     </div>
                     <div className={styles.progressBar}>
                        <div />
                     </div>
                  </div>

                  <div className={styles.progress} style={{ '--progress-color': '#608fe6' }}>
                     <div className={styles.progressLabel}>
                        <span>Lifestyle</span>
                        <span data-value='80%'>0</span>
                     </div>
                     <div className={styles.progressBar}>
                        <div />
                     </div>
                  </div>
               </div>
            </div>

            <div className={styles.bioWrapper}>
               <div className={styles.bioItem}>
                  <p>
                     Gordon Edwards has been the editor and publisher of TheGEM Travel in South Deerfield
                     Mass since 2002. He worked for newspapers and other sales positions for 23 years
                     until he finally got what he wanted, and became the editor at TheGEM.
                  </p>
               </div>
               <div className={styles.bioItem}>
                  <p>
                     He travels regularly, enjoys publishing new writers, and watching his grandchildren
                     grow up. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
                  </p>
               </div>
            </div>

            <div className={styles.quote}>
               <div className={styles.blockQuote}>
                  <p>
                     …Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                     exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                     dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur!
                  </p>
               </div>

               <span className={styles.quoteIcon}>”</span>
            </div>
         </div>
      </section>
   )
}

export default memo(AuthorInfo)
