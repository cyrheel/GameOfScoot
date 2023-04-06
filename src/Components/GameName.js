import React from "react";

import { InputContainer, Label, TextInput } from "../Style/style.js";

function GameName({ gameName, setGameName }) {
  return (
    <InputContainer>
      <Label>Target Word :</Label>
      <TextInput
        type="text"
        value={gameName}
        min={1}
        onChange={(e) => {
          setGameName(e.target.value.toUpperCase());
        }}
        style={{ width: "50%" }}
      ></TextInput>
    </InputContainer>
  );
}

export default GameName;
