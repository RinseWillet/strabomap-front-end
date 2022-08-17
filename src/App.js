//React
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//styling
import './App.css';

//pages
import About from './pages/About';
import Atlas from './pages/Atlas';
import Home from './pages/Home';

//components
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>     
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/atlas' element={<Atlas />} />
        </Routes>    

    </div>
  );
}

export default App;