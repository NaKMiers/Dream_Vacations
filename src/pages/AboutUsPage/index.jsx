import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import Greeting from '../../components/Greeting'
import Stats from '../../components/Stats'
import OurAbout from '../../components/OurAbout'
import FeaturedAuthors from '../../components/FeaturedAuthors'
import Vision from '../../components/Vision'
import AuthorReviews from '../../components/AuthorReviews'

import visionThumbnail1 from '../../assets/imgs/visionThumbnail1.jpg'
import visionThumbnail2 from '../../assets/imgs/visionThumbnail2.jpg'

const moduleData = [
   {
      type: 'thumbnail',
      source: visionThumbnail1,
   },
   {
      type: 'progress',
      content:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod exercitation tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, nostrud ullamco laboris nisi ut aliquip ex ea commodo. Duis aute irure dolor in voluptate velit.',
      progresses: [
         {
            label: 'Adventure',
            percent: 89,
         },
         {
            label: 'Travel',
            percent: 60,
         },
         {
            label: 'Active',
            percent: 73,
         },
         {
            label: 'Lifestyle',
            percent: 80,
         },
      ],
   },
   {
      type: 'text-box',
      content:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod exercitation tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, nostrud ullamco laboris nisi ut aliquip ex ea commodo. Duis aute irure dolor in voluptate velit.',
      boxContents: [
         {
            text: 'Adipisicing elit, sed do eiusmod tempor incididunt ut labore et consectetur aliqua enimad minim veniam quis nostrud ullamco laboris nisi ut aliquip.',
            textColor: '#00bcd4',
         },
         {
            text: 'Adipisicing elit, sed do eiusmod tempor incididunt ut labore et consectetur aliqua enimad minim veniam quis nostrud ullamco laboris nisi ut aliquip.',
            textColor: '#7fcf96',
         },
         {
            text: 'Adipisicing elit, sed do eiusmod tempor incididunt ut labore et consectetur aliqua enimad minim veniam quis nostrud ullamco laboris nisi ut aliquip.',
            textColor: '#608fe6',
         },
      ],
   },
   {
      type: 'thumbnail',
      source: visionThumbnail2,
   },
]

function AboutUsPage() {
   return (
      <div className={styles.AboutUsPage}>
         <WelcomeBannerLite title='About The Gem' subTitle='«Travel is the healthiest addiction»' />
         <Greeting />
         <Stats />
         <OurAbout
            title='Our Mission'
            backgroundTitle='Mission'
            content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
            noBtn
         />
         <AuthorReviews heading='Vision Our Blog' data={moduleData} />
         <Vision />
         <FeaturedAuthors title='TheGem Authors' all style={{ padding: '55px 0 40px' }} />
      </div>
   )
}

export default memo(AboutUsPage)
