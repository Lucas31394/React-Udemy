import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello World - React!</h1>
        <h2>Learning the fundamentals of <span className='react-color'>React</span></h2>
      </div>
    </>
  )
}

export default App
