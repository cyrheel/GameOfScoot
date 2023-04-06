import React from "react";

import { InputContainer, Label } from "../Style/style.js";

function IsHard({ isHard, setIsHard }) {
  return (
    <InputContainer>
      <Label>Hard Mode:</Label>
      <input
        type="checkbox"
        value={isHard}
        onChange={() => {
          setIsHard(!isHard);
        }}
      ></input>
    </InputContainer>
  );
}

export default IsHard;
