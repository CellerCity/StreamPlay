import React, { useState } from 'react';
import Videos from './Videos';
import Puzzle8 from './8Puzzle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import RockPaperScissors from './components/RockPaperScissors';
import GamesHome from './components/GamesHome';
import TicTacToe from './components/TicTacToe';
import WordScrambleGame from './components/WordScrambleGame';
import WordGuessingGame from './components/WordGuessingGame';
import DiceRoll from './components/DiceRoll';
import Home from './components/Home';

function App() {

  return (
    <>
      <BrowserRouter>
      <Box sx = {{ backgroundColor: '#FFF' }}>
        <Routes>
          
        <Route path='/videos_all' exact element={
          <>
          <Navbar/> 
          <Feed />
          </>} />
          <Route path='/video/:id' exact element={
          <>
          <Navbar/>
          <VideoDetail /> </>} />
          <Route path='/channel/:id' exact element={
          <>
          <Navbar/>
          <ChannelDetail /> </> } />
          <Route path='/search/:searchTerm' exact element={
            <>
            <Navbar/>
            <SearchFeed /> </> } />
          
          <Route exact path='/' element={< SignIn/>}></Route>
          <Route exact path='/sign_up' element={< SignUp/>}></Route>
          <Route exact path='/videos_sample' element={< Videos />}></Route>
          <Route exact path='/8Puzzle' element={< Puzzle8 />}></Route>
          <Route exact path='/rockpaperscissor' element={< RockPaperScissors />}></Route>
          <Route exact path='/games' element={< GamesHome />}></Route>
          <Route exact path='/tictactoe' element={< TicTacToe />}></Route>
          <Route exact path='/wordscramble' element={< WordScrambleGame />}></Route>
          <Route exact path='/wordguess' element={< WordGuessingGame />}></Route>
          <Route exact path='/dice' element={< DiceRoll />}></Route>
          <Route exact path='/home' element={< Home/>}></Route>
        </Routes>

      </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
