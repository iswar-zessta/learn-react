import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCounter] = useState(15)

  const addValue = () => {
    if (count >= 20) {
      return;
    }
    setCounter(count + 1)
  }
  const decValue = () => {
    if (count <= 0) {
      return;
    }
    setCounter(count - 1)
  }

  return (
    <>
      <h1>Hello  React</h1>
      <h2>counter value: {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
