// React
import { useState, useCallback, useEffect } from 'react';
// CSS
import './App.css';
// Data
import { wordsList } from './data/words';
// Components
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  console.log(words);

  // Starts the secret word game
  const start = () => {
    setGameStage(stages[1].name);
  };

  // Verify the input letter
  const verify = () => {
    setGameStage(stages[2].name);
  };

  // Restart the game
  const restart = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      <div className='App'>
        {gameStage === 'start' && <StartScreen start = {start}/>}
        {gameStage === 'game' && <Game verify = {verify}/>}
        {gameStage === 'end' && <GameOver restart={restart}/>}
      </div>
    </>
  )
}

export default App
