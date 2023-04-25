import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100svh;
  background: #0d3b66;
`;

export const Header = styled.div`
  display: flex;
  width: 95%;
  padding: 2%;
  gap: 10px;
`;

export const CustomBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  border: none;
  border-radius: 4px;
  color: #faf0ca;
  background: #ee964b;
  padding-bottom: 2%;
  margin: 0;
  font-size: 110%;
  font-family: "DynaPuff", cursive;
`;

export const CustomNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  color: #faf0ca;
  background: #ee964b;
  padding-bottom: 2%;
  padding-left: 1%;
  padding-right: 1%;
  margin: 0;
  font-size: 110%;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: flex-start;
  gap: 25px;
  align-items: center;
`;

export const Label = styled.p`
  color: #faf0ca;
  font-size: 110%;
`;

export const TextInput = styled.input`
  border: none;
  background: #faf0ca;
  font-weight: bold;
  font-family: "DynaPuff", cursive;
  padding: 1%;
  border-radius: 3px;
`;
