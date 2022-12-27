import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <span className="App-count">{count}</span>
        <div className="App-button-wrap">
          <button onClick={() => setCount(count + 1)} className="App-button">+1</button>
          <button onClick={() => setCount(count - 1)} className="App-button">-1</button>
        </div>
      </header>
    </div>
  );
}

export default App;