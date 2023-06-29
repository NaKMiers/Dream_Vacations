import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

function PostItem({ data }) {
   return (
      <div className={styles.postItem}>
         <Link to='/blogs/1' className={styles.thumbnail}>
            <img src={data.image} alt='thumbnail' />
         </Link>

         <div className={styles.content}>
            <Link to='/blogs/1' className={styles.title}>
               {data.title}
            </Link>

            <p className={styles.desc}>{data.desc}</p>

            <div className={styles.date}>
               <span>{data.date}</span>

               <div className={styles.iconWrap}>
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faHeart} />
                     <span>{data.likes}</span>
                  </div>
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faComment} />
                     <span>{data.comments}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(PostItem)
