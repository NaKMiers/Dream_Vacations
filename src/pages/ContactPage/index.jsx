import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import contactBanner from '../../assets/images/contactBanner.jpg'

function ContactPage() {
   return (
      <div className={styles.ContactPage}>
         <WelcomeBannerLite
            title='Contact Us'
            subTitle='«Travel is the healthiest addiction»'
            background={contactBanner}
         />
      </div>
   )
}

export default memo(ContactPage)
