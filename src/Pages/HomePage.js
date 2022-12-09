import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/play", { replace: true })}>Play</button>
      <button>Didacticiel</button>
      <button>About</button>
    </div>
  );
}

export default HomePage;
