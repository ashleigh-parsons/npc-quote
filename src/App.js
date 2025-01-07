import React, { useState } from 'react';
import './App.css';
import BgImg from './img/bg.jpg'

function App() {
  const [advice, setAdvice] = useState('let me think...');
  const [author, setAuthor] = useState('');

  async function fetchRandomQuote() {
    try {
      const response = await fetch('http://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setAdvice(data.content);
      setAuthor(`- ${data.author}`);
    } catch (error) {
      console.error('Error fetching quote:', error.message);
    }
  }

  return (
    <div 
      style={{backgroundImage: `url(${BgImg})`}}
      className="w-screen h-screen p-12 flex flex-col justify-end items-end gap-8 text-right text-white bg-cover bg-center"
    >
      <div>
        <h1 className="max-w-[85vw] md:max-w-[45vw] text-4xl mb-2">❝{advice}❞</h1>
        <span>{author}</span>
      </div>
      <button className='bg-white/30 px-4 py-2 rounded-md' onClick={fetchRandomQuote}>
          Random quote!
      </button>
    </div>
  );
}

export default App;