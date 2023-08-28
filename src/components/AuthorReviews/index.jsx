import React, { memo, useCallback, useEffect, useRef } from 'react'
import SeparatorTitle from '../SeparatorTitle'
import styles from './style.module.scss'

function AuthorReviews({ heading, data }) {
   const containerRef = useRef(null)
   const progressWrapRef = useRef(null)
   const textBoxWrapRef = useRef(null)

   const isCounting = useRef(false)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (containerRef.current) {
         let elements = [...containerRef.current.children]
         if (textBoxWrapRef.current) {
            elements = [...elements, ...textBoxWrapRef.current.children]
         }

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
         if (progressWrapRef.current) {
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

         if (countAppeared === elements.length + (progressWrapRef.current ? 1 : 0)) {
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
         {heading && <SeparatorTitle title={heading} dark style={{ margin: '80px 0 65px' }} />}

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
                           <div className={styles.authorContent}>
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

                  case 'category':
                     return (
                        <div className={styles.item} key={index}>
                           <div className={styles.categoryContent}>
                              <div className={styles.icon}>
                                 <img src={datum.icon} alt='icon' />
                              </div>
                              <h2 className={styles.title}>{datum.title}</h2>
                              <span className={styles.numberOfPost}>{datum.posts} Posts</span>
                              <p className={styles.desc}>{datum.desc}</p>

                              <div className={styles.buttonWrap}>
                                 <button>View Posts</button>
                              </div>
                           </div>
                        </div>
                     )

                  case 'text-box':
                     return (
                        <div className={styles.item} key={index}>
                           <div className={styles.textBox}>
                              <p className={styles.desc}>{datum.content}</p>

                              <div className={styles.textBoxWrapper} ref={textBoxWrapRef}>
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

                              <div className={styles.progressWrap} ref={progressWrapRef}>
                                 {datum.progresses.map((progress, index) => (
                                    <div
                                       key={index}
                                       className={styles.progress}
                                       style={{ '--progress-color': progress.color }}
                                    >
                                       <div className={styles.progressLabel}>
                                          <span>{progress.label}</span>
                                          <span data-value={progress.percent}>0</span>
                                       </div>
                                       <div className={styles.progressBar}>
                                          <div />
                                       </div>
                                    </div>
                                 ))}
                              </div>
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
