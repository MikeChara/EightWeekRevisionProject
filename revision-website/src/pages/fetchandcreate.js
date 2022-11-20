import React, { useEffect } from "react";
import fetchMemes from "../API/index";
import { Gallery } from "../API/list";
import InputButton from "../API/inputs";

const FetchAndCreate = () => {
  useEffect(() => {
    fetchMemes();
  }, []);
  return (
    <div>
      {/* <InputButton onClick={fetchMemes} text={"Get Memes"}></InputButton> */}
      <h1>Pick a popular meme and edit it!</h1>
      <Gallery />
    </div>
  );
};

export default FetchAndCreate;
