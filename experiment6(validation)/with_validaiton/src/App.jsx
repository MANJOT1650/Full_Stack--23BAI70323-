import React from 'react'
import ControlledForm from './ControlledForm'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>React Controlled Components</h1>
      </header>
      <main>
        <ControlledForm />
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Experiment 6 - Full Stack Development</p>
      </footer>
    </div>
  )
}

export default App
