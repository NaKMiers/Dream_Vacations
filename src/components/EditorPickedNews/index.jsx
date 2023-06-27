import React from 'react'
import { memo } from 'react'
import styles from './style.module.scss'
import SeparatorTitle from '../../components/SeparatorTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function EditorPickedNews() {
   return (
      <section className={styles.EditorPickedNews}>
         <SeparatorTitle title='Editor’s Picked News' dark />
         <div className={`${styles.container} container`}>
            <div className={styles.slider}>
               <div className={styles.slideTrack}>
                  <div className={styles.slide}>
                     <button>
                        <FontAwesomeIcon icon={faChevronLeft} />
                     </button>
                     <button>
                        <FontAwesomeIcon icon={faChevronLeft} />
                     </button>
                  </div>
               </div>
            </div>
            <div className={styles.postWrap}>
               <div className={styles.postItem}></div>
            </div>
         </div>
      </section>
   )
}

export default memo(EditorPickedNews)
