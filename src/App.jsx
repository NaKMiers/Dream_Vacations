import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Header from './components/Header'
import ScrollToTopButton from './components/ScrollToTopButton'
import Subscribe from './components/Subscribe'
import AboutUsPage from './pages/AboutUsPage'
import AdventurePage from './pages/AdventurePage'
import AuthorPage from './pages/AuthorPage'
import BlogCategoryPage from './pages/BlogCategoryPage'
import BlogPage from './pages/BlogPage'
import CategoriesPage from './pages/CategoriesPage'
import ContactPage from './pages/ContactPage'
import ContributorsPage from './pages/ContributorsPage'
import HomePage from './pages/HomePage'
import LifeStylePage from './pages/LifeStylePage'
import PodcastPage from './pages/PodcastPage'
import PolicyPage from './pages/PolicyPage'
import TravelPage from './pages/TravelPage'
import TravelPurchase from './components/TravelPurchase'
import Footer from './components/Footer'
import FooterNav from './components/FooterNav'

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

         <ScrollToTopButton />

         <Subscribe />
         <TravelPurchase />
         <Footer />
         <FooterNav />
      </div>
   )
}

export default App
