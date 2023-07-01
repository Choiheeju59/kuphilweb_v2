import React from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';
import ContentsBox from '../Components/ContentsBox';

const Lab = () => {
  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <TitleGradient
            title="실험실"
            explain={"지금 실험 중인 기능들입니다!\n[다양한 의견 환영]"}
            link="/lab"
            color="linear-gradient(91.48deg, #EFF2FF 0%, rgba(252, 225, 225, 0.31) 100%)"
          />
          <Box>
            <ContentsBox
              title="건대맛집 추천"
              src="restaurant.jpg"
              info={
                "쿠웹 개발자들이 선정한 건대맛집"
              }
              link="/restaurant" />
            <ContentsBox
              title="튜닝 도우미"
              src="tuner.jpg"
              info={
                "A음 듣고 튜닝하는 법을 연습하고 싶다면?"
              }
              link="/tuner" />
          </Box>
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
const Box = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  @media screen and (max-width: 767px){
    margin: 10px 0;
  }
`;

export default Lab;
