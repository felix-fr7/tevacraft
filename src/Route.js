import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tapnav from './commponent/common/Topnav'
import Home from './page/landingpage/Home'
import Landing from './page/landingpage/landing'
import Human from './page/who we are/Human'
import Mtaudits from './page/who we are/Mtaudits'
import Transcriptionpage from './page/who we are/Transcriptionpage'
import Signup from './commponent/Signup'
import Signin from './commponent/Signin'
import Translateform from './commponent/Translateform' 

const route = () => {
  return (
    <div>
      <Tapnav />
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/aiservice' element={<Home/>}></Route>
        <Route path='/human' element ={<Human/>}></Route>
        <Route path='/mtaudits' element={<Mtaudits/>}></Route>
        <Route path='/Transcription'element={<Transcriptionpage/>}></Route>


        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/translate' element={<Translateform/>}></Route>
      </Routes>
   
    </div>
  );
};

export default route;
