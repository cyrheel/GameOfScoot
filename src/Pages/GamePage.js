import React, { useContext } from "react";
import styled from "styled-components";

import GameContext from "../Context/GameContext.js";
import GameInfo from "../Components/GameInfo.js";
import RunGame from "../Components/RunGame.js";
import EndGame from "../Components/EndGame.js";
import GoBackBtn from "../Components/GoBackButton.js";
import RestartButton from "../Components/RestartButton.js";
import { PageWrapper, Header } from "../Style/style.js";

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
  const { game } = useContext(GameContext);

  return (
    <PageWrapper>
      <Header>
        <GoBackBtn destination={"/"} />
        <RestartButton />
      </Header>
      {game.isRunning ? (
        <>
          <GameWrapper>
            <RunGame />
          </GameWrapper>
          <InfoWrapper>
            <GameInfo />
          </InfoWrapper>
        </>
      ) : (
        <EndGame />
      )}
    </PageWrapper>
  );
}

export default GamePage;
