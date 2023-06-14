import { faComment, faHeart, faPlusCircle, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authorAvt1 from '../../assets/imgs/authorAvt1.jpeg'
import facebook from '../../assets/imgs/facebook.png'
import linkedin from '../../assets/imgs/linkedin.png'
import pinterest from '../../assets/imgs/pinterest.png'
import reddit from '../../assets/imgs/reddit.png'
import tumblr from '../../assets/imgs/tumblr.png'
import twitter from '../../assets/imgs/twitter.png'
import styles from './style.module.scss'

function BlogType2({ data }) {
   const navigate = useNavigate()
   const [showSocials, setShowSocials] = useState()

   return (
      <div className={styles.BlogType2}>
         <div className={styles.thumbnail} onClick={() => navigate('/blogs/1')}>
            <img src={data.image} alt='blog' />

            <div className={styles.overlay}>
               <div className={styles.background}></div>
               <div className={styles.icon}>
                  <FontAwesomeIcon icon={faPlusCircle} />
               </div>
            </div>
         </div>

         <div className={styles.content}>
            <div className={styles.author}>
               <img src={authorAvt1} alt='avatar' />
               <span className={styles.name}>{data.author}</span> -
               <span className={styles.date}>{data.date}</span>
            </div>
            <h4 className={styles.title} onClick={() => navigate('/blogs/1')}>
               {data.title}
            </h4>
            <p className={styles.desc}>{data.desc}</p>

            <div className={styles.bottomWrap}>
               <div className={`${styles.icon} ${styles.commentIcon} ${showSocials ? styles.show : ''}`}>
                  <FontAwesomeIcon icon={faComment} />
                  <span>{data.comments}</span>
               </div>

               <div className={`${styles.icon} ${styles.heartIcon} ${showSocials ? styles.show : ''}`}>
                  <FontAwesomeIcon icon={faHeart} />
                  <span>{data.likes}</span>
               </div>

               <div className={`${styles.socialsWrap} ${showSocials ? styles.show : ''}`}>
                  <a
                     href='https://www.facebook.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialItem}
                  >
                     <img src={facebook} alt='social' />
                  </a>
                  <a
                     href='https://www.facebook.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialItem}
                  >
                     <img src={twitter} alt='social' />
                  </a>
                  <a
                     href='https://www.facebook.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialItem}
                  >
                     <img src={pinterest} alt='social' />
                  </a>
                  <a
                     href='https://www.facebook.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialItem}
                  >
                     <img src={tumblr} alt='social' />
                  </a>
                  <a
                     href='https://www.facebook.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialItem}
                  >
                     <img src={linkedin} alt='social' />
                  </a>
                  <a
                     href='https://www.facebook.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialItem}
                  >
                     <img src={reddit} alt='social' />
                  </a>
               </div>

               <div
                  className={`${styles.icon} ${styles.shareIcon}`}
                  onClick={() => setShowSocials(!showSocials)}
               >
                  <FontAwesomeIcon icon={faShareAlt} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(BlogType2)
