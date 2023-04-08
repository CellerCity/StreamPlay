import React, { useState, useEffect } from 'react';
import "../static/css/wordguessinggame.css"

const WordGuessGame = () => {
  const [word, setWord] = useState("");
  const [maxGuesses, setMaxGuesses] = useState(6);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [hint, setHint] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/words.json');
      const data = await response.json();
      const randomWord = data[Math.floor(Math.random() * data.length)];
      setWord(randomWord.word);
      setMaxGuesses(randomWord.word.length >= 5 ? 8 : 6);
      setCorrectLetters([]);
      setIncorrectLetters([]);
      setHint(randomWord.hint);
    };
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const key = event.target.value.toLowerCase();
    if (key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
      if (word.includes(key)) {
        let updatedCorrectLetters = [...correctLetters];
        for (let i = 0; i < word.length; i++) {
          if (word[i] === key) {
            updatedCorrectLetters[i] = key;
          }
        }
        setCorrectLetters(updatedCorrectLetters);
      } else {
        setMaxGuesses(maxGuesses - 1);
        setIncorrectLetters([...incorrectLetters, ` ${key}`]);
      }
    }
    setInputValue("");
  };

  const resetGame = () => {
    setInputValue("");
    setWord("");
    setMaxGuesses(6);
    setIncorrectLetters([]);
    setCorrectLetters([]);
  };

  const renderInputs = () => {
    let inputs = [];
    for (let i = 0; i < word.length; i++) {
      inputs.push(
        <input type="text" value={correctLetters[i] ? correctLetters[i] : ''} disabled key={i} />
      );
    }
    return inputs;
  };

  const renderIncorrectLetters = () => {
    let letters = '';
    for (let i = 0; i < incorrectLetters.length; i++) {
      letters += incorrectLetters[i];
    }
    return letters;
  };

  useEffect(() => {
    if (correctLetters.length === word.length) {
      alert(`Congrats! You found the word ${word.toUpperCase()}`);
      resetGame();
    } else if (maxGuesses < 1) {
      alert(`Game over! You don't have remaining guesses`);
      for (let i = 0; i < word.length; i++) {
        let updatedCorrectLetters = [...correctLetters];
        updatedCorrectLetters[i] = word[i];
        setCorrectLetters(updatedCorrectLetters);
      }
    }
  }, [correctLetters, maxGuesses, word]);

  return (
    <div className="WordGuessGame">
      <div className="inputs">{renderInputs()}</div>
      <div className="hint">Hint: <span>{hint}</span></div>
      <div className="guess-left">Guesses Left: <span>{maxGuesses}</span></div>
      <div className="wrong-letter">Wrong Letters: <span>{renderIncorrectLetters()}</span></div>
      <div className="controls">
        <button className="reset-btn" onClick={resetGame}>Reset</button>
        <input className="typing-input" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)
} maxLength={1} />
<button className="submit-btn" onClick={handleInputChange}>Submit</button>
</div>
</div>
);
};

export default WordGuessGame;
