import React from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';
import ContentsBox from '../Components/ContentsBox';

const Etc = () => {
  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <TitleGradient
            title="Etc."
            explain={"개발자들이 이것저것 만들어본 즐길거리들입니다!\n[버그 제보 환영]"}
            link="/etc"
            color="linear-gradient(91.48deg, #EFF2FF 0%, rgba(252, 225, 225, 0.31) 100%)"
          />
          <Box>
            <ContentsBox
              title="너의 악기는?"
              src="test.jpg"
              info={
                "새로운 악기를 시도해보고 싶다면?\n당신에게 어울리는 악기를 추천해드립니다!"
              }
              link="/test" />
            <ContentsBox
              title="내 최애 OOO?!"
              src="worldcup.jpg"
              info={
                "생각만 해도 두근두근!\n신중하게 최애를 골라봐요!"
              }
              link="/worldcup" />
              <ContentsBox
              title="클래식 능력고사"
              src="exam.jpg"
              info={
                "당신은 클래식을 많이 아십니까?\n이곳에서 당신의 능력을 확인해보십시오!"
              }
              link="/exam" />
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
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  margin: 50px 0;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fill,minmax(280px, auto));
  @media screen and (max-width: 767px){
    margin: 20px 0;
    grid-gap: 20px;
  }
`;

export default Etc;
