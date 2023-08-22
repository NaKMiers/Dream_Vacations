import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import Greeting from '../../components/Greeting'
import Stats from '../../components/Stats'

function AboutUsPage() {
   return (
      <div className={styles.AboutUsPage}>
         <WelcomeBannerLite />
         <Greeting />
         <Stats />
      </div>
   )
}

export default memo(AboutUsPage)
