import './GameOver.css';

const GameOver = ({restart, score}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>
        Score: <span>{score}</span>
      </h2>
      <button onClick={restart}>Try Again!</button>
    </div>
  )
}

export default GameOver