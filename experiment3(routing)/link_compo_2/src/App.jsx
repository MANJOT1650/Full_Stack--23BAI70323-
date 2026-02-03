import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="page home">
      <h1>Home Page</h1>
      <div className="student-info">
        <h3>Student Details</h3>
        <p><strong>Name:</strong> Manjot Singh</p>
        <p><strong>UID:</strong> 23BAI70323</p>
        <p><strong>Section:</strong> 23ANL-3(B)</p>
      </div>
    </div>
  )
}

function Profile() {
  return (
    <div className="page profile">
      <h1>My Profile</h1>
      <div className="interview-intro">
        <h2>About Me</h2>
        <p>I am a passionate developer with a strong foundation in Full Stack technologies. I love building intuitive user interfaces and solving complex backend challenges.</p>
        
        <h2>Programming Skills</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>💻 <strong>Frontend:</strong> HTML, CSS, JavaScript, React</li>
          <li>⚙️ <strong>Backend:</strong> Node.js, Express</li>
          <li>🗄️ <strong>Database:</strong> MongoDB, SQL</li>
          <li>🔧 <strong>Tools:</strong> Git, GitHub, VS Code</li>
        </ul>
      </div>
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
