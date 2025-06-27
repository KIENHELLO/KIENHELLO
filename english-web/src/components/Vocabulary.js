import React, { useEffect, useState } from 'react';
import './Vocabulary.css';

function Vocabulary() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/vocabulary/')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error('API error:', err));
  }, []);

  return (
    <div className="vocabulary-container">
      <h1>📘 English Vocabulary</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>{item.word}</strong>: {item.definition}
            <br />
            <em>{item.example}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Vocabulary;
