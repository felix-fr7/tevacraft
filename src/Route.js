import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Tapnav from './commponent/common/Topnav'
import Home from './page/landingpage/Home'
import Landing from './page/landingpage/landing'

const route = () => {
  return (
    <div>
              <Tapnav></Tapnav>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/aiservice' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default route