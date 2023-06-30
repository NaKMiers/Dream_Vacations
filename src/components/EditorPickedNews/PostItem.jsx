import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

function PostItem({ data }) {
   const thumbRef = useRef(null)
   const iconRef = useRef(null)

   const handleMouseOver = () => {
      iconRef.current.classList.remove(styles.hide)
      iconRef.current.classList.add(styles.show)
   }

   const handleMouseLeave = () => {
      iconRef.current.classList.remove(styles.show)
      iconRef.current.classList.add(styles.hide)
   }

   return (
      <div className={styles.postItem}>
         <div
            className={styles.postThumb}
            ref={thumbRef}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
         >
            <img src={data.image} alt='post' />

            <div className={styles.overlay}>
               <div className={styles.icon} ref={iconRef}>
                  <FontAwesomeIcon icon={faFileLines} />
               </div>
            </div>
         </div>

         <div className={styles.postContent}>
            <Link to='/blogs/1'>
               <h5 className={styles.title}>
                  <span>{data.date}:</span> <span>{data.title}</span>
               </h5>
            </Link>

            <p className={styles.desc}>{data.desc}</p>

            <p className={styles.author}>By {data.author}</p>
         </div>
      </div>
   )
}

export default PostItem