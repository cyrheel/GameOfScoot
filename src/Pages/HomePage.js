import React from "react";
import { useNavigate } from "react-router-dom";
import style, { keyframes } from "styled-components";

import { CustomBtn, PageWrapper } from "../Style/style.js";

const Body = style.div`
  display: flex;
  flex-flow: column;  
  width: 100%;
  height: 100%;
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
const TitleAnimation = keyframes`{
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
            transform: translateZ(-800px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
};
`;
const CustomTitle = style.h1`
  user-select: none;
  color: #F4D35E;
  font-family: 'Nabla', cursive;
  animation: ${TitleAnimation} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

function HomePage() {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <Body>
        <CustomTitle>Game Of O.U.T</CustomTitle>
        <ButtonWrapper>
          <CustomBtn
            id="play"
            onClick={() => navigate("/choose-game", { replace: true })}
          >
            Play
          </CustomBtn>
          <CustomBtn id="about">About</CustomBtn>
        </ButtonWrapper>
      </Body>
    </PageWrapper>
  );
}

export default HomePage;
