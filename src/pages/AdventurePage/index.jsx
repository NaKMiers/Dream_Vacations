import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import adventureBanner from '../../assets/images/adventureBanner.jpg'

function AdventurePage() {
   return (
      <div className={styles.AdventurePage}>
         <WelcomeBannerLite
            title='Adventure'
            subTitle='«Travel is the healthiest addiction»'
            background={adventureBanner}
         />
      </div>
   )
}

export default memo(AdventurePage)
