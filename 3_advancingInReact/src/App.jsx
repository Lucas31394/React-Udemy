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
import CarDetails from './components/CarDetails'

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
        {/*props*/}
        <ShowUsername user={username}/>
        {/*destructuring*/}
        <CarDetails brand="VW" km={100000} color="blue" newCar={false}/>
        {/*reusing components*/}
        <CarDetails brand="BMW" km={0} color="black" newCar={true}/>
        <CarDetails brand="Chevrolet" km={70000} color="red" newCar={false}/>
      </div>
    </>
  )
}

export default App
