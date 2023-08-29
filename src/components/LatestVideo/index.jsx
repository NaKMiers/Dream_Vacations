import React, { memo } from 'react'
import latestVideoBG from '../../assets/images/topCategoriesBG.jpg'
import SeparatorTitle from '../../components/SeparatorTitle'
import styles from './style.module.scss'
import VideoItem from './videoItem'
import videoThumb1 from '../../assets/images/highlightThumb4.jpg'
import videoThumb2 from '../../assets/images/editorPickedImage3.jpg'
import videoThumb3 from '../../assets/images/visionThumbnail2.jpg'
import videoThumb4 from '../../assets/images/videoThumbnail1.jpg'
import video1 from '../../assets/videos/video1.mp4'
import video2 from '../../assets/videos/video2.mp4'
import video3 from '../../assets/videos/video3.mp4'
import video4 from '../../assets/videos/video4.mp4'

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
   return (
      <section
         className={styles.LatestVideo}
         style={{ background: `url(${latestVideoBG}) no-repeat center / cover` }}
      >
         <SeparatorTitle title='Latest Video' />

         <div className={`${styles.container} container`}>
            <div className={styles.videoWrapper}>
               {data.map(blog => (
                  <VideoItem key={blog.id} data={blog} />
               ))}
            </div>

            <div className={styles.buttonWrap}>
               <button className={styles.button}>View All</button>
            </div>
         </div>
      </section>
   )
}

export default memo(LatestVideo)
