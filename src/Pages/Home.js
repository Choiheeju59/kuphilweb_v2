import React from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import Tip from '../Components/main/Tip';
import Sns from '../Components/main/Sns';
import Youtube from '../Components/main/Youtube';
import Cooperate from '../Components/main/Cooperate';

const Main = () => {
  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <Floor>
            <ResponsiveBox $height='30%'>
              <BoxContainer style={{top: '0', left: '0', width: '100%', paddingBottom: '30%'}}>
                <Box>

                </Box>
              </BoxContainer>
            </ResponsiveBox>
          </Floor>
          <Floor>
            <ResponsiveBox $height='40%'>
              <BoxContainer style={{top: '0', left: '0', width: '57%', paddingBottom: '7%'}}>
                <Box>

                </Box>
              </BoxContainer>
              <BoxContainer style={{bottom: '0', left: '0', width: '57%', paddingBottom: '30%'}}>
                <Box>

                </Box>
              </BoxContainer>
              <BoxContainer style={{top: '0', right: '0', width: '40%', paddingBottom: '40%'}}>
                <Box>

                </Box>
              </BoxContainer>
            </ResponsiveBox>
          </Floor>
          <Floor>
            <ResponsiveBox $height='45%'>
              <BoxContainer style={{top: '0', left: '0', width: '100%', paddingBottom: '45%'}}>
                <Box>
                  <Youtube />
                </Box>
              </BoxContainer>
            </ResponsiveBox>
          </Floor>
          <Floor>
            <ResponsiveBox $height='14%'>
              <BoxContainer style={{top: '0', left: '0', width: '60%', paddingBottom: '14%'}}>
                <Box>
                  <Cooperate />
                </Box>
              </BoxContainer>
              <BoxContainer style={{top: '0', right: '0', width: '37%', paddingBottom: '14%'}}>
                <Box>
                  <Sns />
                </Box>
              </BoxContainer>
            </ResponsiveBox>
          </Floor>
          <Floor>
            <ResponsiveBox $height='20%'>
              <BoxContainer style={{top: '0', left: '0', width: '100%', paddingBottom: '20%'}}>
                <Box>
                  <Tip />
                </Box>
              </BoxContainer>
            </ResponsiveBox>
          </Floor>
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
const Floor = styled.div`
  width: 100%;
  margin-top: 3%;
  &:last-child{
    margin-bottom: 3%;
  }
`;

const ResponsiveBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: ${props => props.$height};
`;
const BoxContainer = styled.div`
  position: absolute;
`;
const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
`;

export default Main;
