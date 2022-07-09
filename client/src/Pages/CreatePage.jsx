import React from "react";
import { useNavigate } from "react-router-dom";
import Rules from "../features/rules/Rules";
import Player from "../features/players/Player";

const CreatePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/", { replace: true })}>{"<-"}</button>
      <h1>Create Game !</h1>
      <h2>Define your rules</h2>
      <Rules />
      <Player />
    </div>
  );
};

export default CreatePage;
