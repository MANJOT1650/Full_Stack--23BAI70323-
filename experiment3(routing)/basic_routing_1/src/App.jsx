import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'

function Home() {
  const navigate = useNavigate();
  return (
    <div className="page home">
      <h1>Home Page</h1>
      <p>Welcome to the basic routing experiment.</p>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  )
}

function About() {
  const navigate = useNavigate();
  return (
    <div className="page about">
      <h1>About Page</h1>
      <p>This is the validation of the About route.</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}

function App() {
  return (
    <div className="app-container">
      <nav className="basic-nav">
        <span>Experiment 1: Basic Routing</span>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div className="instructions">
        <p>Use the buttons above to navigate between pages.</p>
      </div>
    </div>
  )
}

export default App
