import './GameOver.css';

const GameOver = ({restart}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={restart}>Try Again!</button>
    </div>
  )
}

export default GameOver