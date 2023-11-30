import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Dog = ({ dogs }) => {
  const { dogName } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    if (dogs && dogs.length > 0) {
      const foundDog = dogs.find((d) => d.name === dogName);
      setDog(foundDog || null);
    }
  }, [dogs, dogName]);

  if (!dog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{dog.name}</h2>
      <p>Sex: {dog.sex}</p>
      <p>Breed: {dog.breed}</p>
      <p>Present: {dog.present ? 'Yes' : 'No'}</p>
      <p>Age: {dog.age}</p>
      <p>ChipNumber: {dog.chipNumber}</p>
      <p>Sex: {dog.sex}</p>
      <p>
        Image:{' '}
        {isValidImage(dog.img) ? (
          <img src={dog.img} alt='Dog' />
        ) : (
          'No image available'
        )}
      </p>
    </div>
  );
};

const isValidImage = (url) => {
  const img = new Image();
  img.src = url;
  return img.complete && img.naturalHeight !== 0;
};

export default Dog;
