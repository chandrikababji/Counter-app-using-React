import React, { useState } from 'react';
import './App.css';

function App() {
  // Declare state for the counter
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>Current Count: {count}</h2>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: '10px', padding: '10px 20px' }}
      >
        Increase
      </button>
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: '10px', padding: '10px 20px' }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
