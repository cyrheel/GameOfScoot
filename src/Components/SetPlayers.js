import React from "react";
import style from "styled-components";

import { Label, TextInput } from "../Style/style.js";

const InputContainer = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  justify-content: flex-start;
  align-items: center;
`;
const PlayerContainer = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 80%;
  overflow: auto;
  gap: 5px;
`;
const CustomButton = style.button`
  border: none;
  height: 20px;
  border-radius: 4px;
  background: #EE964B;
  font-family: 'Labrada', serif;
`;
const ItemContainer = style.div`
  display: flex;
  width: 100%;
  height: 30px;
`;

function SetPlayers({ players, setPlayers }) {
  return (
    <InputContainer>
      <div
        style={{
          display: "flex",
          maxHeight: "10%",
          width: "100%",
          gap: "30px",
          alignItems: "center",
          padding: "2%",
        }}
      >
        <Label>Players: </Label>
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
          style={{ width: "25%" }}
        >
          Add Player
        </CustomButton>
      </div>
      <PlayerContainer>
        {players.map((player, idx) => {
          return (
            <ItemContainer key={idx}>
              <TextInput
                placeholder={"Enter " + player.name + " name..."}
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

export default SetPlayers;
