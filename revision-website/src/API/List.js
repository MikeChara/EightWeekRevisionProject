import { useState } from "react";
let memes = [];

export function sendData(memedata) {
  memes = memedata;
  console.log(memes);
}

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  let meme = memes[index];
  return (
    <>
      <button onClick={handleNextClick}>Next Meme</button>
      <h2>
        <i>{meme?.name}</i>
      </h2>
      <h3>
        ({index + 1}) of {meme?.length}
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} showURL
      </button>
      {showMore && <p>{meme?.url}</p>}
      <img src={meme?.url} alt={meme?.id} height="500px" />
    </>
  );
}
