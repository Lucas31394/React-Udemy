import React from 'react'
//CSS
import "./MyComponent.css";

const MyComponent = () => {
  return (
    <div>
        <h1>Component CSS</h1>
        <p>This is the component paragraph</p>
        <p className='my-component-paragraph'>This is also the component paragraph.</p>
    </div>
  )
}

export default MyComponent