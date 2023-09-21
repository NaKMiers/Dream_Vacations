import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import adventureBanner from '../../assets/images/adventureBanner.jpg'
import AdventureCategories from '../../components/AdventureCategories'

function AdventurePage() {
   return (
      <div className={styles.AdventurePage}>
         <WelcomeBannerLite
            title='Adventure'
            subTitle='«Travel is the healthiest addiction»'
            background={adventureBanner}
         />

         <AdventureCategories />
      </div>
   )
}

export default memo(AdventurePage)
