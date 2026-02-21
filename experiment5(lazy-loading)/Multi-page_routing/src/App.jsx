import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'


// Lazy loading components
const Navbar = lazy(() => import('./components/Navbar'))
// Lazy loading components with simulated delay so you can see the effect on localhost
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

// Premium Loading indicator component
const Loading = () => (
  <div className="loading-container" style={{ animation: 'fadeIn 0.3s ease-in' }}>
    <div className="loader"></div>
    <div className="loading-text">Fetching dynamic page content...</div>
  </div>
)


const NavPlaceholder = () => (
  <div className="nav-placeholder" style={{ padding: '1rem', background: 'rgba(40, 40, 40, 0.8)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#666' }}>
    Loading Navigation...
  </div>
)

function App() {
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  // Force a small delay on EVERY navigation to show the loading effect
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 600); // 600ms artificial delay

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <Suspense fallback={<NavPlaceholder />}>
        <Navbar />
      </Suspense>

      <div className="content-area">
        {isNavigating ? (
          <Loading />
        ) : (
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        )}
      </div>
    </div>
  )
}


export default App
