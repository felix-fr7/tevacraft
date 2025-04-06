import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Tapnav from './commponent/common/Topnav'
import Home from './page/landingpage/Home'
import Landing from './page/landingpage/landing'
import Human from './page/who we are/Human'
import Mtaudits from './page/who we are/Mtaudits'

const route = () => {
  return (
    <div>
      <Tapnav />
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/aiservice' element={<Home/>}></Route>
        <Route path='/human' element ={<Human/>}></Route>
        <Route path='/mtaudits' element={<Mtaudits/>}></Route>
      </Routes>
    </div>
  );
};

export default route;
