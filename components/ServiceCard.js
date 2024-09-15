// components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ serviceName, onClick }) => {
  return (
    <div className="service-card" onClick={onClick}>
      <h2>{serviceName}</h2>
    </div>
  );
};

export default ServiceCard;