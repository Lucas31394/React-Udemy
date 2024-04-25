import './Game.css';

const Game = ({verify, chosenWord, chosenCategory, letters, guessedLetters, wrongLetters, attempts, score}) => {
  return (
    <div className="game">
      <p className="points">
        <span>Points: {score}</span>
      </p>
      <h1>Guess the word</h1>
      <h3 className="tip">
        Tip about the word: <span>{chosenCategory}</span>
      </h3>
      <p>You have {attempts} attempts left.</p>
      <div className="wordContainer">
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">{letter}</span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
      </div>
      <div className="letterContainer">
        <p>Try to guess a letter: </p>
        <form>
          <input type="text" name='letter' maxLength={1} required />
          <button>Play!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letters used: </p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game