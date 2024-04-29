import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { postQuizResultData, getQuizResultData } from "../../utils/api"

const QuizGame = (props) => {
  const { imported, quizId } = props;
  const navigate = useNavigate();
  const [quizOrder, setQuizOrder] = useState(0);
  const [quizOption, setQuizOption] = useState([]);
  const [result, setResult] = useState({
    level: 0,
    name: '',
    percent: 0,
  });
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(0);
  const LevelName = [
    ['클래식 병아리',
    '클래식 입문자',
    '클래식 좀 들어본 사람',
    '클래식 고인물'],
    ['클래식 마니아',
    '클래식 덕후',
    '클래식 마스터',
    '인간 클래식']
  ];

  const toNum = (n) => Math.floor((((n - 25) % 8) + 2) / 2);
  const checkAnswer = (answer) => {
    let str = "";
    if(quizId === 1) str = process.env.REACT_APP_QUIZ_1;
    else str = process.env.REACT_APP_QUIZ_2;
    let num = str.charCodeAt(quizOrder - 1);

    // 맞으면
    if(toNum(num) === answer || quizOrder === 0){
      if(quizOrder === 30){
        setResult((prev) => {
          return {
            ...prev, 
            level: 30, 
            name: LevelName[quizId - 1][3],
          }
        });
        postResult(0);
        setQuizOption([]);
        setQuizOrder(-1);
      } else{
        setQuizOption([...imported[quizOrder]]);
        setQuizOrder((prev) => prev + 1);
      }
    }
    // 다시하기
    else if(quizOrder === -1){
      setLoading(true);
      setQuizOption([...imported[0]]);
      setQuizOrder(1);
    }
    // 틀리면
    else{
      setResult((prev) => {
        return {
          ...prev, 
          level: quizOrder - 1, 
          name: LevelName[quizId - 1][Math.floor((quizOrder - 1) / 10)] || LevelName[0],
        }
      })
      postResult();
      setQuizOption([]);
      setQuizOrder(-1);
    }
  };

  const postResult = async (temp = -1) => {
    postQuizResultData(quizId, quizOrder + temp)
      .then(() => {
        setErr(0);
        getResult();
    })
    .catch((err) => {
        console.log(err);
        setErr(1);
        loadingClear();
      })
  }
  const getResult = async () => {
    getQuizResultData(quizId, quizOrder - 1)
      .then((res) => {
        setErr(0);
        console.log(res.data);
        setResult((prev) => {
          return {
            ...prev,
            percent: (res.data.subtotal / res.data.total * 100).toFixed(2),
          }
        })
        loadingClear();
      })
      .catch((err) => {
        console.log(err);
        setErr(2);
        loadingClear();
      })
  }
  const loadingClear = () => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }

  const reload = () => {
    setLoading(true);
    if(err === 1){
      postResult();
    } else{
      getResult();
    }
  }

  return (
    <>
      <div>
        {quizOrder === -1 ? (
          <>
            {loading ? (
              <Loading>
                <img src={process.env.REACT_APP_KUPHIL_PUBLIC_URL + '/images/purple_loading.svg'} />
              </Loading>
            ) : (
              <>
                {err !== 0 ? (
                  <Reload>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    <button onClick={reload}>결과 다시 가져오기</button>
                  </Reload>
                ) : (
                  <>
                    <Title>{result.name}</Title>
                    <p>LV.{result.level} / LV.30 (상위 {result.percent}%)</p>
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <>
            
            {quizOrder === 0 ? (
              <>
                <Title>악보 퀴즈 LV.{quizOrder}</Title>
                <ThumbnailImg src={`${process.env.REACT_APP_KUPHIL_PUBLIC_URL}/images/thumbnail/quiz${quizId}.png`} />
              </>
            ) : (
              <>
                <Title>LV.{quizOrder}</Title>
                <QuizImg src={`${process.env.REACT_APP_KUPHIL_PUBLIC_URL}/images/quiz/${quizId}/${quizOrder}.png`} />
              </>
            )}
          </>
        )}
      </div>
      <div>
        {quizOrder <= 0 ? (
          <>
            <Select onClick={checkAnswer}>{quizOrder === 0 ? '시작하기' : '다시하기'}</Select>
            <Select onClick={() => navigate(`/etc`)}>다음에 하기</Select>
          </>
        ) : (
          <>
            {quizOption.map((v, i) => (
              <Select key={i} onClick={() => checkAnswer(i + 1)}>{v}</Select>
            ))}
          </>
        )}
      </div>
    </>
  );
};

const Loading = styled.div`
  width: 100%;
  text-align: center;
  padding: 50px 0;
`;
const Title = styled.p`
  font-size: 25px;
  margin-bottom: 20px;
`;
const ThumbnailImg = styled.img`
  width: 300px;
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

const QuizImg = styled.img`
  width: 800px;
  max-width: 100%;
  height: auto;
`;

const Select = styled.div`
  width: 100%;
  margin: 15px auto;
  padding: 15px 20px;
  font-size: 16px;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  background-color: white;

  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
    @media screen and (max-width: 767px){
      background-color: white;
    }
  }
`;

const Reload = styled.div`
  text-align: center;
  & > svg{
    margin-bottom: 10px;
  }

  & > button{
    display: block;
    width: auto;
    padding: 10px 30px;
    margin: 0 auto;
  }
`;

export default QuizGame;
