import React from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';

const Test = () => {
  return (
    <>
      {/* footer 하단 유지를 위한 min-height설정한 Wrap */}
      <Wrap>
        <Header />
        {/* width를 90%로 설정하고, max-width를 설정한 Contents */}
        <Contents>
          {/* 소개 페이지 타이틀 */}
          <TitleGradient
            title="블라블라"
            explain={"소개설명블라블라\n블라블라"}
            link="/블라블라"
            color="linear-gradient(블라블라)"
            title2="연혁"
            link2="/history"
          />

          {/* 연혁 페이지 타이틀 */}
          <TitleGradient
            title="블라블라"
            explain={"연혁설명블라블라\n블라블라"}
            link="/블라블라"
            color="linear-gradient(블라블라)"
            title2="연혁"
            link2="/history"
          />

          {/* 소개, 연혁을 제외한 모든 페이지 타이틀 */}
          <TitleGradient
            title="블라블라"
            explain={"블라블라\n블라블라"}
            link="/블라블라"
            color="linear-gradient(블라블라)"
          />

          {/* 여기에 실질적인 페이지 내용들 추가 */}
          {/* 여기에 실질적인 페이지 내용들 추가 */}
          {/* 여기에 실질적인 페이지 내용들 추가 */}
          {/* 여기에 실질적인 페이지 내용들 추가 */}
          {/* 여기에 실질적인 페이지 내용들 추가 */}

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

export default Test;
