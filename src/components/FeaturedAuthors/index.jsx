import React, { memo, useCallback, useEffect, useRef } from 'react'
import featuredAuthorBG from '../../assets/imgs/featuredAuthorBG.jpg'
import SeparatorTitle from '../../components/SeparatorTitle'
import AuthorItem from './AuthorItem'
import styles from './style.module.scss'
import { useSelector } from 'react-redux'

function FeaturedAuthors() {
   const { authors, featuredAuthors } = useSelector(state => state.authors)
   const data = featuredAuthors.map(id => {
      return authors.find(author => author.id === id)
   })

   const containerRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (containerRef.current) {
         const elements = [...containerRef.current.children]

         let delay = 0
         elements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.classList.add('fadeIn')
               e.classList.add(styles.appeared)

               e.children[0].children[0].style.animation = `zoomOut 0.6s ease-in-out ${delay}s forwards`
               delay += 0.15
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
            console.log('remove---FeaturedAuthors')
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
         className={styles.FeaturedAuthors}
         style={{ background: `url(${featuredAuthorBG}) no-repeat top center / cover` }}
      >
         <SeparatorTitle title='Featured Authors' />

         <div className={`${styles.container} container`} ref={containerRef}>
            {data.map(author => (
               <AuthorItem data={author} key={author.id} />
            ))}
         </div>
      </section>
   )
}

export default memo(FeaturedAuthors)
