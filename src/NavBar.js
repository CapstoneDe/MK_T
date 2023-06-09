// NavBar.js
import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
  background-color: #333;
  color: #fff;
  height: 30px;
  padding: 16px;
`;

const NavBar = () => {
  return (
    <NavBarWrapper>
      {"메뉴1"}
    </NavBarWrapper>
  );
};

export default NavBar;
