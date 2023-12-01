import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import DogsLib from './pages/DogsLib';
import Dog from './pages/Dog';
import { useState, useEffect } from 'react';
import axios from 'axios';



function App() {

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await axios.get(
        'https://api.jsonbin.io/v3/b/651e65730574da7622b49d13',
        {
            headers: {
            'X-Master-Key': '$2a$10$6OGshmFKI/rA1CYYs2WeuOV6zZRa4g6WBOyC9LJg41C6HPrw76642',
            'X-Access-Key': '$2a$10$BRUEnSDD4Ol.k4CODQS9fOt1o4CXIPZi7N/sFaMCdQpowu3zDCQiy',
            },
        }
        );
        setDogs(response.data.record);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };

    fetchData();
}, []); 

  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dog_catalog' element={<DogsLib dogs={dogs} />} />
      <Route path='/dog_catalog/:dogName' element={<Dog dogs={dogs} />} />
    </Routes>
    
  )
}

export default App
