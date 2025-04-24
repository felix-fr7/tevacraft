import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tapnav from './commponent/common/Topnav'
import Home from './page/landingpage/Home'
import Landing from './page/landingpage/landing'
import Human from './page/who we are/Human'
import Mtaudits from './page/who we are/Mtaudits'
import Transcriptionpage from './page/who we are/Transcriptionpage'
import Videosubtitle from './page/who we are/Videosubtitle'

import Signup from './commponent/Signup'
import Translateform from './commponent/Translateform' 
import Pagefile from './commponent/common/Pagefile'


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
        <Route path='/videosubtitle' element={<Videosubtitle/>}></Route>


        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/translate' element={<Translateform/>}></Route>
        <Route path='/pagefile' element={<Pagefile/>}></Route>
      </Routes>
   
    </div>
  );
};

export default route;
