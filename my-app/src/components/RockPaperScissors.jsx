
import rockimg from "../static/img/rock.png";
import paperimg from "../static/img/paper.png";
import scissorimg from "../static/img/scissor.png";
import React, { useState } from 'react';
import '../static/css/rockpaperscissor.css';


function RockPaperScissors() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [resultMessage, setResultMessage] = useState("Choose your weapon to start the game!");

  const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
      setResultMessage("It's a tie!");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
      playerSelection === 'paper' && computerSelection === 'rock' ||
      playerSelection === 'scissors' && computerSelection === 'paper') {
      setPlayerScore(prevScore => prevScore + 1);
      setResultMessage("You win!");
    } else {
      setComputerScore(prevScore => prevScore + 1);
      setResultMessage("You lose!");
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setResultMessage("Choose your weapon to start the game!");
  };

  const handleButtonClick = (weapon) => {
    const computerSelection = computerPlay();
    playRound(weapon, computerSelection);
  };

  const computerPlay = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  return (
    <div className="container" id = "game1">
      
      <h1>Rock Paper Scissors</h1>
      <div className="scoreboard">
        <p>Player Score: <span id="player-score">{playerScore}</span></p>
        <p>Computer Score: <span id="computer-score">{computerScore}</span></p>
      </div>
      <div className="game">
        <div className="choices">
          <button id="rock" onClick={() => handleButtonClick('rock')}><img src={rockimg} alt="rock"/></button>
          <button id="paper" onClick={() => handleButtonClick('paper')}><img src={paperimg} alt="paper"/></button>
          <button id="scissors" onClick={() => handleButtonClick('scissors')}><img src={scissorimg} alt="scissors"/></button>
        </div>
        <div className="result">
          <p id="result-message">{resultMessage}</p>
          <button id="reset" onClick={resetGame}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default RockPaperScissors;
