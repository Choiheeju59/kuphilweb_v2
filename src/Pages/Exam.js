import React from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';
import { useNavigate } from 'react-router-dom';

export const ExamListBox = ({ id }) => {
  const navigation = useNavigate();

  const  startExam = (id) => {
    navigation(`/exam/` + id);
  }
  return (
    <StyledExamBox>
      <ExamTitle>제{id}회 클래식 능력고사</ExamTitle>
      <ExamGo onClick={() => startExam(id)}>시험보기</ExamGo>
    </StyledExamBox>
  );
}
const StyledExamBox = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;
const ExamTitle = styled.p`
  font-size: 18px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: 767px){
    font-size: 16px;
  }
`;
const ExamGo = styled.p`
  font-size: 18px;
  padding: 20px;
  background-color: #EFF2FF;
  box-sizing: border-box;
  &:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 767px){
    font-size: 16px;
  }
`;


const Exam = () => {

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
            <ExamListBox id={1} />
            <ExamListBox id={2} />
            <ExamListBox id={3} />
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
  padding-top: 70px;
  padding-bottom: 70px;

  @media screen and (max-width: 767px){
    padding-top: 50px;
  }
`;


export default Exam;
