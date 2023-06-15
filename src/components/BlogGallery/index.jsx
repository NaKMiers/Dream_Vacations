import React, { memo } from 'react'
import styles from './style.module.scss'
import BlogGalleryItem from '../BlogGalleryItem'

function BlogGallery() {
   return (
      <section className={styles.BlogGallery}>
         <div className={styles.container}>
            <div className={styles.row}>
               <div className={`${styles.col} ${styles.col1}`}>
                  <BlogGalleryItem />
               </div>
               <div className={`${styles.col} ${styles.col2}`}>
                  <BlogGalleryItem extraSmall />
                  <BlogGalleryItem extraSmall />
                  <BlogGalleryItem extraSmall />
                  <BlogGalleryItem extraSmall />
               </div>
            </div>

            <div className={styles.row}>
               <div className={`${styles.col} ${styles.col1}`}>
                  <BlogGalleryItem small />
               </div>
               <div className={`${styles.col} ${styles.col2}`}>
                  <BlogGalleryItem extraSmall />
                  <BlogGalleryItem extraSmall />
               </div>
            </div>
            <div className={styles.row}>
               <div className={`${styles.col} ${styles.col1}`}>
                  <BlogGalleryItem extraSmall />
                  <BlogGalleryItem extraSmall />
               </div>
               <div className={`${styles.col} ${styles.col2}`}>
                  <BlogGalleryItem extraSmall />
                  <BlogGalleryItem extraSmall />
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(BlogGallery)
