import React, { useState } from "react";
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';

const TestResult = () => {
  const navigate = useNavigate();
  const IMAGE_URL = process.env.REACT_APP_KUPHIL_PUBLIC_URL;
  const testId = useParams().id;
  const code = useParams().code;

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
            <ResultImg src={`${IMAGE_URL}/images/testResult/${testId}/result-${code}.png`} />
            <RestartButton onClick={() => navigate(`../test/${testId}`)}>다시하기</RestartButton>
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
const ResultImg = styled.img`
  width: 500px;
  @media screen and (max-width: 767px){
    width: 90%;
  }
`;
const RestartButton = styled.button`
  width: 120px;
  height: 50px;
  margin: 0 auto;
  margin-top: 30px;
  border: none;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
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

export default TestResult;
