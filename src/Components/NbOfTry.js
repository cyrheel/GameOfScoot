import React from "react";
import styled from "styled-components";

import { InputContainer, Label } from "../Style/style.js";

const CustomBtn = styled.button`
  border: none;
  background: #ee964b;
  width: 22px;
  height: 22px;
`;

function NbOfTry({ tries, setTries }) {
  return (
    <InputContainer>
      <Label>Nb Of Try:</Label>
      <Label>{tries}</Label>
      {tries !== 1 && (
        <CustomBtn onClick={() => setTries(tries === 1 ? 1 : tries - 1)}>
          -
        </CustomBtn>
      )}
      <CustomBtn onClick={() => setTries(tries + 1)}>+</CustomBtn>
    </InputContainer>
  );
}

export default NbOfTry;
