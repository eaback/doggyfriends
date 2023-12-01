import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import './Dog.css';

const Dog = ({ dogs }) => {
  const { dogName } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.jsonbin.io/v3/b/651e65730574da7622b49d13/${dogName}`,
          {
            headers: {
              'X-Master-Key': '$2a$10$6OGshmFKI/rA1CYYs2WeuOV6zZRa4g6WBOyC9LJg41C6HPrw76642',
              'X-Access-Key': '$2a$10$BRUEnSDD4Ol.k4CODQS9fOt1o4CXIPZi7N/sFaMCdQpowu3zDCQiy',
            },
          }
        );
    
        if (!response.ok) {
          throw new Error(`Failed to fetch dog data: ${response.status} ${response.statusText}`);
        }
    
        const data = await response.json();
        setDog(data.record || null);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (!dogs || dogs.length === 0) {
      fetchData();
    } else {
      const foundDog = dogs.find((d) => d.name === dogName);
      setDog(foundDog || null);
    }
  }, [dogs, dogName]);

  if (!dog) {
    return <div>Loading...</div>;
  }

  return (
    <div className='dogpage'>
      <Header />
      <div className='container'>
        <div className='doginfo'>
          <h1>{dog.name}</h1>
          <p>Sex: {dog.sex}</p>
          <p>Breed: {dog.breed}</p>
          <p>Present: {dog.present ? 'Yes' : 'No'}</p>
          <p>Age: {dog.age}</p>
          <p>ChipNumber: {dog.chipNumber}</p>
          <p>Sex: {dog.sex}</p>
        </div>

        <p>
          {' '}
          {isValidImage(dog.img) ? (
            <img className= 'img' src={dog.img} alt='Dog' />
          ) : (
            'No image available'
          )}
        </p>
      </div>
    </div>
  );
};

const isValidImage = (url) => {
  const img = new Image();
  img.src = url;
  return img.complete && img.naturalHeight !== 0;
};

export default Dog;
