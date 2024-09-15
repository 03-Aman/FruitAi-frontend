import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  useEffect(() => {
    axios.get('/api/faqs')
      .then(response => {
        setFaqs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFaq = { question: newQuestion, answer: newAnswer };
    axios.post('/api/faqs', newFaq)
      .then(response => {
        setFaqs([...faqs, response.data]);
        setNewQuestion('');
        setNewAnswer('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          New Question:
          <input type="text" value={newQuestion} onChange={(event) => setNewQuestion(event.target.value)} />
        </label>
        <label>
          New Answer:
          <input type="text" value={newAnswer} onChange={(event) => setNewAnswer(event.target.value)} />
        </label>
        <button type="submit">Add FAQ</button>
      </form>
    </div>
  );
};

export default FAQ;