import './Game.css';

const Game = ({verify}) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verify}>Check!</button>
    </div>
  )
}

export default Game