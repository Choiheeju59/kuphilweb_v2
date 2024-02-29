import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';
import Question from '../Components/test/Question';
import Answer from '../Components/test/Answer';

const Test = () => {
  const navigate = useNavigate();
  const [questionId, setQuestionId] = useState(0);
  const [question, setQuestion] = useState(
    {
      id: 0,
      question:{
        text: '악기 추천 받으러 갈까요?',
      },
      answer:{
        answer1: '너무 좋아요 :)',
        answer2: '다음에 봐요 :(',
      },
    },
  );
  const [instrument, setInstrument] = useState([
    { id: 0, score: 0 },
    { id: 1, score: 0 },
    { id: 2, score: 0 },
    { id: 3, score: 0 },
    { id: 4, score: 0 },
    { id: 5, score: 0 },
    { id: 6, score: 0 },
    { id: 7, score: 0 },
    { id: 8, score: 0 },
    { id: 9, score: 0 },
    { id: 10, score: 0 },
    { id: 11, score: 0 },
    { id: 12, score: 0 },
    { id: 13, score: 0 },
    { id: 14, score: 0 },
    { id: 15, score: 0 },
    { id: 16, score: 0 },
  ]);
  const result = ['cr0o0n','f0ni1r','sn0e2c','v0ai3o','co0e4l','c0so5n','fe0l6u','o0eb7o','ct0l8a','b0na9s','tt1r0u','t1er1o','hn1o2r','t1au3b','ti1i4m','p1ne5r','po1i6a']

  useEffect(()=>{
    if(0 < questionId && questionId <= 20){
      setQuestion({
        id: questionId,
        question:{
          text: questionId + '번째 질문',
          instrument: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        },
        answer:{
          answer1: '답변1',
          answer2: '답변2',
        },
      })
    } else if(questionId > 20){
      let _code = result[instrument.sort((a, b) => b.score - a.score)[0].id];
      navigate(`./result/${_code}`);
    }
  },[questionId]);

  const setScore = (score, answer) => {
    let addition = [...instrument];
    if(answer === 1){
      // 1번 버튼 클릭
      for(let i = 0; i < 17; i++){
        addition[i].score += score[i];
      }
    } else{
      // 2번 버튼 클릭
      for(let i = 0; i < 17; i++){
        addition[i].score += (5 - score[i]);
      }
    }
    setInstrument(addition);
  }

  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <TitleGradient
            title="너의 악기는?"
            explain={
              "새로운 악기를 시도해보고 싶다면?\n당신에게 어울리는 악기를 추천해드립니다!"
            }
            link="/test/1"
            color="linear-gradient(91.48deg, #EFF2FF 0%, rgba(252, 225, 225, 0.31) 100%)"
          />
          <TestContent>
            <StyledQuestionBox>
              {questionId > 0 ? (
                <ProgressBox>
                  <p>{(questionId-1) * 5}%</p>
                  <progress value={questionId - 1} max={20}></progress>
                </ProgressBox>
              ) : (
                null
              )}
              <Question id={question.id} question={question.question} />
              {questionId === 0 ? (
                <StartSubTitle>
                  (* 이 테스트는 오로지 재미를 위해 만들어진 테스트입니다.^^)
                </StartSubTitle>
              ) : null}
            </StyledQuestionBox>
            <StyledAnswerBox>
              <Answer
                id={question.id}
                answer={question.answer.answer1}
                handleClickAnswer={() => {
                  if(questionId >= 1) {
                    setScore(question.question.instrument, 1);
                  }
                  setQuestionId(questionId + 1);
                }}
              />
              <Answer
                id={question.id}
                answer={question.answer.answer2}
                handleClickAnswer={() => {
                  if(questionId >= 1) {
                    setQuestionId(questionId + 1);
                    setScore(question.question.instrument, 2);
                  }
                  else navigate(`/etc`);
                }}
              />
            </StyledAnswerBox>
          </TestContent>
        </Contents>
      </Wrap>
      <Footer />
    </>
  );
};
const Wrap = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 202px);
  @media screen and (max-width: 767px){
    min-height: calc(100vh - 152px);
  }
`;
const Contents = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 767px){
    max-width: 400px;
  }
`;
const TestContent = styled.div`
  width: 100%;
  height: auto;
  padding-top: 100px;
  padding-bottom: 100px;

  @media screen and (max-width: 767px){
    padding-top: 80px;
  }
`;
const StyledQuestionBox = styled.div`
  width: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 767px){
    margin-bottom: 30px;
  }
`;
const ProgressBox = styled.div`
  width: 600px;
  
  margin: 0 auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  
  @media screen and (max-width: 767px){
    width: 90%;
  }

  & > p{
    flex-shrink: 0;
    width: 55px;
    text-align: start;
    margin-right: 10px;
    font-size: 20px;
    @media screen and (max-width: 767px){
      font-size: 16px;
      width: 45px;
    }
  }
  & > progress{
    width: 100%;
    height: 15px;
    appearance: none;

    &::-webkit-progress-bar{
      background-color: #FFFFFF;
      border-radius: 20px;
      border: 1px solid #cccccc;
      overflow: hidden;
    }
    &::-webkit-progress-value{
      background-color: #E6E0F8;
      animation: 3s linear slidein;
      
    }
  }
`;
const StartSubTitle = styled.p`
  margin-top: 5px;
  font-size: 12px;
  color: red;

  @media screen and (max-width: 767px){
    font-size: 11px;
  }
`;
const StyledAnswerBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 767px){
    flex-direction: column;
  }
`;

export default Test;
