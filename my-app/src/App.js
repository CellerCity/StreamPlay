import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Videos from './Videos';
import Puzzle8 from './8Puzzle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

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
          <Route exact path='/blockDodge' element={< Videos />}></Route>
        </Routes>

      </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
