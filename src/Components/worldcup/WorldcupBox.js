import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const WorldcupBox = (props) => {
  const { title, gameId, start } = props;
  const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    console.log(gameId)
    let imgName = gameId === 1 ? 'composer' : 'classic';
    let _thumbnail = `${process.env.REACT_APP_KUPHIL_PUBLIC_URL}/images/thumbnail/worldcup_${imgName}.png`;
    setThumbnail(_thumbnail);
  })

  return (
    <StyledBox>
      <div>
        <Title>{title}</Title>
        <Notice>(* 퍼블릭 도메인으로 지정된 이미지만 사용했습니다.)</Notice>
        <Thumbnail src={thumbnail} />
      </div>
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
  margin: 50px auto;
  width: 100%;
  max-width: 400px;
`;

const Thumbnail = styled.img`
  width: 300px;
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

`;
const Title = styled.div`
  font-size: 22px;

  @media screen and (max-width: 767px){
    font-size: 18px;
}
`;
const Notice = styled.p`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 12px;
  color: red;

  @media screen and (max-width: 767px){
    font-size: 11px;
  }
`;
const AnswerBox = styled.div`
  margin: 20px 0;
`;
const SelectRound = styled.div`
  width: 100%;
  margin: 15px auto;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  &:hover{
    cursor: pointer;
    background-color: #f5f5f5;
  }
`;

export default WorldcupBox;
