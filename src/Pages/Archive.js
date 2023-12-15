import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';
import PosterContent from "../Components/archive/PosterContent";
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
                        <PosterContent/>
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
    flex-direction: column;
    
    @media screen and (max-width: 767px){
      padding: 0 5%;
      margin-top: 30px;
    } 
`;

export default Archive;