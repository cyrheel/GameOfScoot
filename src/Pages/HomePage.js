import React, { useState } from "react";
import t from "prop-types";
import styled, { keyframes } from "styled-components";

import { CustomBtn, CustomNavLink, PageWrapper } from "../Style/style.js";

const Body = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const ButtonWrapper = styled.div`
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
const CustomTitle = styled.h1`
  user-select: none;
  color: #f4d35e;
  font-family: "Nabla", cursive;
  animation: ${TitleAnimation} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
const PopUpBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0, 0.7);
  z-index: 2;
`;
const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 75%;
  background: #0d3b66;
  border-radius: 10px;
  text-align: center;
`;

function PopUp({ setOpen }) {
  return (
    <PopUpBG>
      <PopUpContainer>
        <button onClick={() => setOpen(false)} style={{ width: "10%" }}>
          x
        </button>
        <p>More to come {"<3"}</p>
      </PopUpContainer>
    </PopUpBG>
  );
}

function HomePage() {
  const [open, setOpen] = useState(false);
  return (
    <PageWrapper>
      <Body>
        {open && <PopUp setOpen={setOpen} />}
        <CustomTitle>Game Of O.U.T</CustomTitle>
        <ButtonWrapper>
          <CustomNavLink id="play" to={"/choose-game"}>
            Play
          </CustomNavLink>
          <CustomBtn id="about" onClick={() => setOpen(true)}>
            About
          </CustomBtn>
        </ButtonWrapper>
      </Body>
    </PageWrapper>
  );
}

PopUp.propTypes = {
  setOpen: t.func,
};

export default HomePage;
