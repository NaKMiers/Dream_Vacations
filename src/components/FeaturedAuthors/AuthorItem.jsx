import React, { memo, useRef } from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

function AuthorItem({ data }) {
   const navigate = useNavigate()
   const authorItemRef = useRef(null)

   const handleMouseOver = () => {
      authorItemRef.current.style.background = 'rgba(255, 255, 255, 0.2)'
   }

   const handleMouseLeave = () => {
      authorItemRef.current.style.background = 'none'
   }

   return (
      <div className={styles.authorItem} ref={authorItemRef}>
         <div className={styles.avatar}>
            <img src={data.avatar} alt='avatar' />
         </div>

         <p className={styles.name}>{data.name}</p>
         <p className={styles.desc}>{data.desc}</p>

         <button
            className={styles.btn}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate('/about/author')}
         >
            READ
         </button>
      </div>
   )
}

export default memo(AuthorItem)
