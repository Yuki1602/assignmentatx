import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="container">
      <h1>String Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input-field"
      />
      <button className="calculate-btn">
        Calculate
      </button>
      <div className="result">Result:</div>
    </div>
  );
}

export default App;
