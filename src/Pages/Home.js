import React from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import Tip from '../Components/main/Tip';
import Sns from '../Components/main/Sns';
import Youtube from '../Components/main/Youtube';
import Cooperate from '../Components/main/Cooperate';
import Recruitment from '../Components/main/Recruitment';
import Etc from '../Components/main/Etc';
import Weather from '../Components/main/Weather';
import Slide from '../Components/main/Slide';

const Main = () => {
  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <Floor>
            <ResponsiveBox $height='30' $mheight='40'>
              <BoxContainer width={'100'} top={true} left={true} mtop={0} padding={'30'} mpadding={'40'}>
                <Box>
                  <Slide />
                </Box>
              </BoxContainer>
            </ResponsiveBox>
          </Floor>
          <Floor>
            <ResponsiveBox $height='40' $mheight='158'>
              <BoxContainer width={'57'} top={true} left={true} mtop={0} padding={'7'} mpadding={'25'}>
                <Box>
                  <Weather />
                </Box>
              </BoxContainer>
              <BoxContainer width={'57'} bottom={true} left={true} mtop={29} padding={'30'} mpadding={'55'}>
                <Box>
                  <Recruitment />
                </Box>
              </BoxContainer>
              <BoxContainer width={'40'} top={true} right={true} mtop={87} padding={'40'} mpadding={'70'}>
                <Box>
                  <Etc />
                </Box>
              </BoxContainer>
            </ResponsiveBox>
          </Floor>
          <Floor>
            <ResponsiveBox $height='45' $mheight='56.2'>
              <BoxContainer width={'100'} top={true} left={true} mtop={0} padding={'45'} mpadding={'56.2'}>
                <Box>
                  <Youtube />
                </Box>
              </BoxContainer>
            </ResponsiveBox>
          </Floor>
          <Floor>
            <ResponsiveBox $height='14' $mheight='64'>
              <BoxContainer width={'60'} top={true} left={true} mtop={0} padding={'14'} mpadding={'30'}>
                <Box>
                  <Cooperate />
                </Box>
              </BoxContainer>
              <BoxContainer width={'37'} top={true} right={true} mtop={34} padding={'14'} mpadding={'30'}>
                <Box>
                  <Sns />
                </Box>
              </BoxContainer>
            </ResponsiveBox>
          </Floor>
          <Floor>
            <ResponsiveBox $height='20' $mheight='40'>
              <BoxContainer width={'100'} top={true} left={true} mtop={0} padding={'20'} mpadding={'40'}>
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
  @media screen and (max-width: 767px){
    margin-top: 4%;
    &:first-child{
      margin-top: 3%;
    }
  }
`;

const ResponsiveBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: ${props => props.$height}%;
  @media screen and (max-width: 767px){
    padding-bottom: ${props => props.$mheight}%;
  }
`;
const BoxContainer = styled.div`
  position: absolute;
  width: ${props => props.width}%;
  padding-bottom: ${props => props.padding}%;
  top: ${props => props.top ? '0' : null};
  bottom: ${props => props.bottom ? '0' : null};
  left: ${props => props.left ? '0' : null};
  right: ${props => props.right ? '0' : null};
  @media screen and (max-width: 767px){
    width: 100%;
    padding-bottom: ${props => props.mpadding}%;
    margin-top: ${props => props.mtop}%;
    top: unset;
    bottom: unset;
    left: unset;
    right: unset;
  }
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
