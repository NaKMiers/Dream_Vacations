import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

function BlogGalleryItem({ data, myArea }) {
   const navigate = useNavigate()

   return (
      <div
         className={`${styles.BlogGalleryItem}  ${myArea ? styles.myArea : ''}`}
         onClick={() => navigate('/blog/1')}
      >
         <div className={styles.blogContainer}>
            <img src={data.image} alt='blog' />

            <div className={styles.overlay}>
               <div className={styles.author}>
                  <div className={styles.avatar}>
                     <img src={data.avatar} alt='avatar' />
                  </div>
                  <span>{data.author}</span>
               </div>

               <div className={styles.caption}>
                  <div className={styles.captionTrack1}>
                     <div className={styles.sep} />
                     <p className={styles.desc}>{data.desc}</p>
                     <div className={styles.icons}>
                        <FontAwesomeIcon icon={faShareAlt} />
                        <FontAwesomeIcon icon={faMessage} />
                        <span>{data.comments}</span>
                     </div>
                  </div>
                  <div className={styles.captionTrack2}>
                     <p className={myArea ? styles.myArea : ''}>{data.title}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(BlogGalleryItem)
