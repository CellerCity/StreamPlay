import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../static/img/rockpaperscissor.jpg"
import GameCard from './GameCard';
import img2 from "../static/img/tictactoe-image.png"
import img3 from "../static/img/scramble2.jpg"
import img4 from "../static/img/dice.jpg"
import img5 from "../static/img/wordguess.png"

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

      const game4 = {
        name: "Word Guessing Game",
        link:"/wordguess",
        img: img5
      };


    return (
    <div className="App">
    
   
      <div className='row'>

      <GameCard params={game3} />
      <GameCard params={game1} />
      <GameCard params={game2} />
    
      </div>
      <div className='row'>
      <GameCard params={game} />
      <GameCard params={game4} />
    
      </div>
    
    </div>
  );
}

export default GamesHome;