import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="card">
      <h1>Counter {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        +
      </button>
      
      <button onClick={() => setCount((count) => count - 1)}>
        -
      </button>
    </div>
  )
}

export default App
