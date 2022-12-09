import React from "react";
import { useNavigate } from "react-router-dom";

function ChooseGamePage() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/", { replace: true })}>{"<-"}</button>
      <button onClick={() => navigate("/set-players", { replace: true })}>
        Classic Mode
      </button>
      <button>Custom Mode</button>
      <button>Read Classic Rules</button>
    </div>
  );
}

export default ChooseGamePage;
