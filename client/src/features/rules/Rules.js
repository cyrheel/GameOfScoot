import React, { useState } from "react";
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
  const [name, setName] = useState("");

  return (
    <div>
      <label htmlFor="name">Game Name :</label>
      <input type="text" id="name" />
    </div>
  );
};

export default Rules;
