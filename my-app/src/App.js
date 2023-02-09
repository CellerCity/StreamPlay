import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Videos from './Videos';
import Puzzle8 from './8Puzzle';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
  

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route exact path='/' element={< SignIn/>}></Route>
          <Route exact path='/sign_in' element={< SignIn/>}></Route>
          <Route exact path='/sign_up' element={< SignUp/>}></Route>
          <Route exact path='/videos' element={< Videos />}></Route>
          <Route exact path='/8Puzzle' element={< Puzzle8 />}></Route>
          <Route exact path='/blockDodge' element={< Videos />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
