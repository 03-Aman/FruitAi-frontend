// components/FruitCard.js
import React from 'react';

const FruitCard = ({ fruitName, onClick }) => {
  return (
    <div className="fruit-card" onClick={onClick}>
      <h2>{fruitName}</h2>
    </div>
  );
};

export default FruitCard;