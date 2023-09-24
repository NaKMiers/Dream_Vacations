import { faBars, faChevronLeft, faComment, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef } from 'react'
import advertiseBanner from '../../assets/images/advertiseBanner.png'
import styles from './style.module.scss'

import { Link } from 'react-router-dom'
import facebook from '../../assets/icons/facebook-color.png'
import instagram from '../../assets/icons/instagram-color.png'
import linkedin from '../../assets/icons/linkedin-color.png'
import pinterest from '../../assets/icons/pinterest-color.png'
import twitter from '../../assets/icons/twitter-color.png'
import youtube from '../../assets/icons/youtube-color.png'

import welcomeBanner1 from '../../assets/images/welcomeBanner1.jpg'
import welcomeBanner2 from '../../assets/images/welcomeBanner2.png'
import welcomeBanner3 from '../../assets/images/welcomeBanner3.png'

import blogGallery4 from '../../assets/images/aboutBanner1.jpg'
import blogGallery1 from '../../assets/images/blogGallery1.jpg'
import blogGallery3 from '../../assets/images/blogGallery2.jpg'
import blogGallery5 from '../../assets/images/blogGallery3.jpg'
import blogGallery6 from '../../assets/images/blogGallery4.jpg'
import blogGallery2 from '../../assets/images/highlightThumb4.jpg'

const categories = [
   'Active',
   'Adventure',
   'Argentina',
   'Beach',
   'Brazil',
   'Cassandra Lynn',
   'Cruise',
   'Diving',
   'Europe',
   'Food & Drink',
   'Herman Ledford',
   'Julianna Galanis',
   'Lake',
   'Latest Podcast',
   'Latest Video',
   'Life',
   'Lifestyle',
   'Mel Granville',
   'Mexico',
   'Nathan Matthews',
   'Nations',
   'Nature',
   'Ocean',
   'Podcast',
   'Recreation',
   'Reviews',
   'River',
   'Routes',
   'Sands',
   'Space',
   'Spring',
   'Sun',
   'Transport',
   'Travel',
   'Uncategorized',
   'Water',
   'Wave',
   'Winter',
   'World',
]

const tags = [
   'Agency',
   'Design',
   'Fly',
   'Holiday',
   'Lifestyle',
   'Media',
   'Nature',
   'News',
   'People',
   'Photo',
   'Sea',
   'Sun',
   'Travel',
]

const galleries = [blogGallery1, blogGallery2, blogGallery3, blogGallery4, blogGallery5, blogGallery6]

