import React, { useEffect } from "react";
import fetchMemes from "../API/index";
import { Gallery } from "../API/List";

const FetchAndCreate = () => {
  useEffect(() => {
    fetchMemes();
  }, []);
  return (
    <div>
      <h1>Pick a popular meme and edit it!</h1>
      <Gallery />
    </div>
  );
};

export default FetchAndCreate;
