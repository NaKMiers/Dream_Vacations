import React, { memo } from 'react'
import styles from './style.module.scss'

function HomePage() {
   return <div className={styles.HomePage}>HomePage</div>
}

export default memo(HomePage)
