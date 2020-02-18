import React, { useState, useCallback } from "react";
import "./styles.css";
import { Hello } from "./Hello";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);

  return (
    <div className="App">
      <Hello increment={increment} />
      <div>count: {count}</div>
    </div>
  );
}
