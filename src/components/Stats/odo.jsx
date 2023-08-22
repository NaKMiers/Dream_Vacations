import React, { memo } from 'react'
import styles from './style.module.scss'

function Odo({ dataValue, time, delay, run, index }) {
   const odoLength = 30

   const renderRandom = () => {
      console.log('index: ', index)
      console.log('dataValue: ', dataValue)

      return index === 0
         ? Array.from({ length: dataValue + 1 }, (_, index) => index)
         : Array.from({ length: odoLength }, (_, index) =>
              index === 0 ? 0 : index === odoLength - 1 ? dataValue : Math.floor(Math.random() * 10)
           )
   }

   return (
      <div className={styles.odoWrap}>
         <div
            style={{
               transition: `${time}s ease-out ${delay}s`,
               marginTop: `calc(-${
                  run ? (index === 0 ? dataValue : odoLength - 1) : 0
               } * var(--height))`,
            }}
            className={styles.odoTrack}
         >
            {renderRandom().map((value, i) => (
               <div key={i}>{value}</div>
            ))}
         </div>
      </div>
   )
}

export default memo(Odo)
