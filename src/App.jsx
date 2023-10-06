import React from 'react';
import { useState } from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import DogsLib from './pages/DogsLib';
import Dog from './pages/Dog';



function App() {

  return (
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dog_catalog' element={<DogsLib/>}/>
        <Route path='/dog' element={<Dog/>}/>
      </Routes>
    
  )
}

export default App
