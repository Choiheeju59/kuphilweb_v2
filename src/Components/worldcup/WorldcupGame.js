import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import WorldcupResult from './WorldcupResult';

export const RoundCount = ({round, now}) => {
  let roundText = '';
  if(round === 2){
    roundText = '결승';
  } else roundText = round + '강';

  return (
    <div style={{fontSize:'30px'}}>
      {roundText} <span style={{fontSize:'30px'}}>( {now} / {round / 2} )</span>
    </div>
  );
}

export const Data = ({data, game, num, play}) => {
  if(game === 1){
    return (
      <>
        <MainSentence>{data.composer}</MainSentence>
        <SubSentence>{data.kr}</SubSentence>
        <ImgDiv>
          <ImgData src={data.img} alt={data.img} onClick={() => play(num)} />
        </ImgDiv>
      </>
    )
  } else {
    return (
      <>
        <MainSentence>{data.song}</MainSentence>
        <SubSentence>{data.composer}</SubSentence>
        <ImgDiv>
          <ImgData src={data.img} alt={data.img} onClick={() => play(num)} />
        </ImgDiv>
      </>
    )
  }
}
const MainSentence = styled.p`
  font-size: 25px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px){
    font-size: 20px;
  }
`;
const SubSentence = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px){
    font-size: 16px;
  }
`;
const ImgDiv = styled.div`
  width: 100%;
  padding-top: 120%;
  position: relative;

  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  
`;
const ImgData = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

  &:hover{
    cursor: pointer;
  }
`;


const WorldcupGame = (props) => {
  const { round, setRound, game } = props;
  const [ now, setNow ] = useState(1);
  const [ left, setLeft ]  = useState(null);
  const [ right, setRight ]  = useState(null);
  const [ choice, setChoice ] = useState([]);
  const [ semiChoice, setSemiChoice ] = useState([]);

  const play = (num) => {
    let arr = [...semiChoice];
    if(num === 1){
      arr.push(choice.pop());
      choice.pop();
    } else {
      choice.pop();
      arr.push(choice.pop());
    }
    
    if(now === round / 2){
      setNow(1);
      setRound(round / 2);
      setSemiChoice([]);
      // arr 셔플
      for(let i = arr.length - 1; i > 0 ; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      setChoice(arr)
    } else {
      setNow(now + 1);
      setSemiChoice(arr);
    }
  }

  useEffect(() => {
    // 초기 데이터 가져오기
    let data = [];
    if(game === 1){
      for(let i = 1; i <= round; i++){
        data.push({composer: i + '번째 작곡가',kr: i + '번째 작곡가', img: ''});
      }
    } else {
      for(let i = 1; i <= round; i++){
        data.push({song: i + '번째 곡', composer: i + '번째 작곡가', img: ''});
      }
    }
    setChoice(data);
  },[]);

  useEffect(() => {
    if(choice.length > 1){
      setLeft(<Data data={choice[choice.length - 1]} game={game} num={1} play={play}/>);
      setRight(<Data data={choice[choice.length - 2]} game={game} num={2} play={play}/>);
    }
  },[choice, semiChoice]);


  return (
    <StyledBox>
      <TitleBox>
        { choice.length === 1 ?
          (
            <>
              <p style={{fontSize:'30px'}}>최종 우승</p>
            </>
          ) :
          (
            <>
              <RoundCount round={round} now={now} />
              <StartSubTitle>(* 환경에 따라 이미지 로딩 속도가 느릴 수 있습니다.)</StartSubTitle>
            </>
          )
        }
      </TitleBox>
      <AnswerBox>
        { choice.length === 1 ?
          (
            <>
              <Result>
                <WorldcupResult data={choice[0]} game={game} />
              </Result>
            </>
          ) :
          (
            <>
              <Content>{left}</Content>
              <Versus>VS</Versus>
              <Content>{right}</Content>
            </>
          )
        }
      </AnswerBox>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  width: 100%;
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
  margin-bottom: 50px;

  @media screen and (max-width: 767px){
    margin-bottom: 30px;
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
const Content = styled.div`
  width: 400px;
  margin: 10px;
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;
const Versus = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
`;

const Result = styled.div`
  width: 100%;
`;

export default WorldcupGame;
