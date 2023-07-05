import React from "react";
import styled from 'styled-components';

const BoardBox = (props) => {
  const { title, answerCount, date } = props;
  
  return (
    <StyledBox>
      <BoxTitle>{title}</BoxTitle>
      <BoxDetail>
        <BoxDetailText>답변 {answerCount}</BoxDetailText>
        <BoxDetailText>등록 {date}</BoxDetailText>
      </BoxDetail>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  width: 600px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  box-sizing: border-box;
  padding: 15px;
  margin: 10px;
  &:hover{
    cursor: pointer;
  }

  @media screen and (max-width: 767px){
    width: 100%;
    height: 90px;
  }
`;
const BoxTitle = styled.div`
  font-size: 18px;
  @media screen and (max-width: 767px){
    font-size: 16px;
  }
`;
const BoxDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;
const BoxDetailText = styled.p`
  font-size: 12px;
  color: #aaaaaa;
  margin-right: 15px;
  @media screen and (max-width: 767px){
    font-size: 10px;
  }
`;

export default BoardBox;
