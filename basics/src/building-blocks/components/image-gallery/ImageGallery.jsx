import { useState } from "react";
import { sculptureList } from "./data";

export default function ImageGallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (index === sculptureList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function hanldeMoreClick() {
    setShowMore(!showMore);
  }

  let item = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{item.name} </i>
        by {item.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={hanldeMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{item.description}</p>}
      <img src={item.url} alt={item.title} />
    </>
  );
}
