import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';
import React from "react";
import TitleGradient from '../Components/TitleGradient';
import styled from 'styled-components';

const NotFoundPage = () => {
    return(
        <>
            <Wrap>
                <Header/>
                <Contents>
                    <TitleGradient
                            title="404"
                            explain="페이지를 찾을 수 없습니다."
                            color="linear-gradient(91.48deg, #FFD7CA 0%, rgba(255, 245, 224, 0.899375) 16.67%,
                            rgba(255, 253, 215, 0.773594) 32.81%, rgba(231, 255, 246, 0.633438) 48.96%, 
                            rgba(213, 245, 255, 0.522031) 65.1%, rgba(218, 224, 255, 0.31) 81.25%, 
                            rgba(241, 230, 255, 0.31) 97.92%)"
                    />
                    <MainContent>
                        <NotFoundPageImg style={{backgroundImage: `url(../../images/404.jpg)`}}></NotFoundPageImg>
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

const NotFoundPageImg = styled.div`
    width: 600px;
    height: 291px;
    background-size: cover;

    @media screen and (max-width: 767px){
        width: 200px;
        height: 97px;
      } 
`

export default NotFoundPage;