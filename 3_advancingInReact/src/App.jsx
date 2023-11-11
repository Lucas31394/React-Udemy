import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Images
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRenderer from './components/ListRenderer'
import ConditionalRenderer from './components/ConditionalRenderer'
import ShowUsername from './components/ShowUsername'

function App() {
  const [count, setCount] = useState(0)
  const [username] = useState("Lucas")

  return (
    <>
      <div>
        <h1>Advancing in React - Session 3</h1>
        {/*Image available in the public folder*/}
        <div>
            <img src="/img1.jpg" alt="View of a landscape" />
        </div>
        {/*Image available in the assets folder*/}
        <div>
          <img src={City} alt="City" />
        </div>
        <ManageData/>
        <ListRenderer/>
        <ConditionalRenderer />
        <ShowUsername user={username}/>
      </div>
    </>
  )
}

export default App
