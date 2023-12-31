import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import Greeting from '../../components/Greeting'
import Stats from '../../components/Stats'
import OurAbout from '../../components/OurAbout'
import FeaturedAuthors from '../../components/FeaturedAuthors'
import Vision from '../../components/Vision'
import AuthorReviews from '../../components/AuthorReviews'

import visionThumbnail1 from '../../assets/images/visionThumbnail1.jpg'
import visionThumbnail2 from '../../assets/images/visionThumbnail2.jpg'
import aboutBanner1 from '../../assets/images/aboutBanner1.jpg'
import aboutImage from '../../assets/images/aboutImage.jpg'

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
            color: '#31dcf2',
         },
         {
            label: 'Travel',
            percent: 60,
            color: '#97e7af',
         },
         {
            label: 'Active',
            percent: 73,
            color: '#53b2f0',
         },
         {
            label: 'Lifestyle',
            percent: 80,
            color: '#608fe6',
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
         <WelcomeBannerLite
            title='About The Gem'
            subTitle='«Travel is the healthiest addiction»'
            background={aboutBanner1}
         />
         <Greeting
            type='about'
            title='Welcome to TheGem Travel Blog'
            behindTitle='Welcome'
            contents={[
               'Our goal at Vacations & Travel TheGem Blog is to connect our readers and audience with the vast amount of travel destinations throughout our wonderful planet.',
               'Our mission is to inspire people to discover unique locations and show them ways to plan and book their dream vacation. Established in 2000, Vacations & Travel magazine is highly respected and the longest-running quarterly travel blog title.',
            ]}
            images={[aboutImage]}
         />
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
