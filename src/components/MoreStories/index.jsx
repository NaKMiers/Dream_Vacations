import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import SeparatorTitle from '../SeparatorTitle'
import PostItem from './PostItem'
import styles from './styles.module.scss'

function MoreStories({ floating, style }) {
   const { blogs, moreStories } = useSelector(state => state.blogs)
   const data = moreStories.map(id => blogs.find(blog => blog.id === id))
   const [itemPerSlide, setItemPerSlide] = useState(3)

   const [slide, setSlide] = useState(1)
   const [chunkSlides, setChunkSlides] = useState([])
   const slideTrackRef = useRef(null)
   const slideNavRef = useRef(null)
   const isSetInitialChunk = useRef(false)

   // set chunkSlides
   const resetChunkSlides = useCallback(
      value => {
         const result = []
         for (let i = 0; i < data.length; i += value) {
            const chunk = data.slice(i, i + value)
            result.push(chunk)
         }

         setChunkSlides(result)
      },
      [data]
   )

   // set chunkSlides on resize
   const handleResize = useCallback(() => {
      const width = window.innerWidth

      if (!isSetInitialChunk.current) {
         isSetInitialChunk.current = true

         if (width > 1140) {
            setItemPerSlide(3)
            resetChunkSlides(3)
         } else if (width <= 1140 && width > 768) {
            setItemPerSlide(2)
            resetChunkSlides(2)
         } else if (width <= 768) {
            setItemPerSlide(1)
            resetChunkSlides(1)
         }
      } else {
         if (width > 1140 && itemPerSlide !== 3) {
            setItemPerSlide(3)
            resetChunkSlides(3)
         } else if (width <= 1140 && width > 768 && itemPerSlide !== 2) {
            setItemPerSlide(2)
            resetChunkSlides(2)
         } else if (width <= 768 && itemPerSlide !== 1) {
            setItemPerSlide(1)
            resetChunkSlides(1)
         }
      }
   }, [itemPerSlide, resetChunkSlides])

   // resize listener
   useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize)

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [handleResize])

   // change slide animation
   useEffect(() => {
      slideTrackRef.current.style.marginLeft = `calc(-100% * ${slide - 1})`
   }, [slide])

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (slideTrackRef.current && slideTrackRef.current) {
         // 1
         const slideTop = slideTrackRef.current.getBoundingClientRect().top
         const slideBottom = slideTrackRef.current.getBoundingClientRect().bottom

         if (slideTop < window.innerHeight && slideBottom > 0) {
            slideTrackRef.current.classList.add('floatRight')
            slideTrackRef.current.classList.add(styles.appeared)
         }

         // 2
         const navTop = slideNavRef.current.getBoundingClientRect().top
         const navBottom = slideNavRef.current.getBoundingClientRect().bottom

         if (navTop < window.innerHeight && navBottom > 0) {
            slideNavRef.current.classList.add('floatLeft')
            slideNavRef.current.classList.add(styles.appeared)
         }

         // remove event when all are appeared
         let countAppeared = 0
         if (slideTrackRef.current.className.includes(styles.appeared)) {
            countAppeared++
         }

         if (slideNavRef.current.className.includes(styles.appeared)) {
            countAppeared++
         }

         if (countAppeared === 1 + 1) {
            console.log('remove---TopCategories')
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
      <section className={`${styles.MoreStories} ${floating ? styles.floating : ''}`} style={style}>
         <SeparatorTitle title='More Stories' dark style={{ marginBottom: 5, paddingTop: 35 }} />

         <div className={`${styles.container} container`}>
            <div className={styles.slider}>
               <div className={styles.slideTrack} ref={slideTrackRef}>
                  {chunkSlides.map((res, index) => (
                     <div className={styles.slide} key={index}>
                        {res.map(post => (
                           <PostItem key={post.id} data={post} />
                        ))}
                     </div>
                  ))}
               </div>

               <div className={styles.slideNav} ref={slideNavRef}>
                  {chunkSlides.map((_, index) => (
                     <div
                        key={index}
                        className={index + 1 === slide ? styles.active : ''}
                        onClick={() => setSlide(index + 1)}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(MoreStories)
