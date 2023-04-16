import React, { useContext } from "react";
import styled from "styled-components";

import PlayerContext from "../Context/PlayerContext.js";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 80%;
  padding: 1%;
`;

const StatsContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 80%;
`;

function EndGame() {
  const { players } = useContext(PlayerContext);
  return (
    <Root>
      <div>
        <p id="endGame">End Game :/</p>
        <p>Stats</p>
      </div>
      <StatsContainer>
        {players.map((p, i) => {
          const keys = Object.keys(p.stats);
          const values = Object.values(p.stats);
          return (
            <div key={i}>
              <p>{p.name}</p>
              <p>{p.letter}</p>
              {keys.map((k, i) => (
                <p key={i}>
                  {k} : {values[i] ?? "N/A"}
                </p>
              ))}
            </div>
          );
        })}
      </StatsContainer>
    </Root>
  );
}

export default EndGame;
