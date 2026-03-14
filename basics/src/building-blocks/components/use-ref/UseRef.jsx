import { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef();

  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <>
      <h1>UseRef</h1>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
