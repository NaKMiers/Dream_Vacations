import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faArrowLeft,
   faArrowRight,
   faPause,
   faPlay,
   faSearch,
   faX,
} from '@fortawesome/free-solid-svg-icons'
// import { useSelector, useDispatch } from 'react-redux'
// import actions from '../../actions'

import flickrImg1 from '../../assets/imgs/flickrImg1.jpg'

function ImageReviewOverlay() {
   // const { image: imageReview, autoPlayImages, autoPlay } = useSelector(state => state.imageReview)
   // const dispatch = useDispatch()

   const [isZoom, setZoom] = useState(false)
   const [isChanging, setChanging] = useState(false)
   const [curNumber, setCurNumber] = useState(NaN)
   const imageReviewRef = useRef(null)
   const imageRef = useRef(null)
   const playBarRef = useRef(null)

   // open image review
   const handleOpenImageReview = useCallback(() => {
      imageReviewRef.current.style.display = 'flex'
      setTimeout(() => {
         imageReviewRef.current.style.opacity = 1
      }, 0)

      setTimeout(() => {
         imageRef.current.style.opacity = 1
      }, 300) // imageReviewRef transition 0.5s - imageRef transition - 0.2s = 0.3s
   }, [])

   // close image review
   const handleCloseImageReview = useCallback(() => {
      imageReviewRef.current.style.opacity = 0
      setTimeout(() => {
         imageReviewRef.current.style.display = 'none'
         // dispatch(actions.close())
      }, 510) // imageReview duration 0.5s

      setTimeout(() => {
         imageRef.current.style.opacity = 0
      }, 300) // imageReviewRef transition 0.5s - imageRef transition - 0.2s = 0.3s
   }, [])

   // close when click out side
   const handleClickOutSide = useCallback(
      e => {
         if (imageRef.current && !imageRef.current.contains(e.target)) {
            handleCloseImageReview()
         }
      },
      [handleCloseImageReview]
   )

   // open image review
   // useEffect(() => {
   //    if (imageReview) {
   //       if (autoPlayImages.length > 0) {
   //          const index = autoPlayImages.findIndex(image => image === imageReview)
   //          setCurNumber(index + 1)
   //       }
   //       handleOpenImageReview()
   //    }
   // }, [imageReview, autoPlayImages, handleOpenImageReview])

   // next image review
   // const handleNextImage = useCallback(() => {
   //    if (!isChanging) {
   //       setChanging(true)
   //       const index = autoPlayImages.findIndex(image => image === imageReview)
   //       setCurNumber(index + 1)
   //       imageRef.current.style.opacity = 0

   //       setTimeout(() => {
   //          index === autoPlayImages.length - 1
   //             ? dispatch(actions.reviewImage(autoPlayImages[0]))
   //             : dispatch(actions.reviewImage(autoPlayImages[index + 1]))

   //          imageRef.current.style.opacity = 1
   //          setChanging(false)
   //       }, 210) // imageRef transition: 0.2s
   //    }
   // }, [autoPlayImages, imageReview, isChanging, dispatch])

   // prev image review
   // const handlePrevImage = useCallback(() => {
   //    if (!isChanging) {
   //       setChanging(true)
   //       const index = autoPlayImages.findIndex(image => image === imageReview)
   //       imageRef.current.style.opacity = 0

   //       setTimeout(() => {
   //          index === 0
   //             ? dispatch(actions.reviewImage(autoPlayImages[autoPlayImages.length - 1]))
   //             : dispatch(actions.reviewImage(autoPlayImages[index - 1]))

   //          imageRef.current.style.opacity = 1
   //          setChanging(false)
   //       }, 200)
   //    }
   // }, [autoPlayImages, imageReview, isChanging, dispatch])

   // auto play
   // useEffect(() => {
   //    let interval
   //    let timeout

   //    if (autoPlayImages.length > 0) {
   //       if (autoPlay) {
   //          playBarRef.current.classList.add(styles.replay)

   //          timeout = setTimeout(() => {
   //             handleNextImage()
   //          }, 3290) // autoPlay: 3.5s - imageRef transition 0.2s = 3.3s
   //       } else {
   //          playBarRef.current.classList.remove(styles.replay)
   //       }
   //    }

   //    return () => {
   //       clearInterval(interval)
   //       clearInterval(timeout)
   //    }
   // }, [autoPlay, autoPlayImages, imageReview, dispatch, handleNextImage])

   return (
      <div className={styles.imageReview} ref={imageReviewRef} onClick={handleClickOutSide}>
         {/* {autoPlayImages.length > 0 && (
            <>
               <div className={styles.playBar} ref={playBarRef}>
                  <div />
               </div>
               <div className={styles.number}>
                  {curNumber}/{autoPlayImages?.length}
               </div>
            </>
         )} */}

         <div className={styles.buttonWrap}>
            <button
               onClick={e => {
                  e.stopPropagation()
                  setZoom(!isZoom)
               }}
            >
               <FontAwesomeIcon icon={faSearch} />
            </button>

            {/* {autoPlayImages.length > 0 && (
               <button
                  onClick={e => {
                     e.stopPropagation()
                     dispatch(actions.autoPlay())
                  }}
               >
                  <FontAwesomeIcon icon={autoPlay ? faPause : faPlay} />
               </button>
            )} */}

            <button>
               <FontAwesomeIcon icon={faX} />
            </button>
         </div>

         {/* {autoPlayImages.length > 0 && (
            <>
               <button
                  className={`${styles.modalBtn} ${styles.nextBtn}`}
                  onClick={e => {
                     e.stopPropagation()
                     handlePrevImage()
                  }}
               >
                  <FontAwesomeIcon icon={faArrowLeft} />
               </button>
               <button
                  className={`${styles.modalBtn} ${styles.prevBtn}`}
                  onClick={e => {
                     e.stopPropagation()
                     handleNextImage()
                  }}
               >
                  <FontAwesomeIcon icon={faArrowRight} />
               </button>
            </>
         )} */}

         <div className={`${styles.image} ${isZoom ? styles.zoom : ''}`} ref={imageRef}>
            <img src={flickrImg1} alt='thumbnail' onClick={() => setZoom(!isZoom)} />
         </div>
      </div>
   )
}

export default memo(ImageReviewOverlay)
