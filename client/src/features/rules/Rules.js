import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleName,
  handleNbOfPlayers,
  selectName,
  selectNbOfPlayers,
} from "./rulesSlice";

const Rules = () => {
  const gameName = useSelector(selectName);
  const nbOfPlayer = useSelector(selectNbOfPlayers);
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="name">Game Name :</label>
      <input
        type="text"
        id="name"
        onChange={() => dispatch(handleName)}
        value={gameName}
      />
      <lable htmlFor="nop">Number Of Players</lable>
      <input
        type="number"
        id="nop"
        onChange={() => dispatch(handleNbOfPlayers)}
        value={nbOfPlayer}
      />
    </div>
  );
};

export default Rules;
