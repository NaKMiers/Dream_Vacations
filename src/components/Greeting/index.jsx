import React, { memo } from 'react'
import styles from './style.module.scss'
import aboutImage from '../../assets/imgs/aboutImage.jpg'

function Greeting() {
   return (
      <section className={styles.Greeting}>
         <div className={`${styles.container} container`}>
            <div className={styles.title}>
               <h1>Welcome to TheGem Travel Blog</h1>
               <span className={styles.textBackground}>Welcome</span>
            </div>

            <p className={styles.paragraph}>
               Our goal at Vacations & Travel TheGem Blog is to connect our readers and audience with the
               vast amount of travel destinations throughout our wonderful planet.
            </p>

            <p className={styles.paragraph}>
               Our mission is to inspire people to discover unique locations and show them ways to plan
               and book their dream vacation. Established in 2000, Vacations & Travel magazine is highly
               respected and the longest-running quarterly travel blog title.
            </p>

            <div className={styles.image}>
               <img src={aboutImage} alt='about' />
            </div>
         </div>
      </section>
   )
}

export default memo(Greeting)
