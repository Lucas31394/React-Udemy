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
import Fragment from './components/Fragment'
import Container from './components/Container'

function App() {
  const [username] = useState("Lucas")
  const cars = [
    {id: 1, brand: "Toyota", km: 0, color: "gray", newCar: true},
    {id: 2, brand: "Fiat", km: 53000, color: "white", newCar: false},
    {id: 3, brand: "Renault", km: 47000, color: "purple", newCar: false}
  ]

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
        {/*loop through object arrays*/}
        {cars.map((car) => (
          <CarDetails brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
        ))}
        {/*fragment*/}
        <Fragment propFragment="test"/>
        {/*chieldren*/}
        <Container myValue="This is my value">
          <p>This is the container content.</p>
        </Container>
      </div>
    </>
  )
}

export default App
