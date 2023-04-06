import React from "react";
import { useNavigate } from "react-router-dom";
import style from "styled-components";

import { PageWrapper, Header, CustomBtn } from "../Style/style.js";
import GoBackBtn from "../Components/GoBackButton.js";

const ButtonWrapper = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

function ChooseGamePage() {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <Header>
        <GoBackBtn destination={"/"} />
      </Header>
      <ButtonWrapper>
        <CustomBtn
          id="classicmode"
          onClick={() => navigate("/set-quick-game", { replace: true })}
        >
          Classic
        </CustomBtn>
        <CustomBtn
          id="custommode"
          onClick={() => navigate("/set-game", { replace: true })}
        >
          Custom
        </CustomBtn>
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default ChooseGamePage;
