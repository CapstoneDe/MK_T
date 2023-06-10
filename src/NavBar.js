// NavBar.js
import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
  background-color: #333;
  color: #fff;
  height: 30px;
  padding: 16px;
`;

const MenuWrapper = styled.div`
  display: inline-block;
  margin-right: 30px;
  cursor: pointer;
`;

const NavBar = () => {
  return (
    <NavBarWrapper>
      <MenuWrapper>{"Save"}</MenuWrapper>
      <MenuWrapper>{"Share"}</MenuWrapper>
      <MenuWrapper>{"Export"}</MenuWrapper>
      <MenuWrapper>{"Import"}</MenuWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
