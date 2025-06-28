import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    fetch(`${API_URL}/vocabulary/`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Danh sách từ vựng</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.word} - {item.meaning}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
