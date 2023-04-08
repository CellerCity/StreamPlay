import React, { useState } from 'react';
import '../static/css/diceroll.css';
import dice1 from '../static/img/dice1.png'
import dice2 from '../static/img/dice2.png';
import dice3 from '../static/img/dice3.png';
import dice4 from '../static/img/dice4.png';
import dice5 from '../static/img/dice5.png';
import dice6 from '../static/img/dice6.png';

function DiceRoll() {
  const [score, setScore] = useState(0);
  const [lastRoll, setLastRoll] = useState(null);
  const [chosenNumber, setChosenNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const rollDice = () => {
    if (gameOver) return;

    if (chosenNumber === null) {
      alert('Please choose a number before rolling the dice.');
      return;
    }

    const roll = Math.floor(Math.random() * 6) + 1;
    setLastRoll(roll);

    if (roll === chosenNumber) {
      setScore(score + roll);
    } else {
      setScore(Math.max(score - 1, 0));
    }

    if (score + roll >= 20) {
      setGameOver(true);
    }
  };

  const handleNumberClick = (number) => {
    if (gameOver) return;

    setChosenNumber(number);
  };

  const resetGame = () => {
    setScore(0);
    setLastRoll(null);
    setChosenNumber(null);
    setGameOver(false);
  };

  return (
    <div className="App">
      <h1>Dice Game</h1>
      <div className="options-container">
          <div className="options">
            {[1, 2, 3, 4, 5, 6].map((option) => (
              <div
                key={option}
                className={`option ${option === chosenNumber ? 'active' : ''} ${gameOver ? 'disabled' : ''}`}
                onClick={() => handleNumberClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="game-container">
        <div className={`dice-container ${lastRoll !== null ? 'shake' : ''}`} onClick={rollDice}>
          <img src={lastRoll === 1 ? dice1 : lastRoll === 2 ? dice2 : lastRoll === 3 ? dice3 : lastRoll === 4 ? dice4 : lastRoll === 5 ? dice5 : dice6} alt="dice" className="dice-image" />
          <div className="dice-roll">{lastRoll !== null ? `You rolled: ${lastRoll}` : 'Click to roll the dice!'}</div>
        </div>
        
      </div>
          <div className="score-container">
            <div className="score-header">Score</div>
            <div className={`score ${gameOver ? 'game-over' : ''}`}>{score}</div>
            {gameOver && (
              <div className="game-over-message">
                <div>Congratulations, you won!</div>
                <button onClick={resetGame}>Play Again</button>
              </div>
            )}
          </div>
        </div>
     
    </div>
  );
}

export default DiceRoll;