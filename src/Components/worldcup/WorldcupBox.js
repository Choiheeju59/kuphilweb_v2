import React from "react";
import styled from 'styled-components';

const WorldcupBox = (props) => {
  const { title, thumbnail, setRound, setGame, gameNum } = props;

  const start = (startnum) => {
    setRound(startnum);
    setGame(gameNum);
  }
  return (
    <StyledBox>
      <TitleBox>
        <WorldcupTitle>{title}</WorldcupTitle>
        <StartSubTitle>(* 퍼블릭 도메인으로 지정된 이미지만 사용했습니다.)</StartSubTitle>
        <Thumbnail src={thumbnail} />
      </TitleBox>
      <AnswerBox>
        <SelectRound onClick={() => start(8)}>8강</SelectRound>
        <SelectRound onClick={() => start(16)}>16강</SelectRound>
        <SelectRound onClick={() => start(32)}>32강</SelectRound>
        <SelectRound onClick={() => start(64)}>64강</SelectRound>
      </AnswerBox>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  width: 600px;
  padding: 50px 20px;
  margin: 0 auto;
  margin-bottom: 50px;
  box-sizing: border-box;

  @media screen and (max-width: 767px){
    width: 100%;
    padding: 30px 10px;
  }
`;
const TitleBox = styled.div`
  width: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 767px){
    margin-bottom: 10px;
  }
`;
const Thumbnail = styled.img`
  width: 500px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 767px){
    width: 90%;
  }
`;
const WorldcupTitle = styled.div`
  font-size: 25px;

  @media screen and (max-width: 767px){
    font-size: 20px;
}
`;
const StartSubTitle = styled.p`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 12px;
  color: red;

  @media screen and (max-width: 767px){
    font-size: 11px;
  }
`;
const AnswerBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 767px){
    flex-direction: column;
  }
`;
const SelectRound = styled.div`
  margin: 0 30px;
  font-size: 20px;
  &:hover{
    cursor: pointer;
    color: #aaaaaa;
  }

  @media screen and (max-width: 767px){
    margin: 15px 0;
  }
`;

export default WorldcupBox;
