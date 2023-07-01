import React from "react";
import styled from 'styled-components';

const Answer = (props) => {
  const { id, answer, setQuestionId } = props;
  return (
    <>
      <StyledButton onClick={setQuestionId}>
        {answer}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.div`
  width: 300px;
  height: 80px;
  margin: 10px;
  border: none;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    cursor: pointer;
    background-color: #f5f5f5;
  }

  @media screen and (max-width: 767px){
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    font-size: 12px;
  }
`;

export default Answer;
