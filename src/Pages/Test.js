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
        instrument: {
          conductor: 0,
          firstViolin: 0,
          secondViolin: 0,
          viola: 0,
        },
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

  useEffect(()=>{
    if(0 < questionId && questionId <= 20){
      setQuestion({
        id: questionId,
        question:{
          text: questionId + '번째 질문',
          instrument: {
            conductor: 0,
            firstViolin: 0,
            secondViolin: 0,
            viola: 0,
          },
        },
        answer:{
          answer1: '답변1',
          answer2: '답변2',
        },
      })
    } else if(questionId >= 20){
      setInstrument([...instrument].sort((a, b) => b.score - a.score));
      setQuestion(null);
    }
  },[questionId]);

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
            link="/test"
            color="linear-gradient(91.48deg, #EFF2FF 0%, rgba(252, 225, 225, 0.31) 100%)"
          />
          <TestContent>
            {questionId <= 20 ? (
              <>
                <StyledQuestionBox>
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
                    setQuestionId={() => setQuestionId(questionId + 1)}
                  />
                  <Answer
                    id={question.id}
                    answer={question.answer.answer2}
                    setQuestionId={() => {
                      if(questionId >= 1) setQuestionId(questionId + 1);
                      else navigate(-1);
                    }}
                  />
                </StyledAnswerBox>
              </>
            ) : (
              <>
                <img src={'./images/testResult/' + instrument[0].id + '.jpg'} />
                <RestartButton onClick={() => window.location.reload()}>다시하기</RestartButton>
              </>
            )}
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
const RestartButton = styled.button`
  width: 120px;
  height: 50px;
  margin: 10px auto;
  border: none;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    cursor: pointer;
    background-color: #f5f5f5;
  }

  @media screen and (max-width: 767px){
    width: 100px;
    height: 40px;
  }
`;

export default Test;
