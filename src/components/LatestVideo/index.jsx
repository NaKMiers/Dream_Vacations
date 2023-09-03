import { faExpand, faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import speakerIcon from '../../assets/icons/speakerIcon.png'
import videoThumb2 from '../../assets/images/editorPickedImage3.jpg'
import videoThumb1 from '../../assets/images/highlightThumb4.jpg'
import latestVideoBG from '../../assets/images/topCategoriesBG.jpg'
import videoThumb4 from '../../assets/images/videoThumbnail1.jpg'
import videoThumb3 from '../../assets/images/visionThumbnail2.jpg'
import video1 from '../../assets/videos/video1.mp4'
import video2 from '../../assets/videos/video2.mp4'
import video3 from '../../assets/videos/video3.mp4'
import video4 from '../../assets/videos/video4.mp4'
import SeparatorTitle from '../../components/SeparatorTitle'
import styles from './style.module.scss'
import VideoItem from './videoItem'

const data = [
   {
      id: 1,
      image: videoThumb1,
      title: 'Dolor sit amet consectetur',
      date: 'November 23, 2020',
      video: video1,
   },
   {
      id: 2,
      image: videoThumb2,
      title: 'Dolor sit amet consectetur',
      date: 'November 23, 2020',
      video: video2,
   },
   {
      id: 3,
      image: videoThumb3,
      title: 'Dolor sit amet consectetur',
      date: 'November 23, 2020',
      video: video3,
   },
   {
      id: 4,
      image: videoThumb4,
      title: 'Dolor sit amet consectetur',
      date: 'November 23, 2020',
      video: video4,
   },
]

function LatestVideo() {
   const [videoSrc, setVideoSrc] = useState('')
   const [play, setPlay] = useState(false)
   const [curTime, setCurTime] = useState(0)
   const [time, setTime] = useState('00:00')
   const [duration, setDuration] = useState('00:00')
   const [volume, setVolume] = useState(1)

   const videoWrapperRef = useRef(null)
   const buttonWrapRef = useRef(null)
   const videoModalRef = useRef(null)
   const videoRef = useRef(null)
   const timelineBarRef = useRef(null)
   const volumeWrapperRef = useRef(null)
   const controlsRef = useRef(null)
   const videoPlayBtnRef = useRef(null)
   const timeoutId = useRef(undefined)

   // open modal
   const handleOpenVideoModal = useCallback(() => {
      videoModalRef.current.style.display = 'block'
      setTimeout(() => {
         videoModalRef.current.style.opacity = 1
      }, 1)
   }, [])

   // hide modal
   const handleHideVideoModal = useCallback(() => {
      videoModalRef.current.style.opacity = 0
      setVideoSrc('')
      setPlay(false)
      setCurTime(0)
      setTime('00:00')
      setDuration('00:00')
      setTimeout(() => {
         videoModalRef.current.style.display = 'none'
      }, 510)
   }, [])

   // open modal
   useEffect(() => {
      if (videoSrc) {
         handleOpenVideoModal()
      }
   }, [videoSrc, handleOpenVideoModal])

   // change time podcast
   const handleSeek = useCallback(e => {
      const width = timelineBarRef.current.clientWidth
      const clickX = e.clientX - timelineBarRef.current.getBoundingClientRect().left
      const seekTime = (clickX / width) * videoRef.current.duration
      videoRef.current.currentTime = seekTime
   }, [])

   // format time
   const formatTime = useCallback(time => {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
   }, [])

   // update time
   const handleTimeUpdate = useCallback(() => {
      const currentTime = videoRef.current.currentTime
      const duration = videoRef.current.duration
      const progress = (currentTime / duration) * 100
      setCurTime(progress)
      setTime(formatTime(currentTime))
   }, [formatTime])

   // load duration on mount
   useEffect(() => {
      if (videoRef.current) {
         setTimeout(() => {
            const duration = videoRef.current.duration
            setDuration(formatTime(duration))
         }, 100)
      }
   }, [formatTime])

   // change volume
   const handleChangeVolume = useCallback(e => {
      const rect = e.currentTarget.getBoundingClientRect()
      const offsetY = rect.bottom - e.clientY
      const newVolume = offsetY / rect.height

      if (newVolume >= 0 && newVolume <= 1) {
         setVolume(newVolume)
         videoRef.current.volume = newVolume
      }
   }, [])

   // mute volume
   const handleMuteVolume = useCallback(() => {
      if (volume === 0) {
         setVolume(1)
         videoRef.current.volume = 1
      } else {
         setVolume(0)
         videoRef.current.volume = 0
      }
   }, [volume])

   // show volume bar
   const handleShowVolumeBar = useCallback(() => {
      volumeWrapperRef.current.style.display = 'block'
      setTimeout(() => {
         volumeWrapperRef.current.style.opacity = 1
      }, 1)
   }, [])

   // hide volume bar
   const handleHideVolumeBar = useCallback(() => {
      volumeWrapperRef.current.style.opacity = 0
      setTimeout(() => {
         volumeWrapperRef.current.style.display = 'none'
      }, 210) // duration 0.2s
   }, [])

   // hide play-pause btn
   const handleHideVideoPlayBtn = useCallback(() => {
      videoPlayBtnRef.current.style.opacity = 0
      setTimeout(() => {
         videoPlayBtnRef.current.style.display = 'none'
      }, 510) // duration 0.5s
   }, [])

   // show play-pause btn
   const handleShowVideoPlayBtn = useCallback(() => {
      videoPlayBtnRef.current.style.display = 'flex'
      setTimeout(() => {
         videoPlayBtnRef.current.style.opacity = 1
      }, 0) // duration 0.5s
   }, [])

   // hide controls
   const handleHideControls = useCallback(() => {
      controlsRef.current.style.opacity = 0
      // videoPlayBtnRef.current.style.opacity = 0
      handleHideVideoPlayBtn()
      setTimeout(() => {
         controlsRef.current.style.display = 'none'
         // videoPlayBtnRef.current.style.display = 'none'
      }, 510) // duration 0.5s
   }, [handleHideVideoPlayBtn])

   // show controls
   const handleShowControls = useCallback(() => {
      controlsRef.current.style.display = 'flex'
      setTimeout(() => {
         controlsRef.current.style.opacity = 1
      }, 1) // duration 0.5s
   }, [])

   // play & pause
   const handlePlayPause = useCallback(() => {
      if (play) {
         videoRef.current.pause()
         setPlay(false)
         handleShowVideoPlayBtn()
      } else {
         videoRef.current.play()
         setPlay(true)
         handleHideVideoPlayBtn()
      }
   }, [play, handleShowVideoPlayBtn, handleHideVideoPlayBtn])

   // hide controls on mouse leave > 1s
   const handleHideControlsOnLeave = useCallback(() => {
      timeoutId.current = setTimeout(() => {
         handleHideControls()
      }, 1000)
   }, [handleHideControls])

   // cancel hide controls on mouse over after mouse leave
   const handleMouseOver = useCallback(() => {
      clearTimeout(timeoutId.current)
   }, [])

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (videoWrapperRef.current && buttonWrapRef.current) {
         const elements = [...videoWrapperRef.current.children, buttonWrapRef.current]

         elements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.classList.add('floatUp')
               e.classList.add(styles.appeared)
            }
         })

         // remove event when all are appeared
         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (countAppeared === elements.length) {
            console.log('remove---LatestVideo')
            window.removeEventListener('scroll', handleScroll)
         }
      }
   }, [])

   // appear on scroll
   useEffect(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   return (
      <section
         className={styles.LatestVideo}
         style={{ background: `url(${latestVideoBG}) no-repeat center / cover` }}
      >
         <SeparatorTitle title='Latest Video' />

         <div className={`${styles.container} container`}>
            <div className={styles.videoWrapper} ref={videoWrapperRef}>
               {data.map(video => (
                  <VideoItem key={video.id} data={video} setVideoSrc={setVideoSrc} />
               ))}
            </div>

            <div className={styles.buttonWrap} ref={buttonWrapRef}>
               <button className={styles.button}>View All</button>
            </div>
         </div>

         <div className={styles.watchVideoModal} ref={videoModalRef} onClick={handleHideVideoModal}>
            <div
               className={styles.modalBody}
               onMouseMove={handleShowControls}
               onMouseLeave={handleHideControlsOnLeave}
               onMouseOver={handleMouseOver}
               onClick={e => e.stopPropagation()}
            >
               <div
                  className={styles.videoPlayBtn}
                  ref={videoPlayBtnRef}
                  onClick={() => {
                     handlePlayPause()
                     handleHideControls()
                  }}
               >
                  <FontAwesomeIcon icon={play ? faPauseCircle : faPlayCircle} />
               </div>

               <div className={styles.videoWrap}>
                  <video
                     src={videoSrc}
                     typeof='video/mp4'
                     ref={videoRef}
                     onTimeUpdate={handleTimeUpdate}
                  />
               </div>
               <div className={styles.controls} ref={controlsRef}>
                  <div className={`${styles.controlBtn} ${styles.playBtn}`}>
                     <div className={styles.icon} onClick={handlePlayPause}>
                        <FontAwesomeIcon icon={play ? faPauseCircle : faPlayCircle} />
                     </div>
                  </div>

                  <div className={styles.timelineWrap}>
                     <div className={styles.time}>
                        <span>{time}</span>
                        <span>{duration}</span>
                     </div>

                     <div className={styles.timelineBar} ref={timelineBarRef} onClick={handleSeek}>
                        <div style={{ width: `${curTime}%` }} />
                     </div>
                  </div>

                  <div className={`${styles.controlBtn} ${styles.speakerBtn}`}>
                     <div
                        className={styles.icon}
                        onClick={handleMuteVolume}
                        onMouseOver={handleShowVolumeBar}
                     >
                        <img src={speakerIcon} alt='icon' />
                     </div>
                     <div
                        className={styles.volumeWrapper}
                        ref={volumeWrapperRef}
                        onMouseLeave={handleHideVolumeBar}
                     >
                        <div className={styles.volumeBar} onMouseDown={handleChangeVolume}>
                           <div style={{ height: `${volume * 100}%` }} />
                           <div style={{ bottom: `${volume * 100}%` }} />
                        </div>
                     </div>
                  </div>
                  <div className={`${styles.controlBtn} ${styles.fullBtn}`}>
                     <div className={styles.icon} onClick={handlePlayPause}>
                        <FontAwesomeIcon icon={faExpand} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(LatestVideo)
