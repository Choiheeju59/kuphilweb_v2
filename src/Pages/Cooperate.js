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
            color="linear-gradient(91.48deg, #FFF2E7 0%, rgba(254, 204, 190, 0.57) 100%)"
            title2="제휴"
            link2="/cooperate"
          />
          <Image>
            <img src={process.env.PUBLIC_URL + '/images/cooperate/first.jpg'} />
            <img src={process.env.PUBLIC_URL + '/images/cooperate/second.jpg'} />
            <img src={process.env.PUBLIC_URL + '/images/cooperate/third.jpg'} />
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
  & > img {
    width: 100%;
  }
  & > img:first-child {
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
      display: none;
    }
    & > img:nth-child(2) {
      display: block;
    }
    & > img:nth-child(3) {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    & > img:first-child {
      display: none;
    }
    & > img:nth-child(2) {
      display: none;
    }
    & > img:nth-child(3) {
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
