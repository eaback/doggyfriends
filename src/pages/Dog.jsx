// Dog.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const Dog = () => {
  const { id } = useParams();

  // Fetch additional details for the specific dog using id

  return (
    <div>
        <div>

        </div>
        <div>
            <h2>Dog Details</h2>
            <p>Details for Dog with ID: {id}</p>
            {/* Render additional details here */}
        </div>
    </div>
  );
};

export default Dog;
