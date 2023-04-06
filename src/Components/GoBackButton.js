import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import SVG from "../Images/chevron-double-left.svg";

const CustomNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  min-width: 25px;
  border: none;
  border-radius: 5px;
  background: #f4d35e;
`;

function GoBackBtn({ destination }) {
  return (
    <CustomNavLink to={destination}>
      <img src={SVG} />
    </CustomNavLink>
  );
}

export default GoBackBtn;
