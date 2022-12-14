import { useState } from "react";
import Button from "./Button";

function Input(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    props.onChange(event);
    setText(event.target.value);
  }
  function handleClick() {
    setText("");
  }

  return (
    <form>
      <h3>{props.h3prop}</h3>
      <input
        type={props.type}
        value={text}
        onChange={handleChange}
        placeholder={props.placeholder}
      ></input>
      {props.showbutton && (
        <Button
          className="submit"
          onClick={handleClick}
          text={"submit"}
        ></Button>
      )}
    </form>
  );
}

export default Input;
