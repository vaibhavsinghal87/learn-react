import { useState } from "react";
import Button from "./Button";

export default function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Lifting State Up</h1>
      <p>Click Count: {count}</p>
      <Button onClick={handleClick} />
      <Button onClick={handleClick} />
    </div>
  );
}
