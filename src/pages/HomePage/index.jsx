import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBanner from '../../components/WelcomeBanner'

function HomePage() {
   return (
      <div className={styles.HomePage}>
         <WelcomeBanner />
      </div>
   )
}

export default memo(HomePage)
