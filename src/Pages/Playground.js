import React from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';

const Playground = () => {
  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <TitleGradient
            title="놀이터"
            explain={"개발자들이 이것저것 만들어본 즐길거리들입니다!\n[버그 제보 환영]"}
            link="/playground"
            color="linear-gradient(91.48deg, #EFF2FF 0%, rgba(252, 225, 225, 0.31) 100%)"
          />
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

export default Playground;
