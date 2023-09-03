import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import styles from './style.module.scss'

function VideoItem({ data, setVideoSrc }) {
   return (
      <div className={styles.videoItem}>
         <div className={styles.body}>
            <div className={styles.thumbnail}>
               <img src={data.image} alt='thumbnail' />
            </div>
            <div className={styles.overlay}>
               <div className={styles.icon} onClick={() => setVideoSrc(data.video)}>
                  <FontAwesomeIcon icon={faPlayCircle} />
               </div>

               <div className={styles.content}>
                  <p className={styles.date}>{data.date}</p>
                  <h4 className={styles.title}>{data.title}</h4>
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(VideoItem)
