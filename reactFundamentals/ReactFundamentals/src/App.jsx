import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//Components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from "./components/MyComponent";
// Styles - CSS
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1><span className='react-color'>React</span> Fundamentals</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
      </div>
    </>
  )
}

export default App
