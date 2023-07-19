import React, {useState} from "react";

import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';
import HistoryContent from "../Components/history/HistoryContent";
import TitleGradient from '../Components/TitleGradient';
import styled from 'styled-components';

//api 생성 후에는 map으로 받아서 뿌려준다.

const History = () => {
    return(
        <>
            <Wrap>
                <Header/>
                <Contents>
                    <TitleGradient
                            title="소개"
                            title2="연혁"
                            explain={"2003년 창단 이후의 활동을 살펴보세요."}
                            link="/introduce"
                            link2="/history"
                            color="linear-gradient(91.48deg, rgba(255, 224, 196, 0.44) 0%, #FFFBD9 100%)"
                    />
                    <MainContent>
                        <SelectStartYear>
                            <StartYearBtn><YearHref href="#2003">2003~</YearHref></StartYearBtn>
                            <StartYearBtn className="subYear"><YearHref href='#2005'>2005~</YearHref></StartYearBtn>
                            <StartYearBtn><YearHref href='#2010'>2010~</YearHref></StartYearBtn>
                            <StartYearBtn className="subYear"><YearHref href='#2015'>2015~</YearHref></StartYearBtn>
                            <StartYearBtn><YearHref href='#2020'>2020~</YearHref></StartYearBtn>
                        </SelectStartYear>
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

const SelectStartYear = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 70px auto;

  @media screen and (max-width: 767px){
    margin-top: 30px;
} 
`

const StartYearBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 20px;
  user-select: none;

  &:hover {
    color: gray;
    font-weight: bold;
  }

  @media screen and (max-width: 767px){
    ${props => props.className === "subYear" && `
        display: none;
    `};

    font-size: 16px;
}  
`

const YearHref = styled.a`
  all: unset; 
`

export default History;