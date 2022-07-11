import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleName,
  handlePosition,
  handleRedo,
  resetPlayer,
  selectPlayer,
} from "./playerSlice";
import { selectNbOfPlayers } from "../../features/rule/ruleSlice";
import { increment, selectCount } from "../counter/counterSlice";
import { addPlayer } from "../players/playersSlice";

const Player = () => {
  const dispatch = useDispatch();
  const player = useSelector(selectPlayer);
  const count = useSelector(selectCount);
  const nbOfPlayers = useSelector(selectNbOfPlayers);
  const [playerName, setPlayerName] = React.useState("");
  const [position, setPosition] = React.useState(1);
  const [redo, setRedo] = React.useState(false);

  return (
    <div>
      <div>
        <h1>{`Player ${count} of ${nbOfPlayers}`}</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(player);
        }}
      >
        <label htmlFor="name">Player Name :</label>
        <input
          type="text"
          id="name"
          onChange={(e) => {
            setPlayerName(e.target.value);
            dispatch(handleName(e.target.value));
          }}
          value={playerName}
        />
        <label htmlFor="pos">Ordre de passage</label>
        <input
          type="number"
          id="pos"
          onChange={(e) => {
            setPosition(e.target.value);
            dispatch(handlePosition(e.target.value));
          }}
          value={position}
        />
        <label htmlFor="redo">Redo ?</label>
        <input
          type="checkbox"
          id="redo"
          onChange={() => {
            setRedo(!redo);
            dispatch(handleRedo(redo));
          }}
          value={redo}
        />
        <label htmlFor="redo">Allow Redo</label>
        <button
          onClick={() => {
            dispatch(increment());
            dispatch(addPlayer(player));
            dispatch(resetPlayer());
            setPlayerName("");
            setPosition(1);
            setRedo(false);
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Player;
