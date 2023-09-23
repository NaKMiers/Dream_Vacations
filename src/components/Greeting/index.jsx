import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Greeting({ type, title, behindTitle, contents, images, checkList, contactInfomations }) {
   const containerRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
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

         // remove event when all are appeared
         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (countAppeared === elements.length) {
            console.log('remove---Greeting')
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

   // split checkList into chunks
   const chunkArray = (inputArray, chunkSize) => {
      const result = []
      for (let i = 0; i < inputArray.length; i += chunkSize) {
         result.push(inputArray.slice(i, i + chunkSize))
      }
      return result
   }

   return (
      <section className={`${styles.Greeting} ${type === 'podcast' ? styles.podcast : ''}`}>
         <div
            className={`${styles.container} ${type === 'podcast' ? styles.podcast : ''}  ${
               type === 'contact' ? styles.contact : ''
            } container`}
            ref={containerRef}
         >
            <div className={styles.title}>
               <h1>{title}</h1>
               <span className={styles.textBackground}>{behindTitle}</span>
            </div>

            {contents?.map((content, index) => (
               <p
                  key={index}
                  className={`${styles.paragraph} ${type === 'contact' ? styles.contact : ''}`}
               >
                  {content}
               </p>
            ))}

            {images?.map((image, index) => (
               <div key={index} className={styles.image}>
                  <img src={image} alt='about' />
               </div>
            ))}

            {checkList && (
               <div className={styles.checkList}>
                  {chunkArray(checkList, 5).map((chunk, index) => (
                     <ul key={index} className={styles.separatedCheckList}>
                        {chunk.map((item, index) => (
                           <li key={index} className={styles.checkItem}>
                              <div className={styles.icon}>
                                 <FontAwesomeIcon icon={faCheck} />
                              </div>
                              <span>{item}</span>
                           </li>
                        ))}
                     </ul>
                  ))}
               </div>
            )}

            {contactInfomations && (
               <div className={styles.contactIn4Wrap}>
                  {contactInfomations.map((in4, index) => (
                     <div className={styles.contactItem} style={{ background: in4.color }} key={index}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={in4.icon} />
                        </div>
                        <h5 className={styles.label}>{in4.label}</h5>

                        <div className={styles.content}>
                           {in4.in4s.map((text, index) => (
                              <p className={styles.text} key={index}>
                                 {text}
                              </p>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </section>
   )
}

export default memo(Greeting)
