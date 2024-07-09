import React, { useState } from 'react';
import './App.css';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Spread love everywhere you go. - Mother Teresa",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius"
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <div className="quote-box">
          <p>{quote}</p>
        </div>
        <button onClick={generateRandomQuote}>Generate New Quote</button>
      </header>
    </div>
  );
}

export default App;