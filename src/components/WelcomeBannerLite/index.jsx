import React, { memo } from 'react'
import styles from './style.module.scss'
import aboutBanner from '../../assets/imgs/AboutBanner.jpg'

function WelcomeBannerLite() {
   return (
      <section
         className={styles.WelcomeBannerLite}
         style={{ background: `url(${aboutBanner}) no-repeat center / cover` }}
      >
         <div className={`${styles.container} container`}>
            <h1 className={styles.title}>About The Gem</h1>
            <p className={styles.subTitle}>«Travel is the healthiest addiction»</p>
         </div>
      </section>
   )
}

export default memo(WelcomeBannerLite)
