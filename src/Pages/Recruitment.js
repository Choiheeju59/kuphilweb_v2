import React, { useEffect } from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';
import Sns from '../Components/Sns';

const Recruitment = () => {

  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <TitleGradient
            title="모집"
            explain={"KUPhil 입단 안내 페이지입니다.\n기타 문의는 안내 하단의 SNS계정을 통해 연락해 주세요."}
            link="/recruitment"
            color="linear-gradient(91.48deg, #E5FAFD 0%, rgba(189, 193, 236, 0.31) 100%)"
            title2="제휴"
            link2="/cooperate"
          />
          <Sns />
          <PosterArea>
            <Poster src={process.env.REACT_APP_KUPHIL_PUBLIC_URL + '/images/recruitment/poster.jpg'} alt='KUPHIL 입단 안내' />
          </PosterArea>
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
const PosterArea = styled.div`
  width: 60%;
  padding-top: 85%;
  margin: 0 auto;
  position: relative;
  margin-bottom: 50px;
  @media screen and (max-width: 767px){
    width: 100%;
    padding-top: 141%;
  }
`;
const Poster = styled.img`
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 2px rgb(0,0,0,0.25);
  text-align: start;
`;

export default Recruitment;
