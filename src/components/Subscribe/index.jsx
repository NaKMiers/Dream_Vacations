import React, { memo } from 'react'
import styles from './style.module.scss'

function Subscribe() {
   return (
      <section className={styles.Subscribe}>
         <div className={`${styles.container} container`}>
            <div className={styles.left}>
               <h1 className={styles.title}>Subscribe</h1>
               <h2 className={styles.subTitle}>To Our Newsletter</h2>
               <p className={styles.desc}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor minim
                  veniam quis
               </p>
            </div>

            <div className={styles.right}>
               <input
                  className={styles.input}
                  type='email'
                  name='email'
                  placeholder='Enter your E-mail...'
               />
               <button className={styles.btn}>SUBSCRIBE</button>
            </div>
         </div>
      </section>
   )
}

export default memo(Subscribe)
