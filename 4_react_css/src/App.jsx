import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0);
  const n = 15;
  const [name] = useState("Lucas"); 

  return (
    <>
      <div>
        {/*Global CSS*/}
        <h1>Session 4 - React and CSS</h1>
        {/*Component CSS*/}
        <MyComponent />
        <p>This is the App.jsx paragraph.</p>
        {/*Inline CSS*/}
        <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>This element has the style attribute inline.</p>
        {/*Dynamic inline CSS*/}
        <h2 style={n < 10 ?   ({color: "purple"}) : ({color: "pink"})}>Dynamic CSS</h2>
        <h2 style={n > 10 ?   ({color: "purple"}) : ({color: "pink"})}>Dynamic CSS</h2>
        <h2 style={name === "Lucas" ?   ({color: "green", backgroundColor: "#000"}) : null}>Dynamic CSS</h2>
      </div>
    </>
  )
}

export default App
