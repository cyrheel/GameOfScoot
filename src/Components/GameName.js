import React from "react";
import t from "prop-types";

import { InputContainer, Label, TextInput } from "../Style/style.js";
import Translate from "./Translate.js";

function GameName({ gameName, setGameName }) {
  return (
    <InputContainer>
      <Label>
        <Translate>Target Word :</Translate>
      </Label>
      <TextInput
        type="text"
        value={gameName}
        min={1}
        onChange={(e) => {
          setGameName(e.target.value.toUpperCase());
        }}
        style={{ width: "45%" }}
      ></TextInput>
    </InputContainer>
  );
}

GameName.propTypes = {
  gameName: t.string,
  setGameName: t.func,
};

export default GameName;
