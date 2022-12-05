import React from "react";
// import { useState } from "react";

function Display({ text, placeholder, h3prop }) {
  //   const [text, setText] = useState("");

  return (
    <>
      <h3>{h3prop}</h3>
      <div type="text" value={text} placeholder={placeholder}>
        {text}
      </div>
    </>
  );
}

export default Display;
