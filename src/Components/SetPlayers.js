import React, { useContext } from "react";
import t from "prop-types";
import styled from "styled-components";

import Translate from "./Translate.js";
import { Label, TextInput } from "../Style/style.js";
import PreferenceContext from "../Context/PreferenceContext.js";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  justify-content: flex-start;
  align-items: center;
`;
const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 80%;
  overflow: auto;
  gap: 5px;
`;
const CustomButton = styled.button`
  border: none;
  height: 20px;
  border-radius: 4px;
  background: #ee964b;
`;
const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
`;
const Header = styled.div`
  display: flex;
  max-height: 10%;
  width: 100%;
  align-items: center;
  gap: 30px;
  padding: 2%;
`;
function SetPlayers({ players, setPlayers }) {
  const { preferences } = useContext(PreferenceContext);
  return (
    <InputContainer>
      <Header>
        <Label>
          <Translate>Players:</Translate>
        </Label>
        <CustomButton
          onClick={() => {
            const newPlayers = [
              ...players,
              {
                name: `Player ${players.length + 1}`,
                position: players.length + 1,
                letter: "",
                try: 2,
                redo: false,
                hasDefine: false,
                stats: {
                  nbDef: 0,
                  nbFailedDef: 0,
                  nbCopied: 0,
                  nbFailedTry: 0,
                  nbLetterGiven: 0,
                },
              },
            ];
            setPlayers(newPlayers);
          }}
          id="addPlayer"
          style={{ fontFamily: "DynaPuff, cursive", width: "45%" }}
        >
          <Translate>Add Player</Translate>
        </CustomButton>
      </Header>
      <PlayerContainer>
        {players.map((player, idx) => {
          return (
            <ItemContainer key={idx}>
              <TextInput
                placeholder={
                  preferences.language === "en"
                    ? "Player name..."
                    : "Nom du joueur..."
                }
                onChange={(e) => {
                  const nextPlayers = players.map((p, i) => {
                    if (i === idx) {
                      return {
                        ...p,
                        name: e.target.value,
                      };
                    }
                    return p;
                  });
                  setPlayers(nextPlayers);
                }}
              />
              {players.length > 2 && (
                <button
                  onClick={() => {
                    setPlayers(players.filter((p, i) => i !== idx));
                  }}
                >
                  X
                </button>
              )}
            </ItemContainer>
          );
        })}
      </PlayerContainer>
    </InputContainer>
  );
}

SetPlayers.propTypes = {
  players: t.array,
  setPlayers: t.func,
};

export default SetPlayers;
