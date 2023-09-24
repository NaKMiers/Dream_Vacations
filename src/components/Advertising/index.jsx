import React, { memo } from 'react'
import styles from './styles.module.scss'
import SeparatorTitle from '../../components/SeparatorTitle'
import advertiseBanner from '../../assets/images/advertiseBanner2.jpg'

function Advertising() {
   return (
      <section className={styles.Advertising}>
         <div className={`${styles.container} container`}>
            <SeparatorTitle title='Advertise With Us' dark style={{ marginBottom: '30px' }} />

            <p className={styles.paragraph}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
               exercitationtempor incididunt ut labore et dolore magna aliqua enim!
            </p>
            <p className={styles.paragraph}>
               If you would like to advertise with us, please contact our Digital Sales Planner:
            </p>

            <h3 className={styles.email}>
               <a href='mailto:advertising@domain.ltd'>advertising@domain.ltd</a>
            </h3>

            <div className={styles.advertiseBanner}>
               <img src={advertiseBanner} alt='advertise-banner' />
            </div>
         </div>
      </section>
   )
}

export default memo(Advertising)
