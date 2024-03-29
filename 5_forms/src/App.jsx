import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Forms</h2>
        <MyForm user={{name: "Lucas", email: "lucas@gmail.com", bio: "Im a web developer", role: "admin"}}/>
      </div>
    </>
  )
}

export default App
