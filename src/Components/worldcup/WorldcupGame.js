import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import WorldcupResult from './WorldcupResult';
import axios from 'axios';

export const RoundCount = ({round, now}) => {
  let roundText = '';
  if(round === 2){
    roundText = '결승';
  } else roundText = round + '강';

  return (
    <SemiTitleText>
      {roundText} <span>( {now} / {round / 2} )</span>
    </SemiTitleText>
  );
}

export const Data = ({data, num, play}) => {
  return (
    <>
      <MainSentence>{data.composer_en}</MainSentence>
      <SubSentence>{data.composer_kr}</SubSentence>
      <ImgDiv>
        <ImgData src={data.img} alt={data.img} onClick={() => play(num)} />
      </ImgDiv>
    </>
  )
}

const WorldcupGame = (props) => {
  const { title, round, setRound } = props;
  const [now, setNow] = useState(1);
  const [left, setLeft]  = useState(null);
  const [right, setRight]  = useState(null);
  const [choice, setChoice] = useState([]);
  const [semiChoice, setSemiChoice] = useState([]);
  const axiosUrl = process.env.REACT_APP_AXIOS_URL;
  
  useEffect(() => {
    getData();
  }, [])  

  useEffect(() => {
    if(choice.length > 1){
      setLeft(<Data data={choice[choice.length - 1]} num={1} play={play} />);
      setRight(<Data data={choice[choice.length - 2]} num={2} play={play} />);
    }
  },[choice, semiChoice]);

  const getData = async () => {
    axios.get(`${axiosUrl}/api/v1/etc/worldcup/round?num=${round}`)
      .then((res) => {
        setChoice(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

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

  return (
    <StyledBox>
      {choice.length === 1 ? (
        <>
          <TitleBox>
            <TitleText>{title}</TitleText>
            <SemiTitleText style={{ fontSize: "28px" }}>최종 우승</SemiTitleText>
          </TitleBox>
          <AnswerBox>
            <Result>
              <WorldcupResult data={choice[0]} />
            </Result>
          </AnswerBox>
        </>
      ) : (
        <>
          <TitleBox>
            <TitleText>{title}</TitleText>
            <RoundCount round={round} now={now} />
            <StartSubTitle>
              (* 환경에 따라 이미지 로딩 속도가 느릴 수 있습니다.)
            </StartSubTitle>
          </TitleBox>
          <AnswerBox>
            <Content>{left}</Content>
            <Versus>VS</Versus>
            <Content>{right}</Content>
          </AnswerBox>
        </>
      )}
    </StyledBox>
  );
};


const MainSentence = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px){
    font-size: 18px;
  }
`;
const SubSentence = styled.p`
  font-size: 16px;
  margin-bottom: 10px;

  @media screen and (max-width: 767px){
    font-size: 14px;
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
  margin-bottom: 30px;
  line-height: 1.2;

  @media screen and (max-width: 767px){
    margin-bottom: 30px;
  }
`;
const TitleText = styled.p`
  margin-bottom: 5px;
  font-size: 18px;
  @media screen and (max-width: 767px){
    font-size: 16px;
  }
`;
const SemiTitleText = styled.p`
  font-size: 28px;

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
    font-size: 10px;
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
  width: 300px;
  margin: 10px;
  @media screen and (max-width: 767px){
    width: 80%;
  }
`;
const Versus = styled.div`
  width: 60px;
  height: 60px;
  margin: 10px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const Result = styled.div`
  width: 100%;
`;

export default WorldcupGame;
