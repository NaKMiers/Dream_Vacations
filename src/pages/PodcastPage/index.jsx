import React, { memo } from 'react'
import styles from './style.module.scss'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import podcastBanner from '../../assets/images/podcastBanner.jpg'
import Greeting from '../../components/Greeting'
import PodcastFeed from '../../components/PodcastFeed'
import Subscribe2 from '../../components/Subscribe2'

function PodcastPage() {
   return (
      <div className={styles.PodcastPage}>
         <WelcomeBannerLite
            title='Podcast'
            subTitle='«Travel is the healthiest addiction»'
            background={podcastBanner}
         />

         <Greeting
            type='podcast'
            title='TheGem Podcast Blog'
            behindTitle='TheGem'
            contents={[
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            ]}
            checkList={[
               'Lorem ipsum dolor sit amet, consectetur Adipisicing elit, eiusmod',
               'Enim minim veniam nostrud exercitation ullamco laboris nisi',
               'Duis aute irure dolor in reprehenderit in voluptate',
               'Velit esse cillum dolore eu fugiat nulla pariatur',
               'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
               'Lorem ipsum dolor sit amet, consectetur Adipisicing elit, eiusmod',
               'Enim minim veniam nostrud exercitation ullamco laboris nisi',
               'Duis aute irure dolor in reprehenderit in voluptate',
               'Velit esse cillum dolore eu fugiat nulla pariatur',
               'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
            ]}
         />

         <PodcastFeed />
         <Subscribe2 />
      </div>
   )
}

export default memo(PodcastPage)
