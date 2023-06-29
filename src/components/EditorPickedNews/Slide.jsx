import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

function Slide({ data, nextSlide, prevSlide }) {
   return (
      <div className={styles.slide}>
         <img src={data.image} alt='thumb' />

         <div className={styles.content}>
            <Link to='/blogs/1'>
               <h5 className={styles.title}>
                  <span>{data.date}:</span> <span>{data.title}</span>
               </h5>
            </Link>

            <p className={styles.desc}>{data.desc}</p>

            <p className={styles.author}>By {data.author}</p>

            <div className={styles.btnWrap}>
               <button onClick={prevSlide}>
                  <FontAwesomeIcon icon={faChevronLeft} />
               </button>
               <button onClick={nextSlide}>
                  <FontAwesomeIcon icon={faChevronRight} />
               </button>
            </div>
         </div>
      </div>
   )
}

export default Slide
