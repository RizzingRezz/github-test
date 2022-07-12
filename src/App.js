import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Presentation from './components/pages/Presentation';
import Calendar from './components/pages/Calendar';
import Contact from './components/pages/Contact';
import Instruments from './components/pages/Instruments';
import Consortium from './components/pages/Consortium';
import Data from './components/pages/Data';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/presentation' exact element={<Presentation />} title="About Page" />
          <Route path='/calendar' exact element={<Calendar />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/instruments' exact element={<Instruments />} />
          <Route path='/consortium' exact element={<Consortium />} />
          <Route path='/data' exact element={<Data />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
