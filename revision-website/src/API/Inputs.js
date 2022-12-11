import React from "react";

function InputButton({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

export default InputButton;
