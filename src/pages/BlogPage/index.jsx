import React, { memo } from 'react'
import styles from './style.module.scss'

function BlogPage() {
   return <div className={styles.BlogPage}>BlogPage</div>
}

export default memo(BlogPage)
