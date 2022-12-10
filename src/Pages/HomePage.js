import React from "react";
import { useNavigate } from "react-router-dom";
import style from "styled-components";

const PageWrapper = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = style.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 50%;
  align-items: center;
  justify-content: space-evenly;
`;

function HomePage() {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <ButtonWrapper>
        <button onClick={() => navigate("/play", { replace: true })}>
          Play
        </button>
        <button>Didacticiel</button>
        <button>About</button>
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default HomePage;
