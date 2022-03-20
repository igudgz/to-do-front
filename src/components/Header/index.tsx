import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";
import styled from "styled-components";

interface Props {
  logged?: boolean;
}

const HeaderStyled = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c9ada7;
`;
const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #6d597a;
  margin-left: 30px;
`;

const Header = ({ logged }: Props) => {
  return (
    <HeaderStyled>
      <Title>To do List</Title>
      <List marginRight="30px" display="flex">
        <ListItem>
          <p>{logged ? "Logout" : "Login"}</p>
        </ListItem>
      </List>
    </HeaderStyled>
  );
};

export default Header;
