import style from "styled-components";

export const PageWrapper = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #0D3B66;
`;

export const Header = style.div`
  display: flex;
  width: 95%;
  padding: 2%;
  gap: 10px;
`;

export const CustomBtn = style.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  border: none;
  border-radius: 4px;
  color: #FAF0CA;
  background: #EE964B;
  padding-bottom: 2%;
  margin: 0;
  font-size: 110%;
  font-family: 'Labrada', serif;
`;

export const InputContainer = style.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: flex-start;
  gap: 25px;
  align-items: center;
`;

export const Label = style.p`
  color: #FAF0CA;
  font-size: 110%;
`;

export const TextInput = style.input`
  border: none;
  background: #FAF0CA;
  font-weight: bold;
  font-family: 'Labrada', serif;
  padding: 1%;
  border-radius: 3px;
`;
