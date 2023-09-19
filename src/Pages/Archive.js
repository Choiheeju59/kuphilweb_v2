import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';
import PosterContent from '../Components/archive/PosterContent';
import React from "react";
import TitleGradient from '../Components/TitleGradient';
import styled from 'styled-components';

const Archive = () => {
    return(
        <>
            <Wrap>
                <Header/>
                <Contents>
                    <TitleGradient
                        title="아카이브"
                        explain="KUPhil의 역대 연주회 정보를 모아놓은 공간입니다."
                        color="linear-gradient(91.48deg, #ECFDE5 0%, rgba(189, 222, 236, 0.31) 100%)"
                    />
                    <MainContent>
                        <PrevBtn/>
                        <PosterContainer>
                            <PosterContent/>
                            <PosterContent/>
                            <PosterContent/>
                            <PosterContent/> 
                            <PosterContent/>
                            <PosterContent/>
                        </PosterContainer>
                        <NextBtn/>
                    </MainContent>
                </Contents>
            </Wrap>
            <Footer/>
        </>
    )
}

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

const MainContent = styled.div`
    width: 84%;
    padding: 0 8%;
    margin: 70px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 767px){
      padding: 0 5%;
      margin-top: 30px;
    } 
`;

const PrevBtn = styled.div`
    cursor: pointer;
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-top: 3px solid #222;
    border-right: 3px solid #222;
    transform: rotate(225deg);
    padding: 20px;

    @media screen and (max-width: 767px){
        width: 2px;
        height: 2px;
        padding: 10px;
    }
`
const NextBtn = styled.div`
    cursor: pointer;
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-top: 3px solid #222;
    border-right: 3px solid #222;
    transform: rotate(45deg);
    padding: 20px;

    @media screen and (max-width: 767px){
        width: 2px;
        height: 2px;
        padding: 10px;
    }
`

const PosterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(2, 400px);
  gap: 30px 40px;
  margin: 0 20px;

  @media screen and (max-width: 767px){
    grid-template-columns: repeat(1, 120px);
    grid-template-rows: repeat(6, 240px);
  }
`

export default Archive;