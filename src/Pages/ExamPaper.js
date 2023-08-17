import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';

export const ExamQuestion = ({ question, checkArr, setCheckArr }) => {
  const checkNum = (id, num) => {
    let _checkArr = [...checkArr];
    _checkArr[id - 1] = num;
    setCheckArr(_checkArr);
  }
  return (
    <StyledExamQuestion>
      <Question>{question.id}. {question.question}</Question>
      <AnswerUl>
        <AnswerLi onClick={() => checkNum(question.id, 1)} >
          <AnswerLiNum checked={checkArr[question.id - 1] === 1}>①</AnswerLiNum>
          <AnswerStr checked={checkArr[question.id - 1] === 1}>{question.answer[0]}</AnswerStr>
        </AnswerLi>
        <AnswerLi onClick={() => checkNum(question.id, 2)}>
          <AnswerLiNum checked={checkArr[question.id - 1] === 2}>②</AnswerLiNum>
          <AnswerStr checked={checkArr[question.id - 1] === 2}>{question.answer[1]}</AnswerStr>
        </AnswerLi>
        <AnswerLi onClick={() => checkNum(question.id, 3)}>
          <AnswerLiNum checked={checkArr[question.id - 1] === 3}>③</AnswerLiNum>
          <AnswerStr checked={checkArr[question.id - 1] === 3}>{question.answer[2]}</AnswerStr>
        </AnswerLi>
        <AnswerLi onClick={() => checkNum(question.id, 4)}>
          <AnswerLiNum checked={checkArr[question.id - 1] === 4}>④</AnswerLiNum>
          <AnswerStr checked={checkArr[question.id - 1] === 4}>{question.answer[3]}</AnswerStr>
        </AnswerLi>
      </AnswerUl>
    </StyledExamQuestion>
  );
}
const StyledExamQuestion = styled.div`
  width: 90%;
  margin: 10px auto;
  margin-bottom: 100px;
  @media screen and (max-width: 767px){
    width: 100%;
    margin-bottom: 70px;
  }
`;
const Question = styled.p`
  font-size: 20px;
  text-align: start;
  margin-bottom: 30px;
  @media screen and (max-width: 767px){
    font-size: 18px;
  }
`;
const AnswerUl = styled.ul`
  width: 100%;
  text-align: start;
`;
const AnswerLi = styled.li`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  
  & > p:hover{
    cursor: pointer;
  }
  
`;
const AnswerLiNum = styled.p`
  padding-right: 10px;
  color: ${props => props.checked ? 'red' : 'black'};
  @media screen and (max-width: 767px){
    padding-right: 5px;
  }
`;
const AnswerStr = styled.p`
  color: ${props => props.checked ? 'red' : 'black'};
`;

const ExamPaper = () => {
  const [print, setPrint] = useState(null);
  const [checkArr, setCheckArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const params = useParams();

  useEffect(() => {
    let question = [];
    let _print = [];
    for(let i = 1; i <= 10; i++){
      question = {
        id: i,
        question: '질문질문질문질문질문질문질문질문질문질문',
        answer: [
          '답1답1답1답1답1답1',
          '답2답2답2답2답2답2',
          '답3답3답3답3답3답3',
          '답4답4답4답4답4답4',
        ],
      };
      _print.push(<ExamQuestion key={i} question={question} checkArr={checkArr} setCheckArr={setCheckArr} />)
    }
    setPrint(_print);
  },[params, checkArr])

  const submitExam = () => {
    if(checkArr.indexOf(0) > -1){
      if(window.confirm('아직 풀지 않은 문제가 있어요 :(\n그래도 채점할까요?')){
        // 채점한 페이지로 이동
        console.log('채점');
      } else {
        console.log('문제 더 풀 예정');
      }
    } else {
      if(window.confirm('모든 문제를 풀었어요 :)\n채점할까요?')){
        // 채점한 페이지로 이동
        console.log('채점');
      } else {
        console.log('문제 더 풀 예정');
      }
    }
  }

  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <TitleGradient
            title="클래식 능력고사"
            explain={
              "당신은 클래식을 많이 아십니까?\n이곳에서 당신의 능력을 확인해보십시오!"
            }
            link="/exam"
            color="linear-gradient(91.48deg, #EFF2FF 0%, rgba(252, 225, 225, 0.31) 100%)"
          />
          <ExamContent>
            <ExamTitle>[ 제{params.id}회 클래식 능력고사 ]</ExamTitle>
            {print}
            <ExamSubmit>
              <SubmitBtn onClick={submitExam}>제출하기 {'>'}</SubmitBtn>
            </ExamSubmit>
          </ExamContent>
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
const ExamContent = styled.div`
  width: 100%;
  height: auto;
  padding-top: 80px;
  padding-bottom: 100px;

  @media screen and (max-width: 767px){
    padding-top: 60px;
  }
`;
const ExamTitle = styled.p`
  font-size: 24px;
  margin-bottom: 70px;
  @media screen and (max-width: 767px){
    font-size: 18px;
    margin-bottom: 50px;
  }
`;
const ExamSubmit = styled.div`
  margin-top: 70px;
`;
const SubmitBtn = styled.button`
  font-size: 16px;
  background-color: #EFF2FF;
  padding: 15px 25px;
  border-radius: 15px;
  border: none;
  color: black;
  &:hover{
    cursor: pointer;
  }
`;

export default ExamPaper;
