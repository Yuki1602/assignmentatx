import React, { useState } from 'react';
import './App.css';
import { add } from './simpleCalc';

function App() {
  const [input, setInput] = useState("");

  const [result, setResult] = useState<string | number>("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error) {
      setResult((error as Error).message);
    }
  };
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
      <button onClick={handleCalculate} className="calculate-btn">
        Calculate
      </button>
      <div className="result">Result: {result}</div>
    </div>
  );
}

export default App;
