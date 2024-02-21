import { BiChevronLeft, BiChevronRight, BiMenu } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getConcertData } from "../../utils/api";
import styled from "styled-components";

const ConcertInfoContent = () => {
  const { num } = useParams();
  const navigate = useNavigate();
  const [concertData, setConcertData] = useState(null);

  const handleGoBack = () => {
    let page = getValue(num);
    navigate(`/archive/${page}`);
  };

  const getValue = (input) => {
    const ranges = [
        { min: 1, max: 5, value: 7 },
        { min: 6, max: 11, value: 6 },
        { min: 12, max: 17, value: 5 },
        { min: 18, max: 23, value: 4 },
        { min: 24, max: 29, value: 3 },
        { min: 30, max: 35, value: 2 },
        { min: 36, max: 41, value: 1 }
    ];

    for (const range of ranges) {
        if (input >= range.min && input <= range.max) {
            return range.value;
        }
    }

    return "입력 범위를 벗어났습니다.";
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getConcertData(num);
        setConcertData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    
  }, [num]);

const songtitleObject = concertData && concertData.songtitle;

const songtitleKeys = songtitleObject && Object.keys(songtitleObject);

const songtitleList = songtitleKeys && songtitleKeys.map((key, index) => (
  <div key={index}>
    <Content style={{fontSize: "0.9em"}}>{songtitleObject[key]}</Content>
  </div>
));

const composerObject = concertData && concertData.composer;

const composerKeys = composerObject && Object.keys(composerObject);

const composerList = composerKeys && composerKeys.map((key, index) => (
  <div key={index}>
    <Content style={{fontSize: "0.9em"}}>{composerObject[key]}</Content>
  </div>
));

const pairedList = songtitleList && songtitleList.map((songtitle, index) => (
  <div key={index}>
    {composerList && composerList[index]}
    {songtitle}
    <br/>
    <br/>
  </div>
));

  return (
    <>
      <div style={{display: "flex", marginBottom: "20px"}}>
          {num < 41 && <Button onClick={() => navigate(`/concert/${parseInt(num, 10) + 1}`)}><BiChevronLeft/><div>다음 연주회</div></Button>}
          <Button onClick={handleGoBack}>
            <BiMenu/><div>목록으로</div>
          </Button>
          {num > 1 && <Button onClick={() => navigate(`/concert/${parseInt(num, 10) - 1}`)}><BiChevronRight/><div>이전 연주회</div></Button>}
      </div>
      <Wrap>
        <PosterImg style={{backgroundImage: `url(../../../images/poster/poster_${num}.jpg)`}}/>
        <WrapInfo>
          <Title>제 {num}회 정기 연주회</Title>
          <WrapContent>
            <ContentTitle>장소 </ContentTitle>
            <Content>{concertData && concertData.place}</Content>
          </WrapContent>
          <WrapContent>
            <ContentTitle>일시 </ContentTitle>
            <Content>{concertData && concertData.date.slice(0, 10)}</Content>
          </WrapContent>
          <WrapContent>
            <ContentTitle>지휘 </ContentTitle>
            <Content>{concertData && concertData.conductor}</Content>
          </WrapContent>
          <ContentTitle style={{marginBottom: "5px"}}>프로그램</ContentTitle>
          <Content>{pairedList}</Content>
        </WrapInfo>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
`

const PosterImg = styled.div`
    width: 300px;
    height: 420px;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 767px) {
      width: 200px;
      height: 280px;
    }
`

const WrapInfo = styled.div`
    text-align: left;
    width: 375px;
    height: auto;

    @media screen and (max-width: 767px) {
      width: 250px;
      height: auto;
    }
`

const Title = styled.p`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 20px;

    @media screen and (max-width: 767px) {
      font-size: 1.3rem;
      text-align: center;
    }
`

const WrapContent = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 10px;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
`

const ContentTitle = styled.p`
  font-weight: bold;

  @media screen and (max-width: 767px) {
    text-align: center;
    font-size: 0.8rem;
  }
`

const Content = styled.p`
  @media screen and (max-width: 767px) {
    text-align: center;
    font-size: 0.8rem;
  }
`

const Button = styled.div`
  display: flex;
  cursor: pointer;
  margin: 0 2px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
`

export default ConcertInfoContent;