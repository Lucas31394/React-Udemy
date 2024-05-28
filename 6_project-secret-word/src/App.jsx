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

const standardAttempets = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [chosenWord, setChosenWord] = useState("");
  const [chosenCategory, setChosenCategory] = useState("");
  const [letters, setletters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [attempts, setAttempts] = useState(standardAttempets);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    const word = words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return {word, category};
  }, [words])

  console.log(words);

  // Starts the secret word game
  const start = useCallback(() => {
    // clear all letters
    clearLettersStates();

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
  }, [pickWordAndCategory]);

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

      setAttempts((actualAttempts) => actualAttempts - 1);
    }
  };

  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // Check if all the attempts has been used
  useEffect(() => {
    if(attempts <= 0) {
      // Reset all states
      clearLettersStates();

      setGameStage(stages[2].name)
    }
  }, [attempts])

  // Check win condition
  useEffect(() => {
    const uniqueLetters = [... new Set(letters)];

    // Wind Condition
    if(guessedLetters.length === uniqueLetters.length) {
      // Set Score
      setScore((actualScore) => actualScore += 100);

      // restart the game
      start();
    }
  }, [guessedLetters, letters, start])

  // Restart the game
  const restart = () => {
    setScore(0);
    setAttempts(standardAttempets);
    setGameStage(stages[0].name);
  };

  return (
    <>
      <div className='App'>
        {gameStage === 'start' && <StartScreen start = {start}/>}
        {gameStage === 'game' && <Game verify = {verify} chosenWord = {chosenWord} chosenCategory = {chosenCategory} letters = {letters} guessedLetters = {guessedLetters} wrongLetters = {wrongLetters} attempts = {attempts} score = {score}/>}
        {gameStage === 'end' && <GameOver restart = {restart} score = {score}/>}
      </div>
    </>
  )
}

export default App
