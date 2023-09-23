import React, { memo } from 'react'
import styles from './styles.module.scss'
import SeparatorTitle from '../../components/SeparatorTitle'

function Advertising() {
   return (
      <section className={styles.Advertising}>
         <div className={`${styles.container} container`}>
            <SeparatorTitle
               title='Advertise With Us'
               dark
               style={{ marginBottom: '1.1rem', background: 'aquamarine' }}
            />
         </div>
      </section>
   )
}

export default memo(Advertising)
