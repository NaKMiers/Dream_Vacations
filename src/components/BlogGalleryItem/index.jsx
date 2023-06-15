import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import authorAvt1 from '../../assets/imgs/authorAvt1.jpeg'
import blogThumb9 from '../../assets/imgs/blogThumb9.jpg'
import styles from './style.module.scss'

function BlogGalleryItem({ small, extraSmall }) {
   return (
      <div
         className={`${styles.BlogGalleryItem} ${small ? styles.small : ''} ${
            extraSmall ? styles.extraSmall : ''
         }`}
      >
         <div className={styles.blogContainer}>
            <img src={blogThumb9} alt='blog' />

            <div className={styles.overlay}>
               <div className={styles.author}>
                  <div className={styles.avatar}>
                     <img src={authorAvt1} alt='avatar' />
                  </div>
                  <span>By Scott Jackson</span>
               </div>

               <div className={styles.caption}>
                  <div className={styles.captionTrack1}>
                     <div className={styles.sep} />
                     <p className={styles.desc}>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua lorem ipsum. Dolore magnam aliquam quaerat
                        voluptatem. Nemo enim ipsam voluptatem quia voluptas.
                     </p>
                     <div className={styles.icons}>
                        <FontAwesomeIcon icon={faShareAlt} />
                        <FontAwesomeIcon icon={faMessage} />
                        <span>0</span>
                     </div>
                  </div>
                  <div className={styles.captionTrack2}>
                     <p>Double Item Blog Post</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(BlogGalleryItem)
