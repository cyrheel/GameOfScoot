import React from "react";
import style from "styled-components";

import GameInfo from "../Components/GameInfo.js";
import RunGame from "../Components/RunGame.js";
import { PageWrapper, Header, CustomBtn } from "../Style/style.js";
import GoBackBtn from "../Components/GoBackButton.js";
import RestartButton from "../Components/RestartButton.js";

const InfoWrapper = style.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 40%;
  max-height: 40%;
  padding: 1%;
`;

const GameWrapper = style.div`
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
        <GoBackBtn destination={"/set-game"} />
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
