import { useState } from "react";

let id = 0;
export default function Array() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    setPeople([...people, { id: id++, name }]);
    setName("");
  };
  return (
    <>
      <div>
        <input value={name} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {people.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}
