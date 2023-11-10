import React from 'react';
import { useParams } from 'react-router-dom';

function Dog({ dogs }) {
  const { dogName } = useParams();

  const selectedDog = dogs.find((dog) => dog.name === dogName);

  if (!selectedDog) {
    return <p>Dog not found</p>;
  }

  return (
    <div>
      <h2>{selectedDog.name}</h2>
      {selectedDog.img && <img src={selectedDog.img} alt={selectedDog.name} />}
      <p>Sex: {selectedDog.sex}</p>
      <p>Breed: {selectedDog.breed}</p>
      <p>Present: {selectedDog.present ? 'Yes' : 'No'}</p>
      <p>Age: {selectedDog.age}</p>
      <p>Chip Number: {selectedDog.chipNumber}</p>
      <p>
        Owner: {selectedDog.owner.name} {selectedDog.owner.lastName} (
        {selectedDog.owner.phoneNumber})
      </p>
    </div>
  );
}

export default Dog;
