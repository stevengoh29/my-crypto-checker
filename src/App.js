import React from 'react';
import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Routes/Home'
import CoinDetails from './Routes/CoinDetails'

const App = () => {
  return(
    <div className='App container-fluid bg-dark text-white p-0'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/CoinDetails/:id' element={<CoinDetails/>}/>
        </Routes>
      </Router>
    </div>
  )
};

export default App;
