import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import podcastFeedBackground from '../../assets/images/podcastFeedBackground.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

import PodcastItem from '../../components/LatestPodcast/PodcastItem'

function PodcastFeed() {
   const { podcasts, podcastFeeds } = useSelector(state => state.podcasts)
   let initialData = podcastFeeds.map(id => podcasts.find(podcast => podcast.id === id))
   initialData.sort((a, b) => {
      return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0
   })
   initialData.reverse()

   const [openFilter, setOpenFilter] = useState(false)
   const [filter, setFilter] = useState('all')
   const [sortByName, setSortByName] = useState(false)
   const [sortAsc, setSortAsc] = useState(false)
   const [page, setPage] = useState(1)
   const itemPerPage = 8
   const [numberOfPage, setNumberOfPage] = useState(Math.ceil(initialData.length / itemPerPage))

   const [data, setData] = useState(initialData.slice(0, page * itemPerPage))

   // refs
   const filterWrapRef = useRef(null)
   const podcastWrapperRef = useRef(null)
   const interval = useRef(undefined)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (podcastWrapperRef.current && filterWrapRef.current) {
         const elements = [filterWrapRef.current, ...podcastWrapperRef.current.children]

         // 1
         let delay = 0
         elements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.style.animation = `floatUp 0.6s ease-in-out ${delay}s forwards`
               e.classList.add(styles.appeared)
               delay += 0.1
            }
         })

         // remove event when all are appeared
         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (countAppeared === initialData.length + 1) {
            console.log('remove---PodcastFeed')
            window.removeEventListener('scroll', handleScroll)
         }
      }
   }, [initialData.length])

   // appear animation on scroll
   useEffect(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   // clear animation appear
   const handleClearAnimation = useCallback(() => {
      if (podcastWrapperRef.current) {
         const elements = [...podcastWrapperRef.current.children]
         elements.forEach(e => {
            e.classList.remove(styles.appeared)
            e.style.animation = 'none'
            e.style.transform = 'none'
            e.opacity = 0
         })
      }
   }, [])

   // handle filter
   const handleFilter = useCallback(
      type => {
         clearInterval(interval.current)
         handleClearAnimation()
         // clear undefine animation delay
         interval.current = setInterval(() => {
            handleScroll()
         }, 300)
         setPage(1)

         switch (type) {
            case 'all':
               setFilter(type)
               setNumberOfPage(Math.ceil(initialData.length / itemPerPage))
               setData(initialData.slice(0, itemPerPage))
               break

            default:
               console.log(initialData)
               let newData = initialData.filter(blog => {
                  console.log('blog: ', blog.categories, type)
                  return blog.categories.includes(type)
               })
               console.log('infilter newData: ', newData)
               setFilter(type)
               setNumberOfPage(Math.ceil(newData.length / itemPerPage))
               setData(newData.slice(0, itemPerPage))
         }
      },
      [handleClearAnimation, handleScroll, initialData]
   )

   // handle sort
   const handleSort = useCallback(
      (type, value) => {
         clearInterval(interval.current)
         handleClearAnimation()
         // clear undefine animation delay
         interval.current = setInterval(() => {
            handleScroll()
         }, 300)

         switch (type) {
            case 'sort-by-name':
               setSortByName(value)
               if (value) {
                  let newData = [...data]
                  newData.sort((a, b) => {
                     let titleA = a.title.toLowerCase()
                     let titleB = b.title.toLowerCase()
                     return titleA < titleB ? -1 : titleA > titleB ? 1 : 0
                  })
                  setData(newData)
               } else {
                  let newData = [...data]
                  newData.sort((a, b) => {
                     return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0
                  })
                  setData(newData)
               }
               break

            case 'sort-asc':
               setSortAsc(value)
               let newData = [...data]
               newData.reverse()
               setData(newData)
               break

            default:
               break
         }
      },
      [data, handleClearAnimation, handleScroll]
   )

   // handle load more
   const handleLoadMore = useCallback(() => {
      let newData = initialData
      if (filter !== 'all') {
         newData = initialData.filter(blog => {
            return blog.categories.includes(filter)
         })
      }

      const dataPage = newData.slice(0, (page + 1) * itemPerPage)
      setData(dataPage)
      setPage(page + 1)

      setTimeout(() => {
         handleScroll()
      }, 0)
   }, [initialData, page, filter, handleScroll])

   return (
      <section
         className={styles.PodcastFeed}
         style={{ background: `url(${podcastFeedBackground}) no-repeat center / cover` }}
      >
         <div className={`${styles.container} container`}>
            <div className={styles.filterWrap} ref={filterWrapRef}>
               <div className={styles.filterMenuBtn} onClick={() => setOpenFilter(!openFilter)}>
                  <FontAwesomeIcon icon={faEllipsis} />
               </div>
               <ul
                  className={`${styles.filterMenu} ${openFilter ? styles.show : ''}`}
                  onClick={() => setOpenFilter(!openFilter)}
               >
                  <li
                     className={`${filter === 'all' ? styles.active : ''}`}
                     onClick={() => filter !== 'all' && handleFilter('all')}
                  >
                     All
                  </li>
                  <li
                     className={`${filter === 'adventure' ? styles.active : ''}`}
                     onClick={() => filter !== 'adventure' && handleFilter('adventure')}
                  >
                     Adventure
                  </li>
                  <li
                     className={`${filter === 'cruise' ? styles.active : ''}`}
                     onClick={() => filter !== 'cruise' && handleFilter('cruise')}
                  >
                     Cruise
                  </li>
                  <li
                     className={`${filter === 'diving' ? styles.active : ''}`}
                     onClick={() => filter !== 'diving' && handleFilter('diving')}
                  >
                     Diving
                  </li>
               </ul>

               <div className={styles.filterLeft}>
                  <button
                     className={filter === 'all' ? styles.active : ''}
                     onClick={() => filter !== 'all' && handleFilter('all')}
                  >
                     All
                  </button>
                  <button
                     className={filter === 'adventure' ? styles.active : ''}
                     onClick={() => filter !== 'adventure' && handleFilter('adventure')}
                  >
                     Adventure
                  </button>
                  <button
                     className={filter === 'cruise' ? styles.active : ''}
                     onClick={() => filter !== 'cruise' && handleFilter('cruise')}
                  >
                     Cruise
                  </button>
                  <button
                     className={filter === 'diving' ? styles.active : ''}
                     onClick={() => filter !== 'diving' && handleFilter('diving')}
                  >
                     Diving
                  </button>
               </div>

               <div className={styles.filterRight}>
                  <div className={styles.sort} onClick={() => handleSort('sort-by-name', !sortByName)}>
                     <span>Date</span>

                     <button className={styles.switchBtn}>
                        <div className={sortByName ? styles.active : ''} />
                     </button>

                     <span>Name</span>
                  </div>

                  <div className={styles.separate} />

                  <div
                     className={styles.sort}
                     // onClick={() => setFilters(prev => ({ ...prev, sortByAsc: !prev.sortByAsc }))}
                     // onClick={() => setSortAsc(!sortAsc)}
                     onClick={() => handleSort('sort-asc', !sortAsc)}
                  >
                     <span>Desc</span>

                     <button className={styles.switchBtn}>
                        <div className={sortAsc ? styles.active : ''} />
                     </button>

                     <span>Asc</span>
                  </div>
               </div>
            </div>

            <div className={styles.podcastWrapper} ref={podcastWrapperRef}>
               {data.map((podcast, index) => (
                  <PodcastItem data={podcast} type={2} key={index} />
               ))}
            </div>

            {numberOfPage > 1 && page !== numberOfPage && (
               <div className={styles.buttonWrap}>
                  <button onClick={handleLoadMore}>Load More</button>
               </div>
            )}
         </div>
      </section>
   )
}

export default memo(PodcastFeed)
