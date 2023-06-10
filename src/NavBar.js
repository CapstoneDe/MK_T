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
      <MenuWrapper>{"메뉴1"}</MenuWrapper>
      <MenuWrapper>{"메뉴2"}</MenuWrapper>
      <MenuWrapper>{"메뉴3"}</MenuWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
