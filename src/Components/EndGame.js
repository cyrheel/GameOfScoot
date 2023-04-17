import React, { useContext } from "react";
import styled from "styled-components";

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
  height: 90%;
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
      return "Nb of defined tricks";
    }
    case "nbFailedDef": {
      return "Nb of not defined tricks";
    }
    case "nbCopied": {
      return "Nb of copied tricks";
    }
    case "nbFailedTry": {
      return "Nb of failed try to copy";
    }
    case "nbLetterGiven": {
      return "Nb of given letters";
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
        <CustomP>{player.name}'s Stats</CustomP>
        {player.letter.length > 0 && <CustomP>{player.letter}</CustomP>}
      </Header>
      {keys.map((k, i) => (
        <StatRow key={i}>
          <CustomKey>{statLabelMapper(k)} :</CustomKey>
          <CustomP>{values[i] ?? "N/A"}</CustomP>
        </StatRow>
      ))}
    </StatRoot>
  );
}

function EndGame() {
  const { players } = useContext(PlayerContext);
  return (
    <Root>
      <Title id="endGame">End Game :/</Title>
      <StatsContainer>
        {players.map((p, i) => (
          <Stats key={i} player={p} />
        ))}
      </StatsContainer>
    </Root>
  );
}

export default EndGame;
