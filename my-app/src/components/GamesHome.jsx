import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../static/img/rockpaperscissor.jpg"
import GameCard from './GameCard';
import img2 from "../static/img/tictactoe-image.png"
import img3 from "../static/img/scramble2.jpg"
import img4 from "../static/img/dice.jpg"

function GamesHome() {
    const game = {
        name: "Rock Paper Scissor",
        link: "/rockpaperscissor",
        img: img1
      };

      const game1 = {
        name: "TicTacToe",
        link:"/tictactoe",
        img: img2
      };

      const game2 = {
        name: "Dice Game",
        link:"/dice",
        img: img4
      };

      const game3 = {
        name: "Word Scramble Game",
        link:"/wordscramble",
        img: img3
      };



    return (
    <div className="App">
    
      <nav>
        <h1>Streamplay</h1>
      </nav>
      <div className='row'>

      <GameCard params={game3} />
      <GameCard params={game1} />
      <GameCard params={game2} />
    
      </div>
      <div className='row'>
      <GameCard params={game} />
    
      </div>
      
    </div>
  );
}

export default GamesHome;