import React, { memo } from 'react'
import styles from './style.module.scss'

function Footer() {
   return (
      <footer className={styles.Footer}>
         <div className={`${styles.container} container`}></div>
      </footer>
   )
}

export default memo(Footer)
