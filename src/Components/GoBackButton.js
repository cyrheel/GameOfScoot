import React from "react";
import t from "prop-types";
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
    <CustomNavLink to={destination} id="goback">
      <img src={SVG} alt="SVG" />
    </CustomNavLink>
  );
}

GoBackBtn.propTypes = {
  destination: t.string,
};

export default GoBackBtn;
