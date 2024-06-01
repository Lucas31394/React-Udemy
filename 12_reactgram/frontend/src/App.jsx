import { useState } from 'react';
import './App.css';

// Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Page
import Home from "./pages/Home/Home";
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
