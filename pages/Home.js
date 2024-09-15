// pages/Home.js
import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Fruit.ai</h1>
      <div className="service-grid">
        <ServiceCard serviceName="Chatbot" onClick={() => window.location.href = '/chatbot'} />
        <ServiceCard serviceName="Translator" onClick={() => window.location.href = '/translator'} />
        <ServiceCard serviceName="FAQ" onClick={() => window.location.href = '/faq'} />
        <ServiceCard serviceName="About" onClick={() => window.location.href = '/about'} />
      </div>
    </div>
  );
};

export default Home;