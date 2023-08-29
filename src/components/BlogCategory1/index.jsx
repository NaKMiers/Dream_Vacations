import { faChevronLeft, faChevronRight, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import BlogType2 from '../../components/BlogType2'
import styles from './style.module.scss'

function BlogCategory1({ style }) {
   const { blogs, travelBlogs } = useSelector(state => state.blogs)
   let initialData = travelBlogs.map(id => blogs.find(blog => blog.id === id))
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

   const [data, setData] = useState(initialData.slice((page - 1) * itemPerPage, page * itemPerPage))

   const filterWrapRef = useRef(null)
   const blogWrapperRef = useRef(null)
   const interval = useRef(undefined)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      // console.log('handleScrollAnimation')
      if (blogWrapperRef.current) {
         const elements = [...blogWrapperRef.current.children, filterWrapRef.current]
         let delay = 0.2
         elements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom
            e.style.opacity = 0

            if (top < window.innerHeight && bottom > 0 && !e.className.includes(styles.appeared)) {
               e.style.animation = `floatUp 0.6s ease-in-out ${delay}s forwards`
               e.classList.add(styles.appeared)
               delay += 0.2
            }
         })

         // remove event listener after all showed
         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })
         if (countAppeared === elements.length) {
            console.log('removed---BlogCategory1')
            window.removeEventListener('scroll', handleScrollAnimation)
         }
      }
   }, [])

   // show on scroll
   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)

      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   // clear animation appear
   const handleClearAnimation = useCallback(() => {
      if (blogWrapperRef.current) {
         const elements = [...blogWrapperRef.current.children]
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
            handleScrollAnimation()
         }, 300)

         switch (type) {
            case 'all':
               setData(initialData)
               setNumberOfPage(Math.ceil(initialData.length / itemPerPage))
               setFilter(type)
               break

            default:
               console.log(initialData)
               const newData = initialData.filter(blog => {
                  console.log('blog: ', blog.categories, type)
                  return blog.categories.includes(type)
               })
               console.log(newData)
               setData(newData)
               setNumberOfPage(Math.ceil(newData.length / itemPerPage))
               setFilter(type)
         }
      },
      [handleClearAnimation, handleScrollAnimation, initialData]
   )

   // handle sort
   const handleSort = useCallback(
      (type, value) => {
         clearInterval(interval.current)
         handleClearAnimation()
         // clear undefine animation delay
         interval.current = setInterval(() => {
            handleScrollAnimation()
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
      [data, handleClearAnimation, handleScrollAnimation]
   )

   // handle change page
   const handleChangePage = useCallback(
      page => {
         clearInterval(interval.current)
         handleClearAnimation()
         // clear undefine animation delay
         interval.current = setInterval(() => {
            handleScrollAnimation()
         }, 300)

         const dataPage = initialData.slice((page - 1) * itemPerPage, page * itemPerPage)
         setData(dataPage)
         setPage(page)
      },
      [initialData, handleClearAnimation, handleScrollAnimation]
   )

   return (
      <section className={styles.BlogCategory1} style={style}>
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
                     className={`${filter === 'active' ? styles.active : ''}`}
                     onClick={() => filter !== 'active' && handleFilter('active')}
                  >
                     Active
                  </li>
                  <li
                     className={`${filter === 'reviews' ? styles.active : ''}`}
                     onClick={() => filter !== 'reviews' && handleFilter('reviews')}
                  >
                     Reviews
                  </li>
                  <li
                     className={`${filter === 'routes' ? styles.active : ''}`}
                     onClick={() => filter !== 'routes' && handleFilter('routes')}
                  >
                     Routes
                  </li>
                  <li
                     className={`${filter === 'travel' ? styles.active : ''}`}
                     onClick={() => filter !== 'travel' && handleFilter('travel')}
                  >
                     Travel
                  </li>
               </ul>

               <div className={styles.filterLeft}>
                  <button
                     className={filter === 'all' ? styles.active : ''}
                     onClick={() => filter !== 'all' && handleFilter('all')}
                  >
                     all
                  </button>
                  <button
                     className={filter === 'active' ? styles.active : ''}
                     onClick={() => filter !== 'active' && handleFilter('active')}
                  >
                     active
                  </button>
                  <button
                     className={filter === 'reviews' ? styles.active : ''}
                     onClick={() => filter !== 'reviews' && handleFilter('reviews')}
                  >
                     reviews
                  </button>
                  <button
                     className={filter === 'routes' ? styles.active : ''}
                     onClick={() => filter !== 'routes' && handleFilter('routes')}
                  >
                     routes
                  </button>
                  <button
                     className={filter === 'travel' ? styles.active : ''}
                     onClick={() => filter !== 'travel' && handleFilter('travel')}
                  >
                     travel
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

            <div className={styles.blogWrapper} ref={blogWrapperRef}>
               {data.map(blog => (
                  <BlogType2 data={blog} key={blog.id} />
               ))}
            </div>

            {numberOfPage > 1 && (
               <div className={styles.pagination}>
                  {page !== 1 && (
                     <button
                        className={`${styles.pageBtn} ${styles.prev}`}
                        onClick={() => handleChangePage(page - 1)}
                     >
                        <FontAwesomeIcon icon={faChevronLeft} />
                     </button>
                  )}

                  {[...Array.from({ length: numberOfPage })].map((_, index) => (
                     <button
                        key={index}
                        className={`${styles.pageBtn} ${page === index + 1 ? styles.active : ''}`}
                        onClick={() => handleChangePage(index + 1)}
                     >
                        {index + 1}
                     </button>
                  ))}

                  {page !== numberOfPage && (
                     <button
                        className={`${styles.pageBtn} ${styles.next}`}
                        onClick={() => handleChangePage(page + 1)}
                     >
                        <FontAwesomeIcon icon={faChevronRight} />
                     </button>
                  )}
               </div>
            )}
         </div>
      </section>
   )
}

export default memo(BlogCategory1)
