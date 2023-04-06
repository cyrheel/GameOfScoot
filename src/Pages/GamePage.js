import React from "react";
import styled from "styled-components";

import GameInfo from "../Components/GameInfo.js";
import RunGame from "../Components/RunGame.js";
import { PageWrapper, Header } from "../Style/style.js";
import GoBackBtn from "../Components/GoBackButton.js";
import RestartButton from "../Components/RestartButton.js";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 40%;
  max-height: 40%;
  padding: 1%;
`;

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 40%;
  padding: 1%;
`;

function GamePage() {
  return (
    <PageWrapper>
      <Header>
        <GoBackBtn destination={"/"} />
        <RestartButton />
      </Header>
      <GameWrapper>
        <RunGame />
      </GameWrapper>
      <InfoWrapper>
        <GameInfo />
      </InfoWrapper>
    </PageWrapper>
  );
}

export default GamePage;
