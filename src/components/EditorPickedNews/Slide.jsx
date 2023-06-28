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
                  <span>{data.date}:</span> <span>Medium Blog Post</span>
               </h5>
            </Link>

            <p className={styles.desc}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua. Enim ad minim veniam, quis ut aliquip exea
            </p>

            <p className={styles.author}>{data.author}</p>

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
