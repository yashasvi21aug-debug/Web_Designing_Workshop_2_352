import { useState } from "react";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState("");
  const [sum, setSum] = useState(null);

  const calculateSum = () => {
    const arr = numbers
      .split(",")
      .map((num) => Number(num.trim()))
      .filter((num) => !isNaN(num));

    const total = arr.reduce((acc, curr) => acc + curr, 0);
    setSum(total);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Sum of N Numbers</h1>

        <p>Enter numbers separated by commas</p>

        <input
          type="text"
          placeholder="Example: 10, 20, 30, 40"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />

        <button onClick={calculateSum}>Calculate Sum</button>

        {sum !== null && <h2>Sum = {sum}</h2>}
      </div>
    </div>
  );
}

export default App;