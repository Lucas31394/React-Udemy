import "./StartScreen.css";

import React from 'react'

const StartScreen = ({start}) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Click on the button bellow to start.</p>
        <button onClick={start}>Start Game</button>
    </div>
  )
}

export default StartScreen