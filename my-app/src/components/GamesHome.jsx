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
      

      

        {/* <div className="row">
          
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src={img1} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title" style={{color: "red"}}>Rock Paper Scissor</h5>
                <br />
                <a href="/rockpaperscissor" className="btn btn-danger">Play Now</a>
              </div>
            </div>
          </div> */}


      {/* <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src={tictactoe} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title" style={{color: "red"}}>Tic Tac Toe</h5>
                <br />
                <a href="/TicTacToe" className="btn btn-danger">Play Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="./img/8puzzle.jpg" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title" style={{color: "red"}}>8 Puzzle</h5>
                <br />
                <a href="./slide-puzzle-master/slide-puzzle-master/index.html" className="btn btn-danger">Play Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="./img/wordguess.png" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title" style={{color: "red"}}>Guess the word</h5>
                <br />
                <a href="./Word Guessing Game/index.html" className="btn btn-danger">Play Now</a>
              </div>
            </div>
          </div>
        </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="./img/scramble2.jpg" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title" style={{color: "red"}}>Word Scramble Game</h5>
                <br />
                <a href="./Word Scramble Game/index.html" className="btn btn-danger">Play Now</a>
              </div>
            </div>
          </div>
        </div>
        </div> 
    */}
    </div>
  );
}

export default GamesHome;
