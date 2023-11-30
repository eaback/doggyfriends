import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import DogsLib from './pages/DogsLib';
import Dog from './pages/Dog';



function App({dogs}) {

  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dog_catalog' element={<DogsLib dogs={dogs} />} />
      <Route path='/dog_catalog/:dogName' element={<Dog dogs={dogs} />} />
    </Routes>
    
  )
}

export default App
