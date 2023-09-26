import { faChevronLeft, faChevronRight, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import RelatedPostItem from './RelatedPostItem'
import styles from './style.module.scss'
import { useSelector } from 'react-redux'

function RelatedPosts() {
   const [slide, setSlide] = useState(1)
   const [isSliding, setSliding] = useState(false)
   const [slideAmount, setSlideAmount] = useState(3)

   const { blogs, relatedPosts: posts } = useSelector(state => state.blogs)
   const initialData = posts.map(id => blogs.find(blog => blog.id === id))

   const [data, setData] = useState(initialData.slice(0, 3))
   console.log(data)

   const relatedPostsRef = useRef(null)
   const relatedTitleRef = useRef(null)
   const slideTrackRef = useRef(null)

   // handle resize
   const handleResize = useCallback(() => {
      const width = slideTrackRef.current.offsetWidth

      if (width >= 909 && slideAmount !== 3) {
         let newData = initialData.slice(0, 3)
         setSlideAmount(3)
         setData(newData)
      } else if (width < 909 && width >= 606 && slideAmount !== 2) {
         let newData = initialData.slice(0, 2)
         setSlideAmount(2)
         setData(newData)
      } else if (width < 606 && slideAmount !== 1) {
         let newData = initialData.slice(0, 1)
         setSlideAmount(1)
         setData(newData)
      }
   }, [slideAmount, initialData])

   useEffect(() => {
      handleResize()

      window.addEventListener('resize', handleResize)
      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [handleResize])

   // next slide
   const nextSlide = useCallback(() => {
      if (!isSliding) {
         setSliding(true)
         slideTrackRef.current.style.opacity = 0

         setTimeout(() => {
            slideTrackRef.current.style.opacity = 1
            let index = initialData.findIndex(post => post.id === data[data.length - 1].id)
            let newData = initialData.slice(index + 1, index + 1 + slideAmount)
            if (newData.length < slideAmount) {
               const missing = slideAmount - newData.length
               const compensation = initialData.slice(0, missing)
               newData = newData.concat(compensation)
            }
            setData(newData)
            setSlide(slide + 1)
         }, 510) // slideTrack duration: 0.3s

         setTimeout(() => {
            setSliding(false)
         }, 550)
      }
   }, [slide, isSliding, data, slideAmount, initialData])

   // prev slide
   const prevSlide = useCallback(() => {
      if (!isSliding) {
         setSliding(true)
         slideTrackRef.current.style.opacity = 0

         setTimeout(() => {
            slideTrackRef.current.style.opacity = 1
            let index = initialData.findIndex(post => post.id === data[0].id)
            let newData = initialData.slice(index - slideAmount < 0 ? 0 : index - slideAmount, index)

            if (newData.length < slideAmount) {
               const missing = slideAmount - newData.length
               const compensation = initialData.slice(initialData.length - missing, initialData.length)
               newData = compensation.concat(newData)
            }
            setData(newData)
            setSlide(slide - 1)
         }, 510) // slideTrack duration: 0.3s

         setTimeout(() => {
            setSliding(false)
         }, 550)
      }
   }, [slide, isSliding, data, slideAmount, initialData])

   const handleScrollAnimation = useCallback(() => {
      const topElements = [...relatedTitleRef.current.children]
      const postElements = [...slideTrackRef.current.children]

      topElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      let delay = 0.2
      postElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            delay += 0.15
            e.style.opacity = 0
            e.style.animation = `zoomOut 0.6s ease-in-out ${delay}s forwards`
            e.classList.add(styles.appeared)
         }
      })

      // remove event when all are appeared
      let countAppeared = 0
      topElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      postElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      if (countAppeared === topElements.length + postElements.length) {
         // console.log('removed---RelatedPosts')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [])

   // appear on scroll
   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)

      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   return (
      <div className={styles.relatedPosts} ref={relatedPostsRef}>
         <div className={styles.relatedTitle} ref={relatedTitleRef}>
            <div className={styles.icon}>
               <FontAwesomeIcon icon={faCopy} />
            </div>
            <h2>Related Posts</h2>
            <div className={styles.relatedSlideBtn}>
               <button onClick={prevSlide}>
                  <FontAwesomeIcon icon={faChevronLeft} />
               </button>
               <button onClick={nextSlide}>
                  <FontAwesomeIcon icon={faChevronRight} />
               </button>
            </div>
         </div>

         <div className={styles.slider}>
            <div className={styles.slideTrack} ref={slideTrackRef}>
               {data.map((post, index) => (
                  <RelatedPostItem data={post} key={index} />
               ))}
            </div>
         </div>
      </div>
   )
}

export default memo(RelatedPosts)
