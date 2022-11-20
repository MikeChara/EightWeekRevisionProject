import React from "react";
import InputButton from "../API/Inputs";
import fetchMemes from "../API/index";
import { Gallery } from "../API/List";

export function MemeFetch() {
  console.log("fired");
  fetchMemes();
}

const FetchAndCreate = () => {
  return (
    <div>
      <h1>Pick a popular meme and edit it!</h1>
      <InputButton onClick={MemeFetch} />
      <Gallery />
    </div>
  );
};

export default FetchAndCreate;
