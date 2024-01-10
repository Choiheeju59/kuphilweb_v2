import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';
import HistoryContent from "../Components/history/HistoryContent";
import React from "react";
import TitleGradient from '../Components/TitleGradient';
import styled from 'styled-components';

const History = () => {
    return(
        <>
            <Wrap>
                <Header/>
                <Contents>
                    <TitleGradient
                            title="연혁"
                            explain={"2003년 창단 이후의 활동을 살펴보세요."}
                            link="/history"
                            color="linear-gradient(91.48deg, #FFFBD9 0%, #ECFDE5 100%)"
                    />
                    <MainContent>
                        <HistoryContent/>
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

    @media screen and (max-width: 767px){
      padding: 0 5%;
      margin-top: 30px;
  } 
`;


export default History;