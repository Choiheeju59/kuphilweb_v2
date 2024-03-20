import React from "react";
import styled from 'styled-components';

const Answer = (props) => {
  const { answer, handleClickAnswer } = props;
  return (
    <>
      <StyledButton onClick={handleClickAnswer}>
        {answer}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.div`
  width: 300px;
  height: 80px;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  white-space: pre-wrap;
  
  &:hover{
    cursor: pointer;
    background-color: #f5f5f5;
  }

  @media screen and (max-width: 767px){
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    font-size: 12px;
  }
`;

export default Answer;
