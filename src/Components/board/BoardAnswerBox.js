import React from "react";
import styled from 'styled-components';

const BoardAnswerBox = (props) => {
  const { answer, date, last } = props;

  return (
    <StyledBox last={last}>
      <BoxAnswer>{answer}</BoxAnswer>
      <BoxDetail>
        <BoxDetailText>등록 {date}</BoxDetailText>
      </BoxDetail>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 15px 0;
  border-bottom: ${props => !props.last ? '1px solid #eeeeee' : 'none'};

  @media screen and (max-width: 767px){
    min-height: 90px;
  }
`;
const BoxAnswer = styled.div`
  margin-bottom: 30px;
  text-align: start;
  word-break: break-all;
  white-space: pre-wrap;
  line-height: 1.5;
`;
const BoxDetail = styled.div`
`;
const BoxDetailText = styled.p`
  font-size: 12px;
  color: #aaaaaa;
  @media screen and (max-width: 767px){
    font-size: 10px;
  }
`;

export default BoardAnswerBox;
