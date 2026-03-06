import { BiChevronLeft, BiChevronRight, BiMenu } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getConcertData } from "../../utils/api";
import styled from "styled-components";
import { useScrollTopAlways } from "../../hooks/useScrollTop";

const ConcertInfoContent = () => {
  const { num } = useParams();
  const navigate = useNavigate();
  const [concertData, setConcertData] = useState(null);
  const [isValidNum, setIsValidNum] = useState(true);
  const totalConcerts = 46;
  const perPage = 6;

  useScrollTopAlways();

  const handleGoBack = () => {
    let page = getValue(num);
    navigate(`/archive/${page}`);
  };

  const getValue = (input) => {
    if (input < 1 || input > totalConcerts) return;

    const reversedNum = totalConcerts - input;
    const page = Math.floor(reversedNum / perPage) + 1;

    return page;
  };

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

  useEffect(() => {
    const parsedNum = parseInt(num, 10);
    const isValid =
      !isNaN(parsedNum) && parsedNum >= 1 && parsedNum <= totalConcerts;
    setIsValidNum(isValid);
  }, [num]);

  const songtitleObject = concertData && concertData.songtitle;

  const songtitleKeys = songtitleObject && Object.keys(songtitleObject);

  const songtitleList =
    songtitleKeys &&
    songtitleKeys.map((key, index) => (
      <div key={`ST${index}`}>
        <Content style={{ fontSize: "0.9em", color: "#444444" }}>
          {songtitleObject[key]}
        </Content>
      </div>
    ));

  const composerObject = concertData && concertData.composer;

  const composerKeys = composerObject && Object.keys(composerObject);

  const composerList =
    composerKeys &&
    composerKeys.map((key, index) => (
      <div key={`C${index}`}>
        <Content style={{ fontSize: "0.9em" }}>{composerObject[key]}</Content>
      </div>
    ));

  const pairedList =
    songtitleList &&
    songtitleList.map((songtitle, index) => (
      <div key={`P${index}`}>
        {composerList && composerList[index]}
        {songtitle}
        <br />
        <br />
      </div>
    ));

  return (
    <>
      {isValidNum ? (
        <>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            {num < totalConcerts && (
              <Button
                onClick={() => navigate(`/concert/${parseInt(num, 10) + 1}`)}
              >
                <BiChevronLeft />
                <div>다음 연주회</div>
              </Button>
            )}
            <Button onClick={handleGoBack}>
              <BiMenu />
              <div>목록으로</div>
            </Button>
            {num > 1 && (
              <Button
                onClick={() => navigate(`/concert/${parseInt(num, 10) - 1}`)}
              >
                <BiChevronRight />
                <div>이전 연주회</div>
              </Button>
            )}
          </div>
          <Wrap>
            <PosterImg
              style={{
                backgroundImage: `url(../../../images/poster/poster_${num}.jpg)`,
              }}
            />
            <WrapInfo>
              <Title>제{num}회 정기 연주회</Title>
              <WrapContent>
                <ContentTitle>장소 </ContentTitle>
                <Content>{concertData && concertData.place}</Content>
              </WrapContent>
              <WrapContent>
                <ContentTitle>일시 </ContentTitle>
                <Content>
                  {concertData && concertData.date.slice(0, 10)}
                </Content>
              </WrapContent>
              <WrapContent>
                <ContentTitle>지휘 </ContentTitle>
                <Content>{concertData && concertData.conductor}</Content>
              </WrapContent>
              <Divider />
              <ContentTitle style={{ marginBottom: "5px" }}>
                프로그램
              </ContentTitle>
              <Content>{pairedList}</Content>
            </WrapInfo>
          </Wrap>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const PosterImg = styled.div`
  width: 300px;
  height: 420px;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 767px) {
    width: 200px;
    height: 280px;
  }
`;

const WrapInfo = styled.div`
  text-align: left;
  width: 375px;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 250px;
    height: auto;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;

const WrapContent = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentTitle = styled.div`
  font-weight: bold;

  @media screen and (max-width: 767px) {
    text-align: center;
    font-size: 0.8rem;
  }
`;

const Content = styled.div`
  @media screen and (max-width: 767px) {
    text-align: center;
    font-size: 0.8rem;
  }
`;

const Button = styled.div`
  display: flex;
  cursor: pointer;
  margin: 0 2px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;

  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #aaaaaa;
  margin-bottom: 7px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export default ConcertInfoContent;
