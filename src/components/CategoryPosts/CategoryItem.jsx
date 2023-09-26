import { faCircleInfo, faComment, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useRef } from 'react'
import styles from './style.module.scss'

function CategoryItem({ data }) {
   const thumbIconRef = useRef(null)

   const handleMouseOver = useCallback(() => {
      thumbIconRef.current.classList.add(styles.show)
      thumbIconRef.current.classList.remove(styles.hide)
   }, [])

   const handleMouseLeave = useCallback(() => {
      thumbIconRef.current.classList.add(styles.hide)
      thumbIconRef.current.classList.remove(styles.show)
   }, [])

   return (
      <div className={styles.categoryItem}>
         <div className={styles.thumbnail} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <img src={data.image} alt='thumbnail' />

            <div className={styles.overlay}>
               <div className={styles.icon} ref={thumbIconRef}>
                  <FontAwesomeIcon icon={faCircleInfo} />
               </div>
            </div>
         </div>

         <div className={styles.categoryContent}>
            {/* meta bar */}
            <div className={`${styles.metaBar}`}>
               <div className={styles.right}>
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faComment} />
                     <span>{data.comments}</span>
                  </div>
                  <div className={styles.sep} />
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faHeart} />
                     <span>{data.likes}</span>
                  </div>
               </div>

               <div className={styles.left}>
                  <span>By {data.author}</span>

                  {data.categories.map((ctg, index) => (
                     <React.Fragment key={index}>
                        <div className={styles.sep} />
                        <span className={styles.category}>{ctg}</span>
                     </React.Fragment>
                  ))}
               </div>
            </div>

            {/* Title & Date */}
            <h3 className={styles.title}>
               <span>{data.date.split(',')[0].split(' ').reverse().join(' ')}: </span>
               {data.title}
            </h3>

            {/* Subtitle */}
            <p className={styles.subtitle}>{data.desc}</p>

            {/* buttons */}
            <div className={styles.postFooter}>
               <button className={styles.shareBtn}>
                  <FontAwesomeIcon icon={faShareAlt} />
               </button>
               <button className={styles.readMoreBtn}>Read More</button>
            </div>
         </div>
      </div>
   )
}

export default memo(CategoryItem)
