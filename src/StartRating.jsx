import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0); // Estado para almacenar la calificación

    const handleRating = (index) => {
        setRating(index + 1); // Actualiza la calificación al hacer clic en una estrella
    };

    return (
        <div className="flex space-x-1 justify-center">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    onClick={() => handleRating(index)}
                    className={`h-8 w-8 cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 .587l3.668 7.568 8.32 1.205-6.038 5.876 1.424 8.298L12 18.897l-7.374 3.865 1.424-8.298-6.038-5.876 8.32-1.205L12 .587z" />
                </svg>
            ))}
        </div>
    );
};

export default StarRating;
