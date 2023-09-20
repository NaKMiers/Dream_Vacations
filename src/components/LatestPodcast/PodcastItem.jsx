import { faPauseCircle, faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { faCommentAlt, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import speakerIcon from '../../assets/icons/speakerIcon.png'
import muteIcon from '../../assets/icons/speakerMuteIcon.png'
import styles from './style.module.scss'

function PostcastItem({ data, type2 }) {
   const [play, setPlay] = useState(false)
   const [curTime, setCurTime] = useState(0)
   const [time, setTime] = useState('00:00')
   const [duration, setDuration] = useState('00:00')
   const [volume, setVolume] = useState(1)

   const audioRef = useRef(null)
   const timelineBarRef = useRef(null)
   const volumeWrapperRef = useRef(null)

   // change time podcast
   const handleSeek = useCallback(e => {
      const width = timelineBarRef.current.clientWidth
      const clickX = e.clientX - timelineBarRef.current.getBoundingClientRect().left
      const seekTime = (clickX / width) * audioRef.current.duration
      audioRef.current.currentTime = seekTime
   }, [])

   // play & pause
   const handlePlayPause = useCallback(() => {
      if (play) {
         audioRef.current.pause()
         setPlay(false)
      } else {
         audioRef.current.play()
         setPlay(true)
      }
   }, [play])

   // format time
   const formatTime = useCallback(time => {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
   }, [])

   // update time
   const handleTimeUpdate = useCallback(() => {
      const currentTime = audioRef.current.currentTime
      const duration = audioRef.current.duration
      const progress = (currentTime / duration) * 100
      setCurTime(progress)
      setTime(formatTime(currentTime))
   }, [formatTime])

   // load duration on mount
   useEffect(() => {
      if (audioRef.current) {
         setTimeout(() => {
            const duration = audioRef.current.duration
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
         audioRef.current.volume = newVolume
      }
   }, [])

   // mute volume
   const handleMuteVolume = useCallback(() => {
      if (volume === 0) {
         setVolume(1)
         audioRef.current.volume = 1
      } else {
         setVolume(0)
         audioRef.current.volume = 0
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

   return (
      <div className={`${styles.podcastItem} ${type2 ? styles.type2 : ''}`}>
         <audio src={data.audio} ref={audioRef} type='audio/mpeg' onTimeUpdate={handleTimeUpdate} />

         <div className={styles.podcastItemWrap}>
            <div className={`${styles.podcastControls} ${type2 ? styles.type2 : ''}`}>
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
                     <img src={volume > 0 ? speakerIcon : muteIcon} alt='icon' />
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
            </div>

            <div className={`${styles.podcastBody} ${type2 ? styles.type2 : ''}`}>
               <div className={styles.author}>
                  <div className={styles.avatar}>
                     <img src={data.avatar} alt='avatar' />
                  </div>
                  <span className={styles.name}>By {data.author}</span> -
                  <span className={styles.date}>{data.date}</span>
               </div>

               <h4 className={styles.title}>
                  <Link to='/blogs/1'>{data.title}</Link>
               </h4>

               <p className={styles.desc}>{data.desc}</p>
            </div>

            {type2 && (
               <div className={styles.postMetaBar}>
                  <div className={styles.postMetaItem}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCommentAlt} />
                     </div>
                     <span>{data.comments}</span>
                  </div>
                  <div className={styles.postMetaItem}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faHeart} />
                     </div>
                     <span>{data.likes}</span>
                  </div>
                  <div className={`${styles.postMetaItem} ${styles.shareItem}`}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faShareAlt} />
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

export default memo(PostcastItem)
