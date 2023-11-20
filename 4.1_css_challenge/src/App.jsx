import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarsInfo from './components/CarsInfo'

function App() {
  const [count, setCount] = useState(0)

  const cars = [
    {id: 1, model: "Corolla",brand: "Toyota", color: "Gray", year: 2012},
    {id: 2, model: "TT",brand: "Audi", color: "Silver", year: 2015},
    {id: 3, model: "Impala",brand: "Chevrollet", color: "Black", year: 1967},
    {id: 4, model: "Mustang",brand: "Ford", color: "Red", year: 1975}
  ];

  return (
    <>
      <div>
        <h1 id='MainTitle'>CSS Challenge</h1>
        {cars.map((car) => (
          <CarsInfo key={car.id} model={car.model} brand={car.brand} color={car.color} year={car.year}/>
        ))}
      </div>
    </>
  )
}

export default App
