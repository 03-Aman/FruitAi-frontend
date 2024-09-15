// components/TranslatorForm.js
import React, { useState } from 'react';

const TranslatorForm = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // API call to translate text
    fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: inputText }),
    })
      .then(response => response.json())
      .then(data => setTranslatedText(data.translatedText));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter text:</label>
      <input type="text" value={inputText} onChange={(event) => setInputText(event.target.value)} />
      <br />
      <button type="submit">Translate</button>
      <br />
      <p>Translated text: {translatedText}</p>
    </form>
  );
};

export default TranslatorForm;