import React, { useContext } from "react";
import styled from "styled-components";

import Translate from "./Translate.js";
import PlayerContext from "../Context/PlayerContext.js";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  align-items: center;
`;
const Title = styled.p`
  color: #faf0ca;
  margin: 0;
  width: 90%;
  text-align: center;
  font-size: 125%;
  padding: 2%;
`;
const StatsContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-flow: column;
  width: 90%;
  height: 95%;
  gap: 20px;
  align-items: center;
`;
const StatRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 5px;
  border: 2px solid #f4d35e;
  border-radius: 10px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.3);
  gap: 2px;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
const StatRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const CustomP = styled.p`
  color: #faf0ca;
  margin: 0;
  padding: 2%;
`;
const CustomKey = styled.p`
  color: #faf0ca;
  margin: 0;
  padding: 2%;
  width: 200px;
`;

function statLabelMapper(rdStr) {
  switch (rdStr) {
    case "nbDef": {
      return "Defined tricks";
    }
    case "nbFailedDef": {
      return "Not defined tricks";
    }
    case "nbCopied": {
      return "Copied tricks";
    }
    case "nbFailedTry": {
      return "Failed to copy tricks";
    }
    case "nbLetterGiven": {
      return "Letters given to others";
    }
    default: {
      return "";
    }
  }
}

function Stats({ player }) {
  const keys = Object.keys(player.stats);
  const values = Object.values(player.stats);
  return (
    <StatRoot>
      <Header>
        <CustomP>{player.name}</CustomP>
        {player.letter.length > 0 && <CustomP>{player.letter}</CustomP>}
      </Header>
      {keys.map((k, i) => {
        const statLabel = statLabelMapper(k);
        return (
          <StatRow key={i}>
            <CustomKey>
              <Translate>{statLabel}</Translate>
            </CustomKey>
            <CustomP>{values[i] ?? "N/A"}</CustomP>
          </StatRow>
        );
      })}
    </StatRoot>
  );
}

function EndGame() {
  const { players } = useContext(PlayerContext);
  return (
    <Root>
      <Title id="endGame">
        <Translate>Stats</Translate>
      </Title>
      <StatsContainer>
        {players.map((p, i) => (
          <Stats key={i} player={p} />
        ))}
      </StatsContainer>
    </Root>
  );
}

export default EndGame;
