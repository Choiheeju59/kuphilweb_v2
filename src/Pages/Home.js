import React from "react";
import styled from 'styled-components';
import Tips from "../Components/main/Tips";
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';

const Main = () => {
  return (
    <>
      <Wrap>{/* Footer를 항상 웹 하단에 두기 위해 min-height를 설정한 Wrap태그 */}
        <Header />
        <Tips />
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

export default Main;
