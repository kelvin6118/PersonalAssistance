import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import {useSelector, useDispatch} from 'react-redux';
import DashBoard from './pages/DashBoard';
import Page401 from './pages/Page401';

function App() {
  const auth = useSelector((state)=>state.login.auth)
  let [login, setLogin] = useState(false);;
  
  useEffect(()=>{
    setLogin(sessionStorage.getItem('auth'));
  },[auth])

  return (
    <div className="App bg-sky-400">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard'
        element={login? <DashBoard/>: <Page401/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
