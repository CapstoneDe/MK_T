// Content.js
import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  flex: 1;
  padding: 16px;
`;

const Content = ({ contentValue }) => {
    return (
      <ContentWrapper>
        {contentValue && <div>{contentValue}</div>}
      </ContentWrapper>
    );
};

export default Content;
