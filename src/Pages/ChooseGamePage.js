import React from "react";
import { useNavigate } from "react-router-dom";
import style from "styled-components";

import { PageWrapper, Header } from "../Style/style";

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
          onClick={() => navigate("/", { replace: true })}
          style={{ width: "15%" }}
        >
          {"<-"}
        </button>
      </Header>
      <ButtonWrapper>
        <button onClick={() => navigate("/set-players", { replace: true })}>
          Classic Mode
        </button>
        <button>Custom Mode</button>
        <button>Read Classic Rules</button>
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default ChooseGamePage;
