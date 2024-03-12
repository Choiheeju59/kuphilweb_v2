import React, { useEffect } from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';
import Sns from '../Components/Sns';

const Cooperate = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  },[])
  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <TitleGradient
            title="모집"
            explain={"쿠필과 함께할 수 있는 다양한 제안들을 기다립니다.\n후원을 원하시면 하단의 sns를 통해 연락주세요!"}
            link="/recruitment"
            color="linear-gradient(91.48deg, #E5FAFD 0%, rgba(189, 193, 236, 0.31) 100%)"
            title2="제휴"
            link2="/cooperate"
          />
          <Image>
            <img src={process.env.REACT_APP_KUPHIL_PUBLIC_URL + '/images/cooperate/cooperation1.jpeg'} />
            <img src={process.env.REACT_APP_KUPHIL_PUBLIC_URL + '/images/cooperate/cooperation2.jpeg'} />
            <img src={process.env.REACT_APP_KUPHIL_PUBLIC_URL + '/images/cooperate/cooperation3.jpeg'} />
          </Image>
          <Sns />
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

const Image = styled.div`
  width: 100%;
  margin-top: 40px;
  & > img {
    
    margin: 0 auto;
  }
  & > img:first-child {
    width: 80%;
    display: block;
  }
  & > img:nth-child(2) {
    display: none;
  }
  & > img:nth-child(3) {
    display: none;
  }
  @media screen and (max-width: 1023px) {
    & > img:first-child {
      width: 90%;
    }
  }
  @media screen and (max-width: 767px) {
    margin-top: 20px;
    & > img:first-child {
      display: none;
    }
    & > img:nth-child(2) {
      width: 100%;
      display: block;
    }
    & > img:nth-child(3) {
      display: none;
    }
  }
  @media screen and (max-width: 468px) {
    & > img:first-child {
      display: none;
    }
    & > img:nth-child(2) {
      display: none;
    }
    & > img:nth-child(3) {
      width: 60%;
      display: block;
    }
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

export default Cooperate;
