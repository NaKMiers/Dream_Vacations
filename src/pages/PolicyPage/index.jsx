import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import PolicyDoc from '../../components/PolicyDoc'
import policyBanner from '../../assets/images/policyBanner.jpg'

function PolicyPage() {
   return (
      <div className={styles.PolicyPage}>
         <WelcomeBannerLite
            title='Privacy Policy'
            subTitle='«Travel is the healthiest addiction»'
            background={policyBanner}
         />

         <PolicyDoc />
      </div>
   )
}

export default memo(PolicyPage)
