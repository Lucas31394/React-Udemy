import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Advancing in React - Session 3</h1>
        {/*Image available in the public folder*/}
        <div>
            <img src="/img1.jpg" alt="View of a landscape" />
        </div>
      </div>
    </>
  )
}

export default App
