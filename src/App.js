// App.js
import React from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import Content from './Content';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const App = () => {
  return (
    <AppWrapper>
      <NavBar />
      <MainWrapper>
        <Sidebar />
        <Content />
      </MainWrapper>
    </AppWrapper>
  );
};

export default App;
