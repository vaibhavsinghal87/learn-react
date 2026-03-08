import { useState } from "react";

let id = 0;
export default function Array() {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("value");
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    setPeople([...people, { id: id++, name }]);
    // setPeople([{ id: id++, name }, ...people]);
    setName("");
  };
  const handleDelete = (id) => () => {
    setPeople(people.filter((p) => p.id !== id));
  };
  const handleIndexChange = (e) => {
    setIndex(e.target.value);
  };
  const handleIndexClick = () => {
    const newPeople = [...people];
    newPeople.splice(index, 0, { id: id++, name });
    setPeople(newPeople);
    setName("");
  };
  const handleReverse = () => {
    setPeople([...people].reverse());
  };
  return (
    <>
      <div>
        <input value={name} onChange={handleChange} />
        <input value={index} onChange={handleIndexChange} />
        <br />
        <button onClick={handleClick}>Add</button>
        <button onClick={handleIndexClick}>Add at index</button>
        <button onClick={handleReverse}>Reverse</button>
      </div>
      <ul>
        {people.map((p) => (
          <li key={p.id}>
            {p.name}
            <button onClick={handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
