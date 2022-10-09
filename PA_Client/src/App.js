import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import SignUp from './pages/SignUp/SignUp';

function App() {
  
  return (
    <div className="App ">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
