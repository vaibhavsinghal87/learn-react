export default function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
  }
  return (
    <>
      <li className="item">{isPacked ? <del>{name + " ✅"}</del> : name}</li>
      <li className="item">
        {name} {isPacked && "✅"}
      </li>
      <li className="item">{itemContent}</li>
    </>
  );
}
