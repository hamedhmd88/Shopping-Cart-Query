import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const validRating = typeof rating === 'number' && rating >= 0 ? rating : 0;
  
  const fullStars = Math.floor(validRating);
  const hasHalfStar = validRating - fullStars >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  const safeFullStars = Math.max(0, fullStars);
  const safeEmptyStars = Math.max(0, emptyStars);

  return (
    <div className="flex items-center">
      {/* Full stars */}
      {[...Array(safeFullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-600" />
      ))}
      {/* Half star */}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-600" />}
      {/* Empty stars */}
      {[...Array(safeEmptyStars)].map((_, index) => (
        <FaRegStar key={index} className="text-yellow-600" />
      ))}
    </div>
  );
};

export default Rating;
