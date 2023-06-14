import React, { memo } from 'react'
import styles from './style.module.scss'

function BlogQuote({ data }) {
   return (
      <div className={styles.BlogQuote}>
         <div className={styles.content}>
            <h3 className={styles.title}>
               <span>{data.title[0]}</span>
               <span> {data.title[1]}</span>
               <span> {data.title[2]}</span>
            </h3>
            <span className={styles.quoteIcon}>”</span>
         </div>
      </div>
   )
}

export default memo(BlogQuote)
