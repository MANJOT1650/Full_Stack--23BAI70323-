import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="page home">
      <h1>Home Page</h1>
      <p>Welcome to the Link Component experiment.</p>
    </div>
  )
}

function Profile() {
  return (
    <div className="page profile">
      <h1>Profile Page</h1>
      <p>This is the Profile page, accessed via Link.</p>
    </div>
  )
}

function Settings() {
  return (
    <div className="page settings">
      <h1>Settings Page</h1>
      <p>Configure your preferences here.</p>
    </div>
  )
}

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
