import "./App.css";
import React, { useState } from "react";


function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App counter">
      <h2>counter</h2>
      <h1>{number}</h1>
      <button className="inc" onClick={() => setNumber(number+1)}>+1</button>
      <button className="reset"onClick={() =>setNumber(0)} >reset</button>
      <button className="dec" onClick={() => setNumber(number-1)}>-1</button>

      
    </div>
  );
}

export default App;
