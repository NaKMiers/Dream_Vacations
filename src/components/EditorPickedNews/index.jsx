import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import SeparatorTitle from '../../components/SeparatorTitle'
import PostItem from './PostItem'
import Slide from './Slide'
import styles from './style.module.scss'

const slideLength = 5
const maxSlideIndex = 5 + 2 - 1

function EditorPickedNews() {
   const { blogs, editorPinkedNews } = useSelector(state => state.blogs)
   const data = editorPinkedNews.map(id => {
      return blogs.find(blog => blog.id === id)
   })

   // const sliderData = data.slice()
   const postData = data.slice(0, 3)
   const slideData = data.slice(3)

   const [isSliding, setSliding] = useState(false)
   const [slide, setSlide] = useState(1)
   const slideTrackRef = useRef(null)

   const sliderRef = useRef(null)
   const postWrapRef = useRef(null)

   useEffect(() => {
      slideTrackRef.current.style.marginLeft = `calc(-100% * ${slide})`
   }, [slide])

   const nextSlide = useCallback(() => {
      if (!isSliding) {
         setSliding(true)

         if (slide === slideLength) {
            setSlide(maxSlideIndex)

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'none'
               setSlide(1)
            }, 510)

            setTimeout(() => {
               slideTrackRef.current.style.transition = '0.5s ease-in-out'
            }, 550)
         } else {
            setSlide(slide + 1)
         }

         setTimeout(() => {
            setSliding(false)
         }, 550) // slideTrack duration: 0.5s
      }
   }, [isSliding, slide])

   const prevSlide = useCallback(() => {
      if (!isSliding) {
         setSliding(true)

         if (slide === 1) {
            setSlide(0)

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'none'
               setSlide(slideLength)
            }, 510)

            setTimeout(() => {
               slideTrackRef.current.style.transition = '0.5s ease-in-out'
            }, 550)
         } else {
            setSlide(slide - 1)
         }

         setTimeout(() => {
            setSliding(false)
         }, 550) // slideTrack duration: 0.5s
      }
   }, [isSliding, slide])

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      const elements = [sliderRef.current, ...postWrapRef.current.children]

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
         console.log('remove---EditorPickedNews')
         window.removeEventListener('scroll', handleScroll)
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
      <section className={styles.EditorPickedNews}>
         <SeparatorTitle title='Editor’s Picked News' dark style={{ margin: '80px 0 65px' }} />

         <div className={`${styles.container} container`}>
            <div className={styles.sliderWrap}>
               <div className={styles.slider} ref={sliderRef}>
                  <div className={styles.slideTrack} ref={slideTrackRef}>
                     <Slide data={slideData[slideData.length - 1]} />
                     {/* --- */}

                     {slideData.map(slide => (
                        <Slide nextSlide={nextSlide} prevSlide={prevSlide} data={slide} key={slide.id} />
                     ))}

                     {/* --- */}
                     <Slide data={slideData[0]} />
                  </div>
               </div>
            </div>

            <div className={styles.postWrap} ref={postWrapRef}>
               {postData.map(post => (
                  <PostItem data={post} key={post.id} />
               ))}
            </div>
         </div>
      </section>
   )
}

export default memo(EditorPickedNews)
