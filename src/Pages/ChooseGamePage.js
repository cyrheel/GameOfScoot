import React from "react";
import { useNavigate } from "react-router-dom";
import style from "styled-components";

import { PageWrapper, Header } from "../Style/style.js";

const ButtonWrapper = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

function ChooseGamePage() {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <Header>
        <button
          id="goback"
          onClick={() => navigate("/", { replace: true })}
          style={{ width: "15%" }}
        >
          {"<-"}
        </button>
      </Header>
      <ButtonWrapper>
        <button
          id="classicmode"
          onClick={() => navigate("/set-game?from=classic", { replace: true })}
        >
          Classic Mode
        </button>
        <button
          id="custommode"
          onClick={() => navigate("/set-game?from=custom", { replace: true })}
        >
          Custom Mode
        </button>
        <button id="readrules">Read Classic Rules</button>
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default ChooseGamePage;
