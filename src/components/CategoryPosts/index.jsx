import React, { memo } from 'react'
import CategoryItem from './CategoryItem'
import styles from './style.module.scss'
import { useSelector } from 'react-redux'

const findInArray = (x, array) => {
   for (const item of array) {
      if (item.toLowerCase().includes(x.toLowerCase())) {
         return true
      }
   }
   return false
}

function CategoryPosts({ id }) {
   const { blogs } = useSelector(state => state.blogs)
   const data = blogs.filter(blog => blog.categories && findInArray(id, blog.categories))

   console.log(data)

   return (
      <section className={styles.CategoryPosts}>
         <div className={`${styles.container} container`}>
            {data.map(blog => (
               <CategoryItem data={blog} key={blog.id} />
            ))}
         </div>
      </section>
   )
}

export default memo(CategoryPosts)
