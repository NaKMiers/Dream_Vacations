import React, { memo } from 'react'
import styles from './style.module.scss'
import getInTouchBG from '../../assets/images/getInTouchBG.jpg'
import SeparatorTitle from '../../components/SeparatorTitle'

function GetInTouch() {
   return (
      <section
         className={styles.GetInTouch}
         style={{ background: `url(${getInTouchBG}) no-repeat center / cover` }}
      >
         <SeparatorTitle title='Get In Touch With Us' style={{ marginBottom: 30 }} />

         <div className={`${styles.container} container`}>
            <p className={styles.desc}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod exercitation
               tempor incididunt ut labore et dolore magna aliqua enim!
            </p>

            <form className={styles.getInTouchForm} onSubmit={e => e.preventDefault()}>
               <div className={styles.formInput}>
                  <input type='text' placeholder='Name*' required />
               </div>
               <div className={styles.formInput}>
                  <input type='email' placeholder='Email*' required />
               </div>
               <div className={styles.formInput}>
                  <input type='text' placeholder='Webiste*' required />
               </div>
               <div className={styles.formTextArea}>
                  <textarea
                     name='message'
                     cols='30'
                     rows='10'
                     placeholder='Message*'
                     required
                  ></textarea>
               </div>

               <div className={styles.buttonWrap}>
                  <button className={`${styles.btn} button`}>Submit Message</button>
               </div>
            </form>
         </div>
      </section>
   )
}

export default memo(GetInTouch)