function BlogContent() {
   // refs
   const blogContentWrapRef = useRef(null)
   const sideContent = useRef(null)

   // show on scroll
   const handleScroll = useCallback(() => {
      // console.log('handleScroll')
      if (blogContentWrapRef.current && sideContent.current) {
         const elements = [...blogContentWrapRef.current.children, ...sideContent.current.children]

         elements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.classList.add('floatUp')
               e.classList.add(styles.appeared)
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
            console.log('removed---BlogContent')
            window.removeEventListener('scroll', handleScroll)
         }
      }
   }, [])

   // show on scroll
   useEffect(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   return (
      <section className={styles.BlogContent}>
         <div className={`${styles.container} container`}>
            {/* Side */}
            <div className={styles.sideContent} ref={sideContent}>
               {/* Search */}
               <div className={styles.searchWrap}>
                  <input className={styles.searchInput} type='text' />

                  <div className={styles.searchIcon}>
                     <FontAwesomeIcon icon={faSearch} />
                  </div>
               </div>

               {/* Advertise */}
               <h4 className={styles.title}>Advertise</h4>
               <div className={styles.advertiseBanner}>
                  <img src={advertiseBanner} alt='advertise-banner' />
               </div>

               {/* Categories */}
               <h4 className={styles.title}>Categories</h4>
               <ul className={styles.categoryList}>
                  {categories.map(category => (
                     <li key={category} className={styles.categoryItem}>
                        <a className={styles.categoryLink} href={`/blogs/categories/${category}`}>
                           {category}
                        </a>
                     </li>
                  ))}
               </ul>

               {/* Recent Posts */}
               <h4 className={styles.title}>Recent Posts</h4>
               <div className={styles.recentPostWrap}>
                  <div className={styles.recentPostItem}>
                     <Link to='/blogs/1' className={styles.thumbnail}>
                        <img src={welcomeBanner1} alt='thumbnail' />
                     </Link>

                     <div className={styles.content}>
                        <Link to='/blogs/1' className={styles.label}>
                           Coral Bay Travel
                        </Link>
                        <p className={styles.date}>August 27, 2021</p>
                     </div>
                  </div>
                  <div className={styles.recentPostItem}>
                     <Link to='/blogs/1' className={styles.thumbnail}>
                        <img src={welcomeBanner2} alt='thumbnail' />
                     </Link>

                     <div className={styles.content}>
                        <Link to='/blogs/1' className={styles.label}>
                           Best Weekend
                        </Link>
                        <p className={styles.date}>August 27, 2021</p>
                     </div>
                  </div>
                  <div className={styles.recentPostItem}>
                     <Link to='/blogs/1' className={styles.thumbnail}>
                        <img src={welcomeBanner3} alt='thumbnail' />
                     </Link>

                     <div className={styles.content}>
                        <Link to='/blogs/1' className={styles.label}>
                           Flying Over
                        </Link>
                        <p className={styles.date}>August 27, 2021</p>
                     </div>
                  </div>
               </div>

               {/* Follow Us */}
               <h4 className={styles.title}>Follow Us</h4>
               <div className={styles.socialsWrap}>
                  <a
                     className={styles.socialItem}
                     href='https://www.facebook.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={facebook} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://www.linkedin.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={linkedin} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://twitter.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={twitter} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://www.instagram.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={instagram} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://www.pinterest.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={pinterest} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://www.youtube.com'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={youtube} alt='social' />
                  </a>
               </div>

               {/* Text box */}
               <div className={styles.textBox}>
                  <h4>
                     <span>Take only memories,</span>
                     <br />
                     <span>Leave</span>
                     <span> Only Footprints.</span>
                  </h4>

                  <span>Evelyn Snyder</span>
               </div>

               {/* Hot Tags */}
               <h4 className={styles.title}>Hot Tags</h4>
               <div className={styles.tagWrap}>
                  {tags.map((tag, index) => (
                     <Link
                        to={`/blogs/categories/${tag.toLowerCase()}`}
                        className={styles.tagItem}
                        key={index}
                     >
                        {tag}
                     </Link>
                  ))}
               </div>
            </div>

            {/* Content */}
            <div className={`${styles.blogContentWrap}`} ref={blogContentWrapRef}>
               {/* thumb */}
               <div className={styles.mainThumbnail}>
                  <img src={welcomeBanner1} alt='thumbnail' />
               </div>

               {/* meta bar */}
               <div className={`${styles.metaBar}`}>
                  <div className={styles.right}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faComment} />
                        <span>2</span>
                     </div>
                     <div className={styles.sep} />
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>0</span>
                     </div>

                     <Link className={`${styles.metaBtn} ${styles.prev}`}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                     </Link>
                     <Link to='/blogs' className={`${styles.metaBtn} ${styles.bars}`}>
                        <FontAwesomeIcon icon={faBars} />
                     </Link>
                  </div>

                  <div className={styles.left}>
                     <span>By Scott Jackson</span>
                     <div className={styles.sep} />

                     <span className={styles.category}>Nation</span>
                     <div className={styles.sep} />
                     <span className={styles.category}>World</span>

                     <div className={styles.sep} />
                     <span>August 27, 2021</span>
                  </div>
               </div>

               {/* subtitle */}
               <h5 className={styles.subtitle}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident!
               </h5>

               {/* paragraph */}
               <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia sequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
               </p>

               {/* blockquote */}
               <div className={styles.blockquoteWrap}>
                  <blockquote>
                     …Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua!
                  </blockquote>
               </div>

               {/* paragraph */}
               <p className={styles.paragraph}>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  et quasi architecto vitae dicta sunt explicabo.
               </p>

               {/* textbox */}
               <div className={styles.textbox}>
                  <div className={styles.textboxItem} style={{ color: '#26c6da' }}>
                     <div className={styles.number} style={{ background: '#26c6da' }}>
                        1
                     </div>
                     <span className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                     </span>
                  </div>
                  <div className={styles.textboxItem} style={{ color: '#81d098' }}>
                     <div className={styles.number} style={{ background: '#81d098' }}>
                        2
                     </div>
                     <span className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                     </span>
                  </div>
                  <div className={styles.textboxItem} style={{ color: '#6c97e8' }}>
                     <div className={styles.number} style={{ background: '#6c97e8' }}>
                        3
                     </div>
                     <span className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                     </span>
                  </div>
               </div>

               {/* paragraph */}
               <p className={styles.paragraph}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Lorem ipsum dolor amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit invelit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa ab illo inventore veritatis et
                  quasi beatae vitae dicta sunt explicabo.
               </p>

               {/* gallery */}
               <div className={styles.galleriesWrap}>
                  {galleries.map((gallery, index) => (
                     <div className={styles.galleryItem} key={index}>
                        <img src={gallery} alt='gallery' />
                     </div>
                  ))}
               </div>

               {/* paragraph */}
               <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia sequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
               </p>

               {/* paragraph */}
               <p className={styles.paragraph}>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
               </p>
            </div>
         </div>
      </section>
   )
}

export default memo(BlogContent)
