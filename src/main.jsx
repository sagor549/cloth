import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ContactPage from './pages/ContactPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import './index.css'

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Enhanced Router with scroll management
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)