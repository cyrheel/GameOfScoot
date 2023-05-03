import React from "react";
import t from "prop-types";

import Translate from "./Translate.js";
import { InputContainer, Label } from "../Style/style.js";

function IsHard({ isHard, setIsHard }) {
  return (
    <InputContainer>
      <Label>
        <Translate>Hard Mode:</Translate>
      </Label>
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

IsHard.propTypes = {
  isHard: t.bool,
  setIsHard: t.func,
};

export default IsHard;
