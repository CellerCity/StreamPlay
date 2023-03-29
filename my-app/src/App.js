import React, { useState } from 'react';
import SignIn from '../src/components/SignIn';

import SignUp from '../src/components/SignUp';
import Videos from './Videos';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';
import RockPaperScissors from './components/RockPaperScissors';
import GamesHome from './components/GamesHome';
import TicTacToe from './components/TicTacToe';
import Puzzle from './components/Puzzle';
import DiceRoll from './components/DiceRoll';


function App() {

  return (
    <>
      <BrowserRouter>
      <Box sx = {{ backgroundColor: '#FFF' }}>
        
        <Routes>
          <Route path='/' exact element={
          <>
          <Navbar/> 
          < Feed />
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
          
          <Route exact path='/sign_in' element={< SignIn/>}></Route>
          <Route exact path='/sign_up' element={< SignUp/>}></Route>
          <Route exact path='/videos' element={< Videos />}></Route>
          <Route exact path='/rockpaperscissor' element={< RockPaperScissors />}></Route>
          <Route exact path='/games' element={< GamesHome />}></Route>
          <Route exact path='/tictactoe' element={< TicTacToe />}></Route>

          
          <Route exact path='/blockDodge' element={< Videos />}></Route>
        </Routes>
      

      </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
