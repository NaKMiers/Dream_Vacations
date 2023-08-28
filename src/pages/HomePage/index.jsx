import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBanner from '../../components/WelcomeBanner'
import BlogFeed from '../../components/BlogFeed'
import TopCategories from '../../components/TopCategories'
import OurAbout from '../../components/OurAbout'
import BlogGallery from '../../components/BlogGallery'
import AuthorReviews from '../../components/AuthorReviews'
import EditorPickedNews from '../../components/EditorPickedNews'
import FeaturedAuthors from '../../components/FeaturedAuthors'
import RecentPosts from '../../components/RecentPosts'
import TravelHighlights from '../../components/TravelHighlights'

import authorReviewThumb1 from '../../assets/images/authorReviewThumb1.jpg'
import authorReviewThumb2 from '../../assets/images/authorReviewThumb2.jpg'
import authorAvt2 from '../../assets/images/authorAvt2.jpg'
import authorAvt3 from '../../assets/images/authorAvt3.jpg'

const moduleData = [
   {
      type: 'thumbnail',
      source: authorReviewThumb1,
   },
   {
      type: 'author',
      avatar: authorAvt2,
      name: 'Nathan Matthews',
      title: `Wherever you go, go\nwith all your heart!`,
      date: '24 March 2019',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
   },
   {
      type: 'author',
      avatar: authorAvt3,
      name: 'Julianna Galanis',
      title: `Then I realized adventures\nare the best way to learn.`,
      date: '24 June 2019',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
   },
   {
      type: 'thumbnail',
      source: authorReviewThumb2,
   },
]

function HomePage() {
   return (
      <div className={styles.HomePage}>
         <WelcomeBanner />
         <BlogFeed />
         <TopCategories />
         <OurAbout
            title='Our Stoies'
            backgroundTitle='Blog'
            content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat'
            noBtn={false}
         />
         <BlogGallery />
         <AuthorReviews heading='Hot Tours Author’s Reviews' data={moduleData} />
         <EditorPickedNews />
         <FeaturedAuthors title='Featured Authors' />
         <RecentPosts />
         <TravelHighlights />
      </div>
   )
}

export default memo(HomePage)
