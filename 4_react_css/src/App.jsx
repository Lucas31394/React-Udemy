import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Session 4 - React and CSS</h1>
        {/*Component CSS  */}
        <MyComponent />
        <p>This is the App.jsx paragraph.</p>
      </div>
    </>
  )
}

export default App
