import { faChevronRight, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import logoFooter from '../../assets/imgs/logo-footer.png'
import styles from './style.module.scss'
import twitter from '../../assets/imgs/twitter.png'

function Footer() {
   return (
      <footer className={styles.Footer}>
         <div className={`${styles.container} container`}>
            <div className={`${styles.item} ${styles.item1}`}>
               <div className={styles.logo}>
                  <img src={logoFooter} alt='logo' />
               </div>

               <p className={styles.desc}>
                  Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                  quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                  sed odio sit amet vulputate cursus a sit amet.
               </p>
            </div>

            <div className={`${styles.item} ${styles.item2}`}>
               <h3 className={styles.title}>Useful links</h3>

               <ul className={styles.features}>
                  <li>General Information For Users</li>
                  <li>Interactive Fairy Tales</li>
                  <li>Official Storybook Maker Website</li>
                  <li>Everyday Mathematics Links</li>
                  <li>Basic Knowledge and Experience</li>
                  <li>Research Activities Programm</li>
               </ul>
            </div>

            <div className={`${styles.item} ${styles.item3}`}>
               <h3 className={styles.title}>Twitter Feed</h3>

               <div className={styles.tweetWrap}>
                  <div className={styles.tweetItem}>
                     <div className={styles.icon}>
                        <img src={twitter} alt='icon' />
                        <span>2 years ago</span>
                     </div>

                     <p className={styles.content}>
                        #WordPress redirect best practices to maximize #SEO and #pagespeed. Take a look
                        at the detailed analysis of the imp…{' '}
                        <a className={styles.link} href='/' target='_blank' rel='noreferrer'>
                           https://t.co/Ew4F9rvx1t
                        </a>
                     </p>
                  </div>

                  <div className={styles.tweetItem}>
                     <div className={styles.icon}>
                        <img src={twitter} alt='icon' />
                        <span>2 years ago</span>
                     </div>

                     <p className={styles.content}>
                        How to duplicate pages, posts, products etc. in #WordPress ? Check this useful
                        tool{' '}
                        <a className={styles.link} href='/' target='_blank' rel='noreferrer'>
                           https://t.co/Bu5H0jRrTh
                        </a>
                     </p>
                  </div>

                  <div className={styles.tweetItem}>
                     <div className={styles.icon}>
                        <img src={twitter} alt='icon' />
                        <span>2 years ago</span>
                     </div>

                     <p className={styles.content}>
                        Want to allow your customers to book an appointment directly from your #WordPress
                        site? Check this 6 nice #plugins…{' '}
                        <a className={styles.link} href='/' target='_blank' rel='noreferrer'>
                           https://t.co/zG3iMhewA5
                        </a>
                     </p>
                  </div>
               </div>
            </div>

            <div className={`${styles.item} ${styles.item4}`}>
               <h3 className={styles.title}>Recent Comments</h3>

               <div className={styles.recentCommentWrap}>
                  <div className={styles.recentCommentItem}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCommentDots} />
                     </div>

                     <p className={styles.authorLink}>
                        <span>Jessica Jane</span> on{' '}
                        <Link className={styles.link} to='/blog/1'>
                           Best Trip
                        </Link>
                     </p>
                  </div>
                  <div className={styles.recentCommentItem}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCommentDots} />
                     </div>

                     <p className={styles.authorLink}>
                        <span>Lisa Emerson</span> on{' '}
                        <Link className={styles.link} to='/blog/1'>
                           Best Trip
                        </Link>
                     </p>
                  </div>
                  <div className={styles.recentCommentItem}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCommentDots} />
                     </div>

                     <p className={styles.authorLink}>
                        <span>Jessica Jane</span> on{' '}
                        <Link className={styles.link} to='/blog/1'>
                           Best Trip
                        </Link>
                     </p>
                  </div>
                  <div className={styles.recentCommentItem}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCommentDots} />
                     </div>

                     <p className={styles.authorLink}>
                        <span>Lisa Emerson</span> on{' '}
                        <Link className={styles.link} to='/blog/1'>
                           Best Trip
                        </Link>
                     </p>
                  </div>
               </div>
            </div>

            <div className={`${styles.item} ${styles.item5}`}>
               <h3 className={styles.title}>Newsletter</h3>

               <p className={styles.desc}>
                  Subscribe to our MailChimp newsletter and stay up to date with all events coming
                  straight in your mailbox:
               </p>

               <form className={styles.inputWrap}>
                  <input
                     className={styles.input}
                     type='email'
                     name='email'
                     placeholder='Your email address'
                     required
                  />

                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faChevronRight} />
                  </div>
               </form>

               <div className={styles.smallText}>* Personal data will be encrypted</div>
            </div>

            <div className={`${styles.item} ${styles.item6}`}>
               <h3 className={styles.title}>Tags</h3>

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
      </footer>
   )
}

export default memo(Footer)
