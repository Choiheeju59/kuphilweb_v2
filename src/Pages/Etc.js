import React from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';
import ContentsBox from '../Components/ContentsBox';

const Etc = () => {
  const etcs = [
    {title: '너의 악기는?', src: 'test.jpg', link: '/test/1'},
    {title: '나의 최애는?(작곡가 ver.)', src: 'worldcup_composer.png', link: '/worldcup/1'},
    {title: '나의 최애는?(곡 ver.)', src: 'worldcup_symphony.png', link: '/worldcup/2'},
    {title: '제1회 클래식 능력고사', src: 'exam1.png', link: '/exam/1'},
    {title: '제2회 클래식 능력고사', src: 'exam2.png', link: '/exam/2'},
    {title: '제3회 클래식 능력고사', src: 'exam3.png', link: '/exam/3'},
    {title: 'Coming Soon', src: '', link: ''},
  ]
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
            {etcs.map((v, i) => 
              <ContentsBox
                key={i}
                title={v.title}
                src={v.src}
                link={v.link} />
            )}
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
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
  /* grid-template-columns: repeat(auto-fill,minmax(230px, auto)); */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 1024px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 767px){
    margin-top: 20px;
    grid-template-columns: 1fr 1fr;
  }
`;

export default Etc;
