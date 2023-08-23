import React, { memo, useCallback, useEffect, useRef } from 'react'
import SeparatorTitle from '../SeparatorTitle'
import styles from './style.module.scss'

function AuthorReviews({ heading, data }) {
   const containerRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (containerRef.current) {
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
         <SeparatorTitle title={heading} dark style={{ margin: '80px 0 65px' }} />

         <div className={styles.container} ref={containerRef}>
            {data.map((datum, index) => {
               switch (datum.type) {
                  case 'thumbnail':
                     return (
                        <div className={styles.item} key={index}>
                           <div className={styles.thumb}>
                              <img src={datum.source} alt='thumbnail' />
                              <div className={styles.border} />
                           </div>
                        </div>
                     )

                  case 'author':
                     return (
                        <div className={styles.item} key={index}>
                           <div className={styles.reviewContent}>
                              <div className={styles.avatar}>
                                 <img src={datum.avatar} alt='avatar' />
                              </div>
                              <h6 className={styles.name}>{datum.name}</h6>
                              <h2 className={styles.title}>{datum.title}</h2>
                              <h4 className={styles.date}>{datum.date}</h4>
                              <p className={styles.desc}>{datum.desc}</p>
                           </div>
                        </div>
                     )

                  case 'text-box':
                     return (
                        <div className={styles.item} key={index}>
                           <div className={styles.textBox}>
                              <p className={styles.desc}>{datum.content}</p>

                              <div className={styles.textBoxWrapper}>
                                 {datum.boxContents.map((content, index) => (
                                    <div
                                       className={styles.textBoxItem}
                                       style={{ '--text-color': content.textColor }}
                                       key={index}
                                    >
                                       <span>{index + 1}</span>
                                       <span>{content.text}</span>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     )

                  case 'progress':
                     return (
                        <div className={styles.item} key={index}>
                           <div className={styles.progression}>
                              <p className={styles.desc}>{datum.content}</p>
                           </div>
                        </div>
                     )

                  default:
                     return null
               }
            })}
         </div>
      </section>
   )
}

export default memo(AuthorReviews)
