import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import './DogsLib.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DogsLib= ({dogs}) => {
// const [dogs, setDogs] = useState([]);
const navigate = useNavigate();

// useEffect(() => {
//     const fetchData = async () => {
//     try {
//         const response = await axios.get(
//         'https://api.jsonbin.io/v3/b/651e65730574da7622b49d13',
//         {
//             headers: {
//             'X-Master-Key': '$2a$10$6OGshmFKI/rA1CYYs2WeuOV6zZRa4g6WBOyC9LJg41C6HPrw76642',
//             'X-Access-Key': '$2a$10$BRUEnSDD4Ol.k4CODQS9fOt1o4CXIPZi7N/sFaMCdQpowu3zDCQiy',
//             },
//         }
//         );
//         setDogs(response.data.record);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
//     };

//     fetchData();
// }, []); 

const toggleDetails = (dogName) => {
  // Navigate to the individual dog page
  navigate(`/dog_catalog/${dogName}`);
  };

  return (
    <div className='dogpage'>
      <Header />
      <div className='container'>
        <ul>
          {dogs.map((dog, index) => (
            <li key={index} className='expanded'>
              <div
                className='dog-item'
                onClick={() => toggleDetails(dog.name)}
              >
                <div>
                  <p>Name: {dog.name}</p>
                  <p>Sex: {dog.sex}</p>
                  <p>Breed: {dog.breed}</p>
                  <p>Present: {dog.present ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DogsLib;
