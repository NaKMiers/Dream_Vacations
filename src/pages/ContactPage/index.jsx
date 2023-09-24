import React, { memo } from 'react'
import contactBanner from '../../assets/images/contactBanner.jpg'
import Greeting from '../../components/Greeting'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import Advertising from '../../components/Advertising'
import GetInTouch from '../../components/GetInTouch'
import styles from './style.module.scss'
import { faClock, faEnvelope, faHeadphones, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function ContactPage() {
   return (
      <div className={styles.ContactPage}>
         <WelcomeBannerLite
            title='Contact Us'
            subTitle='«Travel is the healthiest addiction»'
            background={contactBanner}
         />

         <Greeting
            type='contact'
            title='Contact Information'
            behindTitle='Contact'
            contents={[
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod exercitationtempor incididunt ut labore et dolore magna aliqua enim!',
            ]}
            contactInfomations={[
               {
                  icon: faLocationDot,
                  label: 'Address',
                  color: '#96e5ef',
                  in4s: ['908 Hampshire Avenue', 'Washington, DC'],
               },
               {
                  icon: faHeadphones,
                  label: 'Phone',
                  color: '#c2ebce',
                  in4s: ['Phone: +1 916-875-2235', 'Mobile: +1 916-875-2235'],
               },
               {
                  icon: faEnvelope,
                  label: 'E-Mail',
                  color: '#aed7f2',
                  in4s: ['support@domain.ltd', 'info@domain.ltd'],
               },
               {
                  icon: faClock,
                  label: 'Working Hours',
                  color: '#a9c2f0',
                  in4s: ['Mn.-Fr.: 9:00 – 22:00', 'Sat.: 11:00 – 20:00'],
               },
            ]}
         />

         <GetInTouch />
         <Advertising />
      </div>
   )
}

export default memo(ContactPage)
