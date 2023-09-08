import React from "react";
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
            color="linear-gradient(91.48deg, #FFF2E7 0%, rgba(254, 204, 190, 0.57) 100%)"
            title2="제휴"
            link2="/cooperate"
          />
          <Poster src={process.env.PUBLIC_URL + '/images/recruitment/poster.jpg'} />
          <SnsArea>
            <Sns />
          </SnsArea>
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
const Poster = styled.img`
  margin-top: 50px;
  width: 60%;
  border-radius: 10px;
  box-shadow: 0px 0px 2px rgb(0,0,0,0.25);
  @media screen and (max-width: 767px){
    margin-top: 10px;
    width: 100%;
  }
`;
const SnsArea = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 767px){
    margin-bottom: 10px;
  }
`;

export default Recruitment;
