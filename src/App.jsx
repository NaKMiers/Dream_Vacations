import styles from './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import AuthorPage from './pages/AuthorPage'
import AdventurePage from './pages/AdventurePage'
import BlogCategoryPage from './pages/BlogCategoryPage'
import BlogPage from './pages/BlogPage'
import CategoriesPage from './pages/CategoriesPage'
import ContactPage from './pages/ContactPage'
import ContributorsPage from './pages/ContributorsPage'
import LifeStylePage from './pages/LifeStylePage'
import PodcastPage from './pages/PodcastPage'
import PolicyPage from './pages/PolicyPage'
import TravelPage from './pages/TravelPage'
import Header from './components/Header'

function App() {
   return (
      <div className={styles.App}>
         <Header />

         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutUsPage />} />
            <Route path='/about/author' element={<AuthorPage />} />
            <Route path='/categories' element={<CategoriesPage />} />
            <Route path='/categories/lifestyle' element={<LifeStylePage />} />
            <Route path='/categories/travel' element={<TravelPage />} />
            <Route path='/categories/adventure' element={<AdventurePage />} />
            <Route path='/contributors' element={<ContributorsPage />} />
            <Route path='/podcast' element={<PodcastPage />} />
            <Route path='/policy' element={<PolicyPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/blogs/:id' element={<BlogPage />} />
            <Route path='/blogs/categories/:id' element={<BlogCategoryPage />} />
         </Routes>
      </div>
   )
}

export default App
