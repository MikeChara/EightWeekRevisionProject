import { useState, useEffect } from "react";
import fetchMemes, { data } from ".";
import InputButton from "./inputs";
import sendToDB from "../database/index";

// import Moveable from "react-moveable";

export function Gallery() {
  const [memes, setMemes] = useState([]);
  const [MemeIndex, setMemeIndex] = useState(0);
  const [showMoreMemeDetails, setShowMoreMemeDetails] = useState(false);
  const [moreDetailsButtonText, setmoreDetailsButtonText] =
    useState("Show More Details?");

  async function getAllTheMemes() {
    const result = await fetchMemes(data);
    setMemes(result);
  }

  useEffect(() => {}, []);
  getAllTheMemes();

  useEffect(() => {
    if (showMoreMemeDetails === true) {
      setmoreDetailsButtonText("Hide Additional Details");
    } else {
      setmoreDetailsButtonText("Show More Details?");
    }
  }, [showMoreMemeDetails]);

  function handleNextMemeInListClick() {
    if (MemeIndex >= 99) {
      fetchMemes();
      setMemeIndex(0);
    } else {
      setMemeIndex(MemeIndex + 1);
    }
  }

  const handlePreviousMemeInListClick = () => {
    MemeIndex > 0 && setMemeIndex(MemeIndex - 1);
  };

  function handleMoreMemeDetailsClick() {
    setShowMoreMemeDetails(!showMoreMemeDetails);
  }
  let meme = memes[MemeIndex];

  function saveMeme() {
    sendToDB(meme);
  }

  if (!meme) {
    return <div>...Loading</div>;
  }
  return (
    <>
      <InputButton
        onClick={handlePreviousMemeInListClick}
        text="Previous Meme"
      ></InputButton>
      <InputButton
        onClick={handleNextMemeInListClick}
        text="Next Meme"
      ></InputButton>
      <InputButton onClick={saveMeme} text="Save Meme"></InputButton>
      <h2>{meme.name}</h2>
      <h3>({MemeIndex + 1}) of 100</h3>
      <img src={meme.url} alt={meme.id} height="500px" />
      <InputButton
        onClick={handleMoreMemeDetailsClick}
        text={moreDetailsButtonText}
      ></InputButton>
      {showMoreMemeDetails && (
        <p>
          url:{meme.url}
          usual text box count:{meme.box_count}
        </p>
      )}
    </>
  );
}
