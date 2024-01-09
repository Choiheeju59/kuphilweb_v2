import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getWorldcupResultData, getWorldcupResultDataRe } from '../../utils/api';

export const Statistics = (props) => {
  const { data, index, statisticCount } = props;
  return (
    <StatisticBox>
      <p>{index + 1}.</p>
      <div>
        <StatisticItemTitle>
          <p>{data.title}</p>
          <p>{data.semiTitle}</p>
        </StatisticItemTitle>
        <StatisticItemProgress>
          <p>{(data.choice * 100 / statisticCount).toFixed(2)}%</p>
          <progress value={data.choice} max={statisticCount}></progress>
        </StatisticItemProgress>  
      </div>
      <img src={data.img} alt='이미지' />
    </StatisticBox>
  );
}
const StatisticBox = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  & > p{
    margin-bottom: 10px;
    font-size: 16px;
    width: 25px;
    text-align: start;
    flex-shrink: 0;
  }
  & > div{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
  & > img{
    flex-shrink: 0;
    width: 100px;
    height: 120px;
    object-fit: cover;
    border-radius: 15px;
  }
  @media screen and (max-width: 767px){
    & > p{
      font-size: 14px;
      width: 20px;
    }
  }
`;
const StatisticItemTitle = styled.div`
  text-align: start;
  font-size: 14px;
  & > p:first-child{
    font-size: 16px;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 767px){
    font-size: 12px;
    & > p:first-child{
      font-size: 14px;
    }
  }
`;
const StatisticItemProgress = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-top: 15px;
  & progress{
    margin-top: 5px;
    width: 80%;
    height: 10px;
    appearance: none;
    &::-webkit-progress-bar{
      background-color: #FFFFFF;
      border-radius: 20px;
      border: 1px solid #cccccc;
      overflow: hidden;
    }
    &::-webkit-progress-value{
      background-color: #cbbef3;
    }
  }
`;


const WorldcupResult = (props) => {
  const { gameId, data } = props;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [statistic, setStatistic] = useState([]);
  const [statisticCount, setStatisticCount] = useState(0);

  useEffect(() => {
    getResult();
  }, []);
  
  const getResult = async () => {
    getWorldcupResultData(data.id, gameId)
      .then((res) => {
        setStatistic(res.data);
        setStatisticCount(res.count); //count들의 합
        loadingClear();
      })
      .catch((err) => {
        console.log(err);
        loadingClear();
      })
  }

  const getResultRe = async () => {
    getWorldcupResultDataRe(gameId)
      .then((res) => {
        setStatistic(res.data);
        setStatisticCount(res.count);
        loadingClear();
      })
      .catch((err) => {
        console.log(err);
        // 임시 데이터. 추후 삭제
        let _statistic = [
          {id:4, title:"Pyotr Ilyich Tchaikovsky", semiTitle:"차이콥스키", img:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Tchaikovsky_by_Reutlinger.jpg", choice:500},
          {id:2, title:"Nikolai Rimsky-Korsakov", semiTitle:"림스키코르사코프", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Nikolay_A_Rimsky_Korsakov_1897.jpg/250px-Nikolay_A_Rimsky_Korsakov_1897.jpg", choice:4},
          {id:1, title:"Wolfgang Amadeus Mozart", semiTitle:"모차르트", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wolfgang-amadeus-mozart_1.jpg/800px-Wolfgang-amadeus-mozart_1.jpg", choice:3},
          {id:5, title:"Johann Nepomuk Hummel", semiTitle:"홈멜", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/JNHummel_2.jpg/1024px-JNHummel_2.jpg", choice:2},
          {id:3, title:"Max Bruch", semiTitle:"브루흐", img:"https://upload.wikimedia.org/wikipedia/commons/f/f5/Max_bruch.jpg", choice:1}
        ];
        setStatistic(_statistic);
        setStatisticCount(510);
        loadingClear();
      })
  }

  const loadingClear = () => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }

  return (
    <StyledResult>
      {loading ? (
        <Loading>
          <img src={process.env.REACT_APP_PUBLIC_URL + '/images/purple_loading.svg'} />
        </Loading>
      ) : (
        <>
          <ResultArea>
            <div>
              <MainSentence>{data.title}</MainSentence>
              <SubSentence>{data.semiTitle}</SubSentence>
              <ImgDiv>
                <ImgData src={data.img} alt={data.title} />
              </ImgDiv>
            </div>
            <ButtonArea>
              <SelectRound onClick={() => window.location.reload()}>다시하기</SelectRound>
              <SelectRound onClick={() => navigate(-1)}>종료하기</SelectRound>
            </ButtonArea>
          </ResultArea>
          <StatisticArea>
            {statistic.length > 0 ? (
              <>
                {statistic.map((v, i) => (
                  <Statistics key={i} data={v} index={i} statisticCount={statisticCount} />
                ))}
              </>
            ) : (
              <>
                <button onClick={() => {
                    setLoading(true);
                    getResultRe()
                }}>Reload Result</button>
              </>
            )}
          </StatisticArea>
        </>
      )}
    </StyledResult>
  );
}

const StyledResult = styled.div`
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
`;
const Loading = styled.div`
  width: 100%;
  text-align: center;
  padding: 50px 0;
`;
const ResultArea = styled.div`
  width: 350px;
  max-width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;
const MainSentence = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px){
    font-size: 20px;
  }
`;
const SubSentence = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;
const ImgDiv = styled.div`
  width: 100%;
  padding-top: 120%;
  position: relative;
  margin-bottom: 10px;

  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
`;
const ImgData = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

const ButtonArea = styled.div`
  width: 100%;
`;

const SelectRound = styled.div`
  width: 100%;
  margin: 15px auto;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  &:hover{
    cursor: pointer;
    background-color: #f5f5f5;
  }
`;

const StatisticArea = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export default WorldcupResult