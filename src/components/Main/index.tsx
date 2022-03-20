import react from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const MainStyled = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #f2e9e4;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Main = ({ children }: Props) => {
  return <MainStyled>{children}</MainStyled>;
};

export default Main;
