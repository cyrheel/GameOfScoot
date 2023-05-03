import React from "react";
import styled from "styled-components";

import { PageWrapper, Header, CustomNavLink } from "../Style/style.js";
import GoBackBtn from "../Components/GoBackButton.js";
import Translate from "../Components/Translate.js";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

function ChooseGamePage() {
  return (
    <PageWrapper>
      <Header>
        <GoBackBtn destination={"/"} />
      </Header>
      <ButtonWrapper>
        <CustomNavLink id="classicmode" to={"/set-quick-game"}>
          <Translate>Classic</Translate>
        </CustomNavLink>
        <CustomNavLink id="custommode" to={"/set-game"}>
          <Translate>Custom</Translate>
        </CustomNavLink>
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default ChooseGamePage;
