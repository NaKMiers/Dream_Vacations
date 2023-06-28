import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import BlogType3 from '../BlogType3'
import SeparatorTitle from '../SeparatorTitle'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import banner from '../../assets/imgs/banner.png'
import facebook from '../../assets/imgs/facebook-color.png'
import linkedin from '../../assets/imgs/linkedin-color.png'
import twitter from '../../assets/imgs/twitter-color.png'
import instagram from '../../assets/imgs/instagram-color.png'
import pinterest from '../../assets/imgs/pinterest-color.png'
import youtube from '../../assets/imgs/youtube-color.png'

function RecentPosts() {
   const { blogs, recentPosts } = useSelector(state => state.blogs)
   const data = recentPosts.map(id => {
      return blogs.find(blog => blog.id === id)
   })

   return (
      <section className={styles.RecentPosts}>
         <SeparatorTitle title='Recent Posts' dark style={{ margin: '50px 0 50px' }} />

         <div className={`${styles.container} container`}>
            <div className={styles.postWrap}>
               {data.map(post => (
                  <BlogType3 data={post} />
               ))}
            </div>

            <div className={styles.sideContent}>
               <div className={styles.search}>
                  <input className={styles.input} type='text' />

                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faSearch} />
                  </div>
               </div>

               <div className={styles.banner}>
                  <img src={banner} alt='banner' />
               </div>

               <h4 className={styles.sideTitle}>Newsletter</h4>

               <div className={styles.formFiled}>
                  <p>
                     Subscribe to our MailChimp newsletter and stay up to date with all events coming
                     straight in your mailbox:
                  </p>

                  <form className={styles.form}>
                     <input className={styles.input} type='text' placeholder='Your Email Address' />

                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faChevronRight} />
                     </div>
                  </form>

                  <p>* Personal data will be encrypted</p>
               </div>

               <h4 className={styles.sideTitle}>Follow Us</h4>

               <div className={styles.socialWrap}>
                  <a className={styles.socialItem} href='/' target='_blank' rel='noreferrer'>
                     <img src={facebook} alt='social' />
                  </a>
                  <a className={styles.socialItem} href='/' target='_blank' rel='noreferrer'>
                     <img src={linkedin} alt='social' />
                  </a>
                  <a className={styles.socialItem} href='/' target='_blank' rel='noreferrer'>
                     <img src={twitter} alt='social' />
                  </a>
                  <a className={styles.socialItem} href='/' target='_blank' rel='noreferrer'>
                     <img src={instagram} alt='social' />
                  </a>
                  <a className={styles.socialItem} href='/' target='_blank' rel='noreferrer'>
                     <img src={pinterest} alt='social' />
                  </a>
                  <a className={styles.socialItem} href='/' target='_blank' rel='noreferrer'>
                     <img src={youtube} alt='social' />
                  </a>
               </div>

               <h4 className={styles.sideTitle}>Tags</h4>

               <div className={styles.tagWrap}>
                  <div className={styles.tagItem}>Agency</div>
                  <div className={styles.tagItem}>Design</div>
                  <div className={styles.tagItem}>Fy</div>
                  <div className={styles.tagItem}>Holiday</div>
                  <div className={styles.tagItem}>Lifestyle</div>
                  <div className={styles.tagItem}>Media</div>
                  <div className={styles.tagItem}>Nature</div>
                  <div className={styles.tagItem}>News</div>
                  <div className={styles.tagItem}>People</div>
                  <div className={styles.tagItem}>Photo</div>
                  <div className={styles.tagItem}>Sea</div>
                  <div className={styles.tagItem}>Sun</div>
                  <div className={styles.tagItem}>Travel</div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(RecentPosts)
