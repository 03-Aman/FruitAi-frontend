// pages/Chatbot.js
import React, { useState, useEffect } from 'react';
import FruitCard from '../components/FruitCard';

const Chatbot = () => {
  const [fruits, setFruits] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState(null);

  useEffect(() => {
    // API call to fetch fruits
    fetch('/api/fruits')
      .then(response => response.json())
      .then(data => setFruits(data));
  }, []);

  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div className="chatbot-page">
      <h1>Chatbot</h1>
      <div className="fruit-grid">
        {fruits.map((fruit) => (
          <FruitCard key={fruit.id} fruitName={fruit.name} onClick={() => handleFruitClick(fruit)} />
        ))}
      </div>
      {selectedFruit && (
        <div className="fruit-details">
          <h2>{selectedFruit.name}</h2>
          <p>{selectedFruit.description}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;