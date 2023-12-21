// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  // const MyObj = {
  //   username: "iswar",
  //   age: 25,
  //   country: "India"
  // }

  return (
    <>
      <h1 className='bg-blue-500 text-black rounded-xl mb-4'>Tailwind</h1>
      <Card username="Bitu" btnText="Visit" />
      <Card username="Iswar" btnText="Click me" />
    </>
  )
}

export default App
