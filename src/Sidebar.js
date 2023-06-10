// Sidebar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Content from './Content';

const SidebarWrapper = styled.div`
  background-color: #f1f1f1;
  width: 240px;
  padding: 16px;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
  position: relative; /* 변경된 부분 */
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const TextArea = styled.textarea`
  width: calc(100% - 20px); /* 너비 조정 */ 
  height: 550px; /* 원하는 높이로 조정하세요 */
  padding: 8px;  
  resize: none; /* 수직 크기 조정 허용 */
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Sidebar = () => {
  const [inputValue, setInputValue] = useState('');
  const [contentValue, setContentValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // 버튼 클릭 시 동작할 로직 작성
    setContentValue(inputValue);
  };

  const handleResetClick = () => {
    setInputValue('');
    setContentValue('');
  };

  return (
    <SidebarWrapper>
      <InputWrapper>
        <TextArea
          value={inputValue}
          onChange={handleInputChange}
          placeholder="사용자 입력"
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={handleButtonClick}>DB생성</Button>
        <Button onClick={handleResetClick}>초기화</Button>
      </ButtonWrapper>
      <Content contentValue={contentValue} />
      {/* 사이드바 내용 */}
    </SidebarWrapper>
  );
};

export default Sidebar;
