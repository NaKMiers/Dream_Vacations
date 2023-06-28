import React, { memo } from 'react'
import styles from './style.module.scss'

function BlogType3({ post }) {
   return <div className={styles.BlogType3}>BlogType3</div>
}

export default memo(BlogType3)
