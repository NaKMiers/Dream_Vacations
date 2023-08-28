import React, { memo } from 'react'
import styles from './style.module.scss'
import categoryBanner1 from '../../assets/imgs/categoryBanner1.jpg'
import WelcomeBannerLite from '../../components/WelcomeBannerLite'
import AuthorReviews from '../../components/AuthorReviews'
import EditorPickedNews from '../../components/EditorPickedNews'
import categoryThumb1 from '../../assets/imgs/categoryThumb1.jpg'
import categoryThumb2 from '../../assets/imgs/categoryThumb2.jpg'
import categoryThumb3 from '../../assets/imgs/categoryThumb3.jpg'
import categoryThumb4 from '../../assets/imgs/categoryThumb4.jpg'
import categoryThumb5 from '../../assets/imgs/categoryThumb5.jpg'
import categoryThumb6 from '../../assets/imgs/categoryThumb6.jpg'
import categoryThumb7 from '../../assets/imgs/categoryThumb7.jpg'
import categoryIcon1 from '../../assets/imgs/categoryIcon1.png'
import categoryIcon2 from '../../assets/imgs/categoryIcon2.webp'
import categoryIcon3 from '../../assets/imgs/categoryIcon3.webp'
import categoryIcon4 from '../../assets/imgs/categoryIcon4.webp'
import categoryIcon5 from '../../assets/imgs/categoryIcon5.webp'
import categoryIcon6 from '../../assets/imgs/categoryIcon6.webp'
import categoryIcon7 from '../../assets/imgs/categoryIcon7.webp'

const moduleData = [
   {
      type: 'thumbnail',
      source: categoryThumb1,
   },
   {
      type: 'category',
      icon: categoryIcon1,
      title: 'Adventure',
      posts: 5690,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
   },

   {
      type: 'category',
      icon: categoryIcon2,
      title: 'Travel',
      posts: 5690,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
   },
   {
      type: 'thumbnail',
      source: categoryThumb2,
   },

   {
      type: 'thumbnail',
      source: categoryThumb3,
   },
   {
      type: 'category',
      icon: categoryIcon3,
      title: 'Lifestyle',
      posts: 5690,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
   },

   {
      type: 'category',
      icon: categoryIcon4,
      title: 'Routes',
      posts: 5690,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
   },
   {
      type: 'thumbnail',
      source: categoryThumb4,
   },

   {
      type: 'thumbnail',
      source: categoryThumb5,
   },
   {
      type: 'category',
      icon: categoryIcon5,
      title: 'Food & Drink',
      posts: 5690,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
   },

   {
      type: 'category',
      icon: categoryIcon6,
      title: 'Active',
      posts: 5690,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
   },
   {
      type: 'thumbnail',
      source: categoryThumb6,
   },

   {
      type: 'thumbnail',
      source: categoryThumb7,
   },
   {
      type: 'category',
      icon: categoryIcon7,
      title: 'Reviews',
      posts: 5690,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
   },
]

function CategoriesPage() {
   return (
      <div className={styles.CategoriesPage}>
         <WelcomeBannerLite
            title='Categories'
            subTitle='«Travel is the healthiest addiction»'
            background={categoryBanner1}
         />
         <AuthorReviews data={moduleData} />
         <EditorPickedNews style={{ marginTop: -80 }} />
      </div>
   )
}

export default memo(CategoriesPage)
