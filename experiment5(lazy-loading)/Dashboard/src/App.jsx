import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'

// Lazy loading components
const Navbar = lazy(() => import('./components/Navbar'))
// Lazy loading components with simulated delay so you can see the effect on localhost
const Home = lazy(() => import('./Home'))
const Profile = lazy(() => import('./Profile'))
const Settings = lazy(() => import('./Settings'))

// Premium Loading indicator component
const Loading = () => (
  <div className="loading-container" style={{ animation: 'fadeIn 0.3s ease-in' }}>
    <div className="loader"></div>
    <div className="loading-text">Updating dashboard...</div>
  </div>
)


const NavPlaceholder = () => (
  <div className="nav-placeholder" style={{ height: '60px', background: '#2a2a2a', borderRadius: '12px', marginBottom: '1rem' }}>
    <p style={{ margin: 0, padding: '1rem', color: '#666' }}>Loading Navigation...</p>
  </div>
)

function App() {
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  // Show loading state on every internal navigation
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <Suspense fallback={<NavPlaceholder />}>
        <Navbar />
      </Suspense>

      <div className="content">
        {isNavigating ? (
          <Loading />
        ) : (
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Suspense>
        )}
      </div>
    </div>
  )
}


export default App
