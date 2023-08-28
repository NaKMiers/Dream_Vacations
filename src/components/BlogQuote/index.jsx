import React, { memo } from 'react'
import styles from './style.module.scss'

function BlogQuote({ data, type2, gridItem, byAuthor, style }) {
   console.log(data)
   return (
      <div
         className={`${styles.BlogQuote} ${type2 ? styles.type2 : ''} ${
            gridItem ? styles.gridItem + ' grid-item' : ''
         }`}
         style={style}
      >
         <div className={`${styles.content} ${byAuthor ? styles.byAuthor : ''}`}>
            <h3 className={styles.title}>
               <span>{data.title[0]}</span>
               <span> {data.title[1]}</span>
               <span> {data.title[2]}</span>
            </h3>
            <span className={styles.author}>{data.author}</span>
            <span className={styles.quoteIcon}>”</span>
         </div>
      </div>
   )
}

export default memo(BlogQuote)
