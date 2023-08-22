import React, { memo, useRef, useState } from 'react'
import statsBackground from '../../assets/imgs/statsBackground.jpg'
import Odo from './odo'
import styles from './style.module.scss'

function Stats() {
   const counterNumberRef1 = useRef(null)
   const [run, setRun] = useState(false)

   const renderOdos = value =>
      value
         .split('')
         .map((element, index) => (
            <Odo key={index} dataValue={+element} time={3} delay={index / 10} run={run} index={index} />
         ))

   return (
      <section
         className={styles.Stats}
         style={{ background: `url(${statsBackground}) no-repeat center / cover` }}
      >
         <div className={`${styles.container} container`}>
            <p className={styles.subTitle}>
               Our goal at Vacations & Travel TheGem Blog is to connect our readers and audience with the
               vast amount of travel destinations throughout our wonderful planet.
            </p>

            <div className={styles.statWraper}>
               <div className={styles.statItem}>
                  <span
                     className={styles.statTitle}
                     style={{ color: '#608fe6' }}
                     onClick={() => setRun(!run)}
                  >
                     Facebook
                  </span>

                  <div className={styles.counterNumber} ref={counterNumberRef1} data-value='77500'>
                     {renderOdos('77500')}
                     <div>+</div>
                  </div>

                  <span className={styles.statUnit}>followers</span>
               </div>

               <div className={styles.statItem}>
                  <span
                     className={styles.statTitle}
                     style={{ color: '#4dd8e1' }}
                     onClick={() => setRun(!run)}
                  >
                     Twitter
                  </span>

                  <div className={styles.counterNumber} ref={counterNumberRef1} data-value='77500'>
                     {renderOdos('6100')}
                     <div>+</div>
                  </div>

                  <span className={styles.statUnit}>followers</span>
               </div>

               <div className={styles.statItem}>
                  <span
                     className={styles.statTitle}
                     style={{ color: '#79dd97' }}
                     onClick={() => setRun(!run)}
                  >
                     Instagram
                  </span>

                  <div className={styles.counterNumber} ref={counterNumberRef1} data-value='77500'>
                     {renderOdos('2500')}
                     <div>+</div>
                  </div>

                  <span className={styles.statUnit}>followers</span>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(Stats)
