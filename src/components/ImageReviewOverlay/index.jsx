import {
   faArrowLeft,
   faArrowRight,
   faPause,
   faPlay,
   faSearch,
   faX,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../actions'
import styles from './style.module.scss'

function ImageReviewOverlay() {
   const { curImage, imageList, autoPlay } = useSelector(state => state.imageReview)
   const dispatch = useDispatch()

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
         dispatch(actions.close())
      }, 510) // imageReview duration 0.5s

      setTimeout(() => {
         imageRef.current.style.opacity = 0
      }, 300) // imageReviewRef transition 0.5s - imageRef transition - 0.2s = 0.3s
   }, [dispatch])

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
   useEffect(() => {
      if (curImage) {
         if (imageList.length > 0) {
            const index = imageList.findIndex(image => image === curImage)
            setCurNumber(index + 1)
         }
         handleOpenImageReview()
      }
   }, [curImage, imageList, handleOpenImageReview])

   // next image review
   const handleNextImage = useCallback(() => {
      if (!isChanging) {
         setChanging(true)
         const index = imageList.findIndex(image => image === curImage)
         setCurNumber(index + 1)
         imageRef.current.style.opacity = 0

         setTimeout(() => {
            index === imageList.length - 1
               ? dispatch(actions.reviewImage(imageList[0]))
               : dispatch(actions.reviewImage(imageList[index + 1]))

            imageRef.current.style.opacity = 1
            setChanging(false)
         }, 210) // imageRef transition: 0.2s
      }
   }, [imageList, curImage, isChanging, dispatch])

   // prev image review
   const handlePrevImage = useCallback(() => {
      if (!isChanging) {
         setChanging(true)
         const index = imageList.findIndex(image => image === curImage)
         imageRef.current.style.opacity = 0

         setTimeout(() => {
            index === 0
               ? dispatch(actions.reviewImage(imageList[imageList.length - 1]))
               : dispatch(actions.reviewImage(imageList[index - 1]))

            imageRef.current.style.opacity = 1
            setChanging(false)
         }, 200)
      }
   }, [imageList, curImage, isChanging, dispatch])

   // auto play
   useEffect(() => {
      let interval
      let timeout

      if (imageList.length > 0) {
         if (autoPlay) {
            playBarRef.current.classList.add(styles.replay)

            timeout = setTimeout(() => {
               handleNextImage()
            }, 3290) // autoPlay: 3.5s - imageRef transition 0.2s = 3.3s
         } else {
            playBarRef.current.classList.remove(styles.replay)
         }
      }

      return () => {
         clearInterval(interval)
         clearInterval(timeout)
      }
   }, [autoPlay, imageList, curImage, dispatch, handleNextImage])

   return (
      <div className={styles.ImageReviewOverlay} ref={imageReviewRef} onClick={handleClickOutSide}>
         {imageList.length > 0 && (
            <>
               <div className={styles.playBar} ref={playBarRef}>
                  <div />
               </div>
               <div className={styles.number}>
                  {curNumber}/{imageList?.length}
               </div>
            </>
         )}

         <div className={styles.buttonWrap}>
            <button
               onClick={e => {
                  e.stopPropagation()
                  setZoom(!isZoom)
               }}
            >
               <FontAwesomeIcon icon={faSearch} />
            </button>

            {imageList.length > 0 && (
               <button
                  onClick={e => {
                     e.stopPropagation()
                     dispatch(actions.play())
                  }}
               >
                  <FontAwesomeIcon icon={autoPlay ? faPause : faPlay} />
               </button>
            )}

            <button>
               <FontAwesomeIcon icon={faX} />
            </button>
         </div>

         {imageList.length > 0 && (
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
         )}

         <div className={`${styles.image} ${isZoom ? styles.zoom : ''}`} ref={imageRef}>
            <img src={curImage} alt='thumbnail' onClick={() => setZoom(!isZoom)} />
         </div>
      </div>
   )
}

export default memo(ImageReviewOverlay)
