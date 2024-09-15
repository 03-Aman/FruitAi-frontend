// components/FAQCard.js
import React from 'react';

const FAQCard = ({ faq, onClick }) => {
  return (
    <div className="faq-card" onClick={onClick}>
      <h2>{faq.question}</h2>
    </div>
  );
};

export default FAQCard;