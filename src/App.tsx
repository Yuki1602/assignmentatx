import { useState } from "react";
import { add } from "./simpleCalc";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | number>("");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      document.body.style.backgroundColor = getRandomColor(); // Change body background
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
