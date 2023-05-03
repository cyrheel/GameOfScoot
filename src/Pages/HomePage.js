import React, { useContext, useState } from "react";
import t from "prop-types";
import styled, { keyframes } from "styled-components";

import Translate from "../Components/Translate.js";
import PreferencesContext from "../Context/PreferenceContext.js";
import { CustomBtn, CustomNavLink, PageWrapper } from "../Style/style.js";
import instaSVG from "../Images/instagram.svg";
import emailSVG from "../Images/envelope.svg";
import githubSVG from "../Images/github.svg";

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
  width: 85%;
  height: 85%;
  background: #0d3b66;
  border-radius: 10px;
  text-align: center;
`;
const PopUpHeader = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: flex-start;
`;
const PopUpBody = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 80%;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
`;
const CloseBtn = styled.button`
  display: flex;
  height: 50%;
  width: 10%;
  justify-content: center;
  align-items: center;
  margin: 3%;
  border: none;
  border: 1.5px solid black;
  border-radius: 10%;
  background: #f4d35e;
`;
const CustomA = styled.a`
  width: 20%;
  height: 10%;
  padding: 5%;
`;
const CustomImg = styled.img`
  width: 100%;
  background: #f4d35e;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5%;
`;
const CustomP = styled.p`
  margin: 0;
  padding: 5%;
  color: white;
`;

function PopUp({ setOpen, popUpType, setPopUpType }) {
  const { preferences, setPreferences } = useContext(PreferencesContext);
  return (
    <PopUpBG>
      <PopUpContainer>
        <PopUpHeader>
          <CloseBtn
            onClick={() => {
              setOpen(false);
              setPopUpType("");
            }}
          >
            x
          </CloseBtn>
        </PopUpHeader>
        {popUpType === "about" && (
          <PopUpBody>
            <CustomP>
              <Translate>Send a message :</Translate>
            </CustomP>
            <CustomA href="mailto:goobyskilful@hotmail.com">
              <CustomImg src={emailSVG} alt="svg" />
            </CustomA>
            <br />
            <CustomA href="https://www.instagram.com/skilfulgvm3s/">
              <CustomImg src={instaSVG} alt="svg" />
            </CustomA>
            <br />
            <CustomP>
              <Translate>See the source code :</Translate>
            </CustomP>
            <CustomA href="https://github.com/cyrheel/GameOfScoot">
              <CustomImg src={githubSVG} alt="svg" />
            </CustomA>
          </PopUpBody>
        )}
        {popUpType === "rule" && (
          <PopUpBody>
            <h3 style={{ color: "white", margin: "0" }}>
              <Translate>Rules :</Translate>
            </h3>
            <CustomP>
              <Translate>
                In turn each player must try to impose a trick.
              </Translate>
            </CustomP>
            <CustomP>
              <Translate>
                When a player succeeds, all the others have a limited number of
                tries to reproduce it.
              </Translate>
            </CustomP>
            <CustomP>
              <Translate>
                If another player fails to reproduce the imposed trick, he gets
                a letter.
              </Translate>
            </CustomP>
            <CustomP>
              <Translate>
                When a player's letters match the word chosen at the start of
                the game, he is eliminated. The goal is to be the last one not
                to have all the letters.
              </Translate>
            </CustomP>
            <CustomP>
              <Translate>Enjoy !</Translate>
            </CustomP>
          </PopUpBody>
        )}
        {popUpType === "setting" && (
          <PopUpBody>
            <h3 style={{ color: "white", margin: "0" }}>
              <Translate>Settings</Translate>
            </h3>
            <CustomP>
              <Translate>Language :</Translate>
            </CustomP>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <p
                style={{
                  ...(preferences.language === "en" && {
                    background: "#f4d35e",
                  }),
                  padding: "3%",
                  border: "3px solid black",
                  borderRadius: "10px",
                }}
                onClick={() => {
                  setPreferences({ ...preferences, language: "en" });
                }}
              >
                EN
              </p>
              <p
                style={{
                  ...(preferences.language === "fr" && {
                    background: "#f4d35e",
                  }),
                  padding: "3%",
                  border: "3px solid black",
                  borderRadius: "10px",
                }}
                onClick={() => {
                  setPreferences({ ...preferences, language: "fr" });
                }}
              >
                FR
              </p>
            </div>
          </PopUpBody>
        )}
      </PopUpContainer>
    </PopUpBG>
  );
}

function HomePage() {
  const [open, setOpen] = useState(false);
  const [popUpType, setPopUpType] = useState("");
  return (
    <PageWrapper>
      <Body>
        {open && (
          <PopUp
            setOpen={setOpen}
            popUpType={popUpType}
            setPopUpType={setPopUpType}
          />
        )}
        <CustomTitle>Game Of O.U.T</CustomTitle>
        <ButtonWrapper>
          <CustomNavLink id="play" to={"/choose-game"}>
            <Translate>Play</Translate>
          </CustomNavLink>
          <CustomBtn
            id="about"
            onClick={() => {
              setOpen(true);
              setPopUpType("rule");
            }}
          >
            <Translate>Rules</Translate>
          </CustomBtn>
          <CustomBtn
            id="about"
            onClick={() => {
              setOpen(true);
              setPopUpType("setting");
            }}
          >
            <Translate>Settings</Translate>
          </CustomBtn>
          <CustomBtn
            id="about"
            onClick={() => {
              setOpen(true);
              setPopUpType("about");
            }}
          >
            <Translate>About</Translate>
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
