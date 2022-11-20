import { useState, useEffect } from "react";
import fetchMemes, { data } from ".";
import InputButton from "./inputs";
import sendToDB from "../database/index";

// import Moveable from "react-moveable";

export function Gallery() {
  const [memes, setMemes] = useState([]);
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function wrap() {
      const result = await fetchMemes(data);
      setMemes(result);
    }
    wrap();
  }, []);

  function handleNextClick() {
    if (index < 100) {
      setIndex(index + 1);
    }

    if (index === 99) {
      fetchMemes();
      setIndex(0);
    }
  }

  function handlePreviousClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  let meme = memes[index];

  function saveMeme() {
    sendToDB(meme);
  }

  if (!meme) {
    return <div>...Loading</div>;
  }
  return (
    <>
      <InputButton
        onClick={handlePreviousClick}
        text="Previous Meme"
      ></InputButton>
      <InputButton onClick={handleNextClick} text="Next Meme"></InputButton>
      <br></br>
      <InputButton onClick={saveMeme} text="Save Meme"></InputButton>
      <h2>
        <i>{meme?.name}</i>
      </h2>
      <h3>({index + 1}) of 100</h3>
      <img src={meme?.url} alt={meme?.id} height="500px" />
      <br></br>
      <InputButton onClick={handleMoreClick} text="Show More?">
        {showMore ? "Hide" : "Show additional details"}
      </InputButton>
      {showMore && (
        <p>
          url:{meme?.url}
          <br></br>
          usual text box count:{meme?.box_count}
        </p>
      )}
    </>
  );
}
