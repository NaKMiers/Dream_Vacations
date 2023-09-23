import { faBars, faChevronRight, faSearch, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import authorAvt1 from '../../assets/images/authorAvt1.jpeg'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import linkedin from '../../assets/icons/linkedin.png'
import logo from '../../assets/logos/logo.png'
import logo2 from '../../assets/logos/logo-black.png'
import pinterest from '../../assets/icons/pinterest.png'
import resultThumb1 from '../../assets/images/resultThumb1.jpg'
import twitter from '../../assets/icons/twitter.png'
import youtube from '../../assets/icons/youtube.png'
import styles from './style.module.scss'

function Header() {
   const location = useLocation()
   const aboutUsActive = location.pathname === '/about'
   const authorPageActive = location.pathname === '/about/author'
   const allCateActive = location.pathname === '/categories'
   const lifeStyleActive = location.pathname === '/categories/lifestyle'
   const travelActive = location.pathname === '/categories/travel'
   const adventureActive = location.pathname === '/categories/adventure'

   const headerRef = useRef(null)
   const [isFixed, setFixed] = useState(false)
   const menuPanelRef1 = useRef(null)
   const menuPanelRef2 = useRef(null)

   const timeout1 = useRef(undefined)
   const timeout2 = useRef(undefined)

   const [openSearch, setOpenSearch] = useState(false)
   const [openMenu, setOpenMenu] = useState(false)
   const [openAboutCollapse, setOpenAboutCollapse] = useState(false)
   const [openCategoriesCollapse, setOpenCategoriesCollapse] = useState(false)

   // show menu panel "about"
   const handleShowMenuPanel1 = useCallback(() => {
      clearTimeout(timeout1.current)
      menuPanelRef1.current.style.display = 'block'

      setTimeout(() => {
         menuPanelRef1.current.style.opacity = 1
         menuPanelRef1.current.style.transform = 'translateY(0)'
      }, 0)
   }, [])

   // hide menu panel "about"
   const handleHideMenuPanel1 = useCallback(() => {
      menuPanelRef1.current.style.opacity = 0
      menuPanelRef1.current.style.transform = 'translateY(30px)'

      timeout1.current = setTimeout(() => {
         menuPanelRef1.current.style.display = 'none'
      }, 310) // transition duration: 0.3s
   }, [])

   // show menu panel "categories"
   const handleShowMenuPanel2 = useCallback(() => {
      clearTimeout(timeout2.current)
      menuPanelRef2.current.style.display = 'block'

      setTimeout(() => {
         menuPanelRef2.current.style.opacity = 1
         menuPanelRef2.current.style.transform = 'translateY(0)'
      }, 0)
   }, [])

   // hide menu panel "categories"
   const handleHideMenuPanel2 = useCallback(() => {
      menuPanelRef2.current.style.opacity = 0
      menuPanelRef2.current.style.transform = 'translateY(30px)'

      timeout1.current = setTimeout(() => {
         menuPanelRef2.current.style.display = 'none'
      }, 310) // transition duration: 0.3s
   }, [])

   // show search modal
   const handleShowSearchModal = useCallback(() => {
      if (!openSearch) {
         setOpenSearch(true)
         document.body.classList.add('no-scrollbar')
      } else {
         setOpenSearch(false)
         document.body.classList.remove('no-scrollbar')
      }
   }, [openSearch])

   // fixed header
   const handleScroll = useCallback(() => {
      const position = window.scrollY || window.pageYOffset

      if (position > 0 && !isFixed) {
         setFixed(true)
      } else if (position <= 0 && isFixed) {
         setFixed(false)
      }
   }, [isFixed])

   // appear on scroll
   useEffect(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   return (
      <header className={`${styles.Header} ${isFixed ? styles.fixed : ''}`} ref={headerRef}>
         <div className={`${styles.container} container`}>
            <div className={styles.logo}>
               <img src={isFixed ? logo2 : logo} alt='logo' />
            </div>

            <nav className={styles.navBar}>
               <div className={styles.navItem}>
                  <NavLink
                     to='/'
                     className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                  >
                     Home
                  </NavLink>
               </div>
               <div
                  className={styles.navItem}
                  onMouseOver={handleShowMenuPanel1}
                  onMouseLeave={handleHideMenuPanel1}
               >
                  <NavLink
                     to='/about'
                     className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                  >
                     About
                  </NavLink>

                  <div className={styles.menuPanel} ref={menuPanelRef1}>
                     <NavLink
                        to='/about'
                        className={`${styles.menuPanelItem} ${aboutUsActive ? styles.active : ''}`}
                     >
                        About Us
                     </NavLink>
                     <NavLink
                        to='/about/author'
                        className={`${styles.menuPanelItem} ${authorPageActive ? styles.active : ''}`}
                     >
                        Author Page
                     </NavLink>
                  </div>
               </div>
               <div
                  className={styles.navItem}
                  onMouseOver={handleShowMenuPanel2}
                  onMouseLeave={handleHideMenuPanel2}
               >
                  <NavLink
                     to='/categories'
                     className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                  >
                     Categories
                  </NavLink>

                  <div className={styles.menuPanel} ref={menuPanelRef2}>
                     <NavLink
                        to='/categories'
                        className={`${styles.menuPanelItem} ${allCateActive ? styles.active : ''}`}
                     >
                        All Categories
                     </NavLink>
                     <NavLink
                        to='/categories/lifestyle'
                        className={`${styles.menuPanelItem} ${lifeStyleActive ? styles.active : ''}`}
                     >
                        Lifestyle
                     </NavLink>
                     <NavLink
                        to='/categories/travel'
                        className={`${styles.menuPanelItem} ${travelActive ? styles.active : ''}`}
                     >
                        Travel
                     </NavLink>
                     <NavLink
                        to='/categories/adventure'
                        className={`${styles.menuPanelItem} ${adventureActive ? styles.active : ''}`}
                     >
                        Adventure
                     </NavLink>
                  </div>
               </div>
               <div className={styles.navItem}>
                  <NavLink
                     to='/contributors'
                     className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                  >
                     Contributors
                  </NavLink>
               </div>
               <div className={styles.navItem}>
                  <NavLink
                     to='/podcast'
                     className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                  >
                     Podcast
                  </NavLink>
               </div>
               <div className={styles.navItem}>
                  <NavLink
                     to='/policy'
                     className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                  >
                     Policy
                  </NavLink>
               </div>
               <div className={styles.navItem}>
                  <NavLink
                     to='/contact'
                     className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                  >
                     Contact
                  </NavLink>
               </div>

               <div className={`${styles.navItem} ${styles.searchIcon}`} onClick={handleShowSearchModal}>
                  <FontAwesomeIcon icon={openSearch ? faX : faSearch} />
               </div>
            </nav>

            <button className={styles.menuBtn} onClick={() => setOpenMenu(!openMenu)}>
               <FontAwesomeIcon icon={faBars} />
            </button>

            {/* search modal */}
            <div className={`${styles.searchModal} ${openSearch ? styles.open : ''}`}>
               <div className={styles.inputWrap}>
                  <input type='text' name='search' placeholder='Start typing to search...' />

                  <button className={styles.closeSearchBtn} onClick={handleShowSearchModal}>
                     <FontAwesomeIcon icon={faX} />
                  </button>
               </div>

               <div className={styles.popularSearch}>
                  <span>Polular Searches:</span>
                  <a className={styles.link} href='/'>
                     Lorem Ipsum
                  </a>
                  <a className={styles.link} href='/'>
                     Simple Post
                  </a>
               </div>

               <div className={styles.searchResults}>
                  <div className={styles.resultItem}>
                     <div className={styles.thumbnail}>
                        <img src={resultThumb1} alt='thumbnail' />
                        <div className={styles.categories}>
                           <Link className={styles.link} to='/blogs/categories/1'>
                              Sun
                           </Link>
                           {', '}
                           <Link className={styles.link} to='/blogs/categories/1'>
                              Life
                           </Link>
                        </div>
                     </div>

                     <div className={styles.content}>
                        <div className={styles.postAuthor}>
                           <div className={styles.avatar}>
                              <img src={authorAvt1} alt='avatar' />
                           </div>
                           <span className={styles.name}>By Scott Jackson </span>
                           <span>-</span>
                           <span className={styles.time}>July 2, 2021</span>
                        </div>

                        <h5 className={styles.title}>
                           <Link to='/blogs/1'>Super Simple Blog Post Small</Link>
                        </h5>

                        <p className={styles.desc}>«Travel is the healthiest addiction»</p>
                     </div>
                  </div>
                  <div className={styles.resultItem}>
                     <div className={styles.thumbnail}>
                        <img src={resultThumb1} alt='thumbnail' />
                        <div className={styles.categories}>
                           <Link className={styles.link} to='/blogs/categories/1'>
                              Sun
                           </Link>
                           {', '}
                           <Link className={styles.link} to='/blogs/categories/1'>
                              Life
                           </Link>
                        </div>
                     </div>

                     <div className={styles.content}>
                        <div className={styles.postAuthor}>
                           <div className={styles.avatar}>
                              <img src={authorAvt1} alt='avatar' />
                           </div>
                           <span className={styles.name}>By Scott Jackson </span>
                           <span>-</span>
                           <span className={styles.time}>July 2, 2021</span>
                        </div>

                        <h5 className={styles.title}>
                           <Link to='/blogs/1'>Super Simple Blog Post Small</Link>
                        </h5>

                        <p className={styles.desc}>«Travel is the healthiest addiction»</p>
                     </div>
                  </div>
                  <div className={styles.resultItem}>
                     <div className={styles.thumbnail}>
                        <img src={resultThumb1} alt='thumbnail' />
                        <div className={styles.categories}>
                           <Link className={styles.link} to='/blogs/categories/1'>
                              Sun
                           </Link>
                           {', '}
                           <Link className={styles.link} to='/blogs/categories/1'>
                              Life
                           </Link>
                        </div>
                     </div>

                     <div className={styles.content}>
                        <div className={styles.postAuthor}>
                           <div className={styles.avatar}>
                              <img src={authorAvt1} alt='avatar' />
                           </div>
                           <span className={styles.name}>By Scott Jackson </span>
                           <span>-</span>
                           <span className={styles.time}>July 2, 2021</span>
                        </div>

                        <h5 className={styles.title}>
                           <Link to='/blogs/1'>Super Simple Blog Post Small</Link>
                        </h5>

                        <p className={styles.desc}>«Travel is the healthiest addiction»</p>
                     </div>
                  </div>
                  <div className={styles.resultItem}>
                     <div className={styles.thumbnail}>
                        <img src={resultThumb1} alt='thumbnail' />
                        <div className={styles.categories}>
                           <Link className={styles.link} to='/blogs/categories/1'>
                              Sun
                           </Link>
                           {', '}
                           <Link className={styles.link} to='/blogs/categories/1'>
                              Life
                           </Link>
                        </div>
                     </div>

                     <div className={styles.content}>
                        <div className={styles.postAuthor}>
                           <div className={styles.avatar}>
                              <img src={authorAvt1} alt='avatar' />
                           </div>
                           <span className={styles.name}>By Scott Jackson </span>
                           <span>-</span>
                           <span className={styles.time}>July 2, 2021</span>
                        </div>

                        <h5 className={styles.title}>
                           <Link to='/blogs/1'>Super Simple Blog Post Small</Link>
                        </h5>

                        <p className={styles.desc}>«Travel is the healthiest addiction»</p>
                     </div>
                  </div>
               </div>

               <button className={styles.viewAllResultBtn}>View all search results</button>
            </div>

            {/* menu modal */}
            <div className={`${styles.menuModal} ${openMenu ? styles.open : ''}`}>
               <button className={styles.closeMenuBtn} onClick={() => setOpenMenu(!openMenu)}>
                  <FontAwesomeIcon icon={faX} />
               </button>

               <div className={styles.menuSearchInput}>
                  <input type='text' name='search' placeholder='Search...' />

                  <div className={styles.searchIcon}>
                     <FontAwesomeIcon icon={faSearch} />
                  </div>
               </div>

               <div className={styles.navMenu}>
                  <div className={styles.navMenuItem}>
                     <NavLink
                        to='/'
                        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                     >
                        Home
                     </NavLink>
                  </div>

                  <div className={styles.navMenuItem}>
                     <NavLink
                        to='/about'
                        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                     >
                        About
                     </NavLink>
                     <div
                        className={`${styles.collapseIcon} ${openAboutCollapse ? styles.open : ''}`}
                        onClick={e => {
                           e.stopPropagation()
                           setOpenAboutCollapse(!openAboutCollapse)
                        }}
                     >
                        <FontAwesomeIcon icon={faChevronRight} />
                     </div>
                  </div>
                  <div
                     className={`${styles.collapseContent} ${openAboutCollapse ? styles.openAbout : ''}`}
                  >
                     <NavLink
                        to='/about'
                        className={`${styles.collapseLinkItem} ${aboutUsActive ? styles.active : ''}`}
                     >
                        About Us
                     </NavLink>
                     <NavLink
                        to='/about/author'
                        className={`${styles.collapseLinkItem} ${authorPageActive ? styles.active : ''}`}
                     >
                        Author Page
                     </NavLink>
                  </div>

                  <div className={styles.navMenuItem}>
                     <NavLink
                        to='/categories'
                        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                     >
                        Categories
                     </NavLink>
                     <div
                        className={`${styles.collapseIcon} ${openCategoriesCollapse ? styles.open : ''}`}
                        onClick={e => {
                           e.stopPropagation()
                           setOpenCategoriesCollapse(!openCategoriesCollapse)
                        }}
                     >
                        <FontAwesomeIcon icon={faChevronRight} />
                     </div>
                  </div>
                  <div
                     className={`${styles.collapseContent} ${
                        openCategoriesCollapse ? styles.openCategories : ''
                     }`}
                  >
                     <NavLink
                        to='/categories'
                        className={`${styles.collapseLinkItem} ${allCateActive ? styles.active : ''}`}
                     >
                        All Categories
                     </NavLink>
                     <NavLink
                        to='/categories/lifestyle'
                        className={`${styles.collapseLinkItem} ${lifeStyleActive ? styles.active : ''}`}
                     >
                        Lifestyle
                     </NavLink>
                     <NavLink
                        to='/categories/travel'
                        className={`${styles.collapseLinkItem} ${travelActive ? styles.active : ''}`}
                     >
                        Travel
                     </NavLink>
                     <NavLink
                        to='/categories/adventure'
                        className={`${styles.collapseLinkItem} ${adventureActive ? styles.active : ''}`}
                     >
                        Adventure
                     </NavLink>
                  </div>

                  <div className={styles.navMenuItem}>
                     <NavLink
                        to='/contributors'
                        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                     >
                        Contributors
                     </NavLink>
                  </div>
                  <div className={styles.navMenuItem}>
                     <NavLink
                        to='/podcast'
                        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                     >
                        Podcast
                     </NavLink>
                  </div>
                  <div className={styles.navMenuItem}>
                     <NavLink
                        to='/policy'
                        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                     >
                        Policy
                     </NavLink>
                  </div>
                  <div className={styles.navMenuItem}>
                     <NavLink
                        to='/contact'
                        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                     >
                        Contact
                     </NavLink>
                  </div>
               </div>

               <div className={styles.socials}>
                  <a
                     className={styles.socialItem}
                     href='https://www.facebook.com/'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={facebook} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://www.linkedin.com/'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={linkedin} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://twitter.com/'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={twitter} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://www.instagram.com/'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={instagram} alt='social' />
                  </a>

                  <a
                     className={styles.socialItem}
                     href='https://www.pinterest.com/'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={pinterest} alt='social' />
                  </a>
                  <a
                     className={styles.socialItem}
                     href='https://www.youtube.com/'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <img src={youtube} alt='social' />
                  </a>
               </div>
            </div>
         </div>
      </header>
   )
}

export default memo(Header)
