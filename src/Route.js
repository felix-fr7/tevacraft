import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Tapnav from './commponent/common/Topnav';
import Home from './page/landingpage/Home';
import Landing from './page/landingpage/landing';
import Human from './page/who we are/Human';
import Mtaudits from './page/who we are/Mtaudits';

// ✅ Import the new pages
import GoodnewsAI from './page/GoodnewsAI';
import PrivacyPolicy from './page/PrivacyPolicy';

const route = () => {
  return (
    <div>
      <Tapnav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/aiservice' element={<Home />} />
          <Route path='/human' element={<Human />} />
          <Route path='/mtaudits' element={<Mtaudits />} />

          {/* ✅ New Routes for GoodnewsAI and Privacy Policy */}
          <Route path='/GoodnewsAI' element={<GoodnewsAI />} />
          <Route path='/GoodnewsAI/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default route;
