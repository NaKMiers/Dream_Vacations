import React, { memo, useRef } from 'react'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'

function BlogType3({ data }) {
   const thumbnailRef = useRef(null)
   const navigate = useNavigate()

   return (
      <div className={styles.BlogType3}>
         <div className={styles.container}>
            <div className={styles.thumbnail} ref={thumbnailRef} onClick={() => navigate('/blogs/1')}>
               <img src={data.image} alt='thumbnail' />

               <div className={styles.overlay}></div>

               <div className={`${styles.slideContent}`}>
                  <div className={styles.author}>
                     <img src={data.avatar} alt='avatar' />
                     <span>{data.author}</span>

                     <div className={styles.iconWrap}>
                        <FontAwesomeIcon icon={faShareAlt} />
                        <FontAwesomeIcon icon={faCommentAlt} />
                        <span>2</span>
                     </div>

                     <h5 className={styles.title}>{data.title}</h5>
                  </div>

                  <p className={styles.desc}>
                     {data.desc}
                     <br />
                     <span className={styles.date}>{data.date}</span>
                  </p>
               </div>
            </div>

            <div className={styles.content}>
               <p className={styles.date}>{data.date}</p>
               <h3 className={styles.title}>{data.title}</h3>
            </div>
         </div>
      </div>
   )
}

export default memo(BlogType3)
