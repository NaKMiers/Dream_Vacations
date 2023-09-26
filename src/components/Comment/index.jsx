import { faBarsStaggered, faCheck, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import authorAvt1 from '../../assets/images/authorAvt14.jpeg'
import authorAvt2 from '../../assets/images/authorAvt15.jpeg'
import { faCommentAlt, faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Comment() {
   const [checked, setChecked] = useState(false)

   const CommentRef = useRef(null)
   const commentWrapRef = useRef(null)
   const formCommentRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [
         ...CommentRef.current.children,
         ...commentWrapRef.current.children,
         ...formCommentRef.current.children,
      ]

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
         console.log('removed---Comment')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [])

   // appear on scroll
   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)

      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   return (
      <div className={styles.Comment} ref={CommentRef}>
         {/* Comments */}
         <div className={styles.commentTitle}>
            <div className={styles.icon}>
               <FontAwesomeIcon icon={faBarsStaggered} />
            </div>
            <h2>
               <span>Comments</span> (2)
            </h2>
         </div>

         <div className={styles.commentWrap} ref={commentWrapRef}>
            <div className={styles.commentItem}>
               <div className={styles.cmt}>
                  <div className={styles.cmtMeta}>
                     <div className={styles.metaLeft}>
                        <div className={styles.avatar}>
                           <img src={authorAvt1} alt='avatar' />
                        </div>

                        <div className={styles.commentInfo}>
                           <h6 className={styles.name}>Lisa Emerson</h6>
                           <a href='/' className={styles.date}>
                              July 26, 2020 at 7:01pm
                           </a>
                        </div>
                     </div>

                     <div className={styles.metaRight}>
                        <button className={styles.replyBtn}>Reply</button>
                     </div>
                  </div>

                  <div className={styles.text}>
                     Etiam eu varius enim, et varius lacus. Integer tellus tellus, dictum ac pellentesque
                     quis, scelerisque at ligula. Maecenas dignissim lectus a mauris vulputate fermentum.
                     Suspendisse potenti. Duis id cursus augue, vitae scelerisque metus. Phasellus id
                     nulla a leo vehicula elementum sit amet vel ex. Suspendisse gravida lorem sem. Donec
                     sodales leo a pharetra pretium. Aenean ultrices elit vel ipsum volutpat interdum.
                     Donec pellentesque quis elit eget lacinia. Nunc ac condimentum erat, vitae aliquet
                     orci. Lorem ipsum dolor sit amet, consectetur elit.
                  </div>
               </div>

               <div className={`${styles.cmt} ${styles.subCmt}`}>
                  <div className={styles.cmtMeta}>
                     <div className={styles.metaLeft}>
                        <div className={styles.avatar}>
                           <img src={authorAvt2} alt='avatar' />
                        </div>

                        <div className={styles.commentInfo}>
                           <h6 className={styles.name}>Lisa Emerson</h6>
                           <a href='/' className={styles.date}>
                              July 26, 2020 at 7:01pm
                           </a>
                        </div>
                     </div>

                     <div className={styles.metaRight}>
                        <button className={styles.replyBtn}>Reply</button>
                     </div>
                  </div>

                  <div className={styles.text}>
                     Etiam eu varius enim, et varius lacus. Integer tellus tellus, dictum ac pellentesque
                     quis, scelerisque at ligula. Maecenas dignissim lectus a mauris vulputate fermentum.
                     Suspendisse potenti. Duis id cursus augue, vitae scelerisque metus. Phasellus id
                     nulla a leo vehicula elementum sit amet vel ex. Suspendisse gravida lorem sem. Donec
                     sodales leo a pharetra pretium. Aenean ultrices elit vel ipsum volutpat interdum.
                     Donec pellentesque quis elit eget lacinia. Nunc ac condimentum erat, vitae aliquet
                     orci. Lorem ipsum dolor sit amet, consectetur elit.
                  </div>
               </div>
            </div>
         </div>

         {/* Leave Comment */}
         <div className={styles.commentTitle}>
            <div className={styles.icon}>
               <FontAwesomeIcon icon={faCommentAlt} />
            </div>
            <h2>
               <span>Leave</span> a comment
            </h2>
         </div>

         <form className={styles.formComment} ref={formCommentRef}>
            <div className={styles.messageArea}>
               <textarea name='message' rows='10' placeholder='Message*' required></textarea>
            </div>

            <div className={styles.infoArea}>
               <div>
                  <input name='name' type='text' placeholder='Name*' required />
                  <div>
                     <FontAwesomeIcon icon={faUser} />
                  </div>
               </div>
               <div>
                  <input name='email' type='email' placeholder='Email*' required />
                  <div>
                     <FontAwesomeIcon icon={faEnvelope} />
                  </div>
               </div>
               <div>
                  <input name='website' type='url' placeholder='Website' />
                  <div>
                     <FontAwesomeIcon icon={faGlobe} />
                  </div>
               </div>
            </div>

            <div className={styles.checkArea}>
               <input
                  type='checkbox'
                  name='check'
                  id='check'
                  checked={checked}
                  style={{ display: 'none' }}
                  onChange={() => {}}
               />
               <div className={styles.checkbox} onClick={() => setChecked(!checked)}>
                  {checked && <FontAwesomeIcon icon={faCheck} />}
               </div>
               <label htmlFor='check' onClick={() => setChecked(!checked)}>
                  Save my name, email, and website in this browser for the next time I comment.
               </label>
            </div>

            <div className={styles.submitArea}>
               <button className={`button`}>SEND COMMENT</button>
            </div>
         </form>
      </div>
   )
}

export default memo(Comment)
