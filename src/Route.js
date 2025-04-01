import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Tapnav from './commponent/common/Topnav'
import Home from './page/landingpage/Home'
import Landing from './page/landingpage/landing'
import Human from './page/who we are/Human'
import Mtaudits from './page/who we are/Mtaudits'
import Signup from './commponent/Signup'
import Signin from './commponent/Signin'

const route = () => {
  return (
    <div>
              <Tapnav></Tapnav>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/aiservice' element={<Home/>}></Route>
        <Route path='/human' element ={<Human/>}></Route>
        <Route path='/mtaudits' element={<Mtaudits/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default route