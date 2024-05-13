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

  const [chosenWord, setChosenWord] = useState("");
  const [chosenCategory, setChosenCategory] = useState("");
  const [letters, setletters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [attempts, setAttempts] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    const word = words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return {word, category};
  }

  console.log(words);

  // Starts the secret word game
  const start = () => {
    // pick a word and category
    const { word, category } = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // fill states
    setChosenWord(word);
    setChosenCategory(category);
    setletters(wordLetters);

    console.log(word, category);
    console.log(wordLetters);

    setGameStage(stages[1].name);
  };

  // Verify the input letter
  const verify = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // Check if the letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }
    
    // Push the letter to the guessed letters or remove a chance
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ]);
    }
    else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter
      ]);
    }

    console.log(guessedLetters);
    console.log(wrongLetters);
  };

  // Restart the game
  const restart = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      <div className='App'>
        {gameStage === 'start' && <StartScreen start = {start}/>}
        {gameStage === 'game' && <Game verify = {verify} chosenWord = {chosenWord} chosenCategory = {chosenCategory} letters = {letters} guessedLetters = {guessedLetters} wrongLetters = {wrongLetters} attempts = {attempts} score = {score}/>}
        {gameStage === 'end' && <GameOver restart={restart}/>}
      </div>
    </>
  )
}

export default App
