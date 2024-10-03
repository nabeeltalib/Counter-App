import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
if ( count === 0) {
  alert("Please Don't Spread Negativity Stop Pressing The Button");

}

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter Program</h1>
      <h1>Count is {count}</h1>
      <div className="card">
      <h3>Addition in Counter Program</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          Add Count
        </button>
      </div>
      <div className="card">
      <h3>Subtraction in Counter Program</h3>
        <button onClick={() => setCount((count) => count - 1)} disabled={count === 0} >
          Sub Count
        </button>
      </div>

    </>
  )
}

export default App
