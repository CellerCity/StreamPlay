import React, { useState } from 'react';
import Videos from './Videos';
// import Puzzle8 from './8Puzzle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed,
SignIn, SignUp, RockPaperScissors, GamesHome, TicTacToe,
WordScrambleGame, WordGuessingGame, DiceRoll, Home, VideoUpload, LocalVideoDetail} from './components';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Homenavbar from './components/Homenavbar';
import About from './components/About';

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
          <Route exact path='/wordguess' element={< WordGuessingGame />}></Route>
          
          
          <Route path='/video_upload' exact element={
          <>
          <Homenavbar/> 
          < VideoUpload/>
          </>} />
          <Route path='/local_video' exact element={
          <>
          <Homenavbar/> 
          < LocalVideoDetail/>
          </>} />
          <Route path='/games' exact element={
          <>
          <Homenavbar/> 
          < GamesHome/>
          </>} />

          <Route path='/home' exact element={
          <>
          <Homenavbar/> 
          < Home />
          </>} />
          <Route path='/about' exact element={
          <>
          <Homenavbar/> 
          < About />
          </>} />
          <Route exact path='/tictactoe' element={
            <>
            <Homenavbar/> 
            < TicTacToe />
            </>
          }></Route>

          <Route exact path='/wordscramble' element={
             <>
             <Homenavbar/> 
             < WordScrambleGame />
             </>
          }></Route>

          <Route exact path='/dice' element={
            <>

            < DiceRoll />
            </>
          }></Route>

          <Route exact path='/rockpaperscissor' element={
             <>
             < RockPaperScissors />
             </>
          }></Route>

          </Routes>

      </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
