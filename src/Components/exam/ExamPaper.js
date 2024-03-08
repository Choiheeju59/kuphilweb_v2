import React, { useEffect, useState } from "react";
import styled, { css } from 'styled-components';
import { getExamData } from '../../utils/api';
import { useParams } from 'react-router-dom';

const ExamPaper = (props) => {
  const { id, question, choices, nextQuestion, prevQuestion, check, score } = props;
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [openAnswer, setOpenAnswer] = useState(false);
  const [answerDiv, setAnswerDiv] = useState(null);
  const [checked, setChecked] = useState(check);
  const [rank, setRank] = useState('');

  useEffect(() => {
    if(id > 10){
      // 3초 동안 로딩
      setLoading(true);
    }
    setChecked(check);
  }, [id]);

  useEffect(() => {
    if(loading){
      // 3초 뒤 로딩 해제
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [loading]);

  useEffect(() => {
    if(openAnswer){
      getExamData(params.id)
        .then((res) => {
          let _answer = [];
          res.data.map((v, i) => {
            _answer.push(
              <AnswerBox key={i}>
                <div>
                  <AnswerQuestion>{v.id}. {v.question}</AnswerQuestion>
                </div>
                <div>
                  <div>
                    {v.choices.map((cv, ci) =>
                      <AnswerProblemItem key={ci} check={v.answer === (ci + 1)}>
                        {ci + 1}. {cv}
                      </AnswerProblemItem>
                    )}
                  </div>
                </div>
              </AnswerBox>
            );
            setAnswerDiv(_answer);
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [openAnswer]);

  useEffect(() => {
    if(score === 100) setRank('A+');
    else if(score >= 90) setRank('A');
    else if(score >= 80) setRank('B+');
    else if(score >= 70) setRank('B');
    else if(score >= 60) setRank('C+');
    else setRank('C+');
  }, [score])

  const checkItem = (num) => {
    checked === num ? setChecked(0) : setChecked(num);
  }

  return (
    <StyledExamPaper>
      {id <= 10 ? (
        <>
          <div>
            {id ? 
              <>
                <Progress>{id} / 10</Progress>
                <Question>{id}. {question}</Question>
              </>
            :
              <Question>{question}</Question>
            }
          </div>
          <div>
            <div>
              {choices.map((v, i) =>
                <ProblemItem key={i} checked={checked === i+1} onClick={() => {
                  id === 0 ? nextQuestion(i + 1) : checkItem(i + 1)
                }}>
                  {v}
                </ProblemItem>
              )}
            </div>
          </div>
          <ProblemArrowKey $display={id === 0}>
            <p onClick={() => prevQuestion(checked)}>{id === 1 ? null : '◀︎ 이전 문제'}</p>
            <p onClick={() => nextQuestion(checked)}>{id === 10 ? '채점 하기 ▶︎' : '다음 문제 ▶︎'}</p>
          </ProblemArrowKey>
        </>
      ) : (
        <>
          {loading ? (
            <Loading>
              <img src={process.env.REACT_APP_KUPHIL_PUBLIC_URL + '/images/purple_loading.svg'} />
            </Loading>
          ) : (
            <>
              <ResultDiv>
                <RankImg src={`${process.env.REACT_APP_KUPHIL_PUBLIC_URL}/images/exam/${rank}.png`} />
                <Question>당신의 점수는 "{score}점" 입니다!</Question>
              </ResultDiv>
              <div>
                <div>
                  <ProblemItem onClick={() => {nextQuestion(1)}}>다시하기</ProblemItem>
                  <ProblemItem onClick={() => {nextQuestion(2)}}>종료하기</ProblemItem>
                </div>
              </div>
              <ShowAnswer>
                <ShowAnswerBtn onClick={() => setOpenAnswer(v => !v)}>{!openAnswer ? '정답 보기 ▼' : '정답 접기 ▲'}</ShowAnswerBtn>
                <AnswerArea openanswer={openAnswer}>
                  {/* 시험 정답 */}
                  {answerDiv}
                  <ShowAnswerBtn onClick={() => setOpenAnswer(false)}>정답 접기 ▲</ShowAnswerBtn>
                </AnswerArea>
              </ShowAnswer>
            </>
          )}
        </>
      )}
    </StyledExamPaper>
  );
};

const StyledExamPaper = styled.div`
  width: 640px;
  margin: 0 auto;
  padding: 50px 30px 30px 30px;
  box-sizing: border-box;
  border-radius: 15px;
  //background-image: url('/images/exam/exam_paper.jpg');
  background-color: #dddddd;
  text-align: start;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;

const Progress = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  
  @media screen and (max-width: 767px){
    font-size: 12px;
  }
`;
const Question = styled.div`
  font-size: 22px;
  white-space: pre-line;
  line-height: 1.2;

  @media screen and (max-width: 767px){
    font-size: 18px;
  }
`;

const ProblemItem = styled.div`
  width: 100%;
  height: 60px;
  margin: 20px 0;
  padding: 0 10px 0 30px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffffff50;
  display: flex;
  align-items: center;
  position: relative;
  ${props => props.checked && css`
    &::after{
      content: '⋁';
      font-weight: bold;
      color: red;
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translate(0, -50%);
    }
  `}

  &:hover{
    background-color: white;
    cursor: pointer;
  }
`;
const ProblemArrowKey = styled.div`
  display: ${props => props.$display ? 'none' : 'flex'};
  justify-content: space-between;
  & p{
    font-size: 14px;
    &:hover{
      cursor: pointer;
      color: #aaaaaa;
    }
  }
`;

const Loading = styled.div`
  width: 100%;
  text-align: center;
  padding: 50px 0;
`;

const ShowAnswer = styled.div`
  text-align: center;
  margin-top: 50px;
`;
const ShowAnswerBtn = styled.p`
  display: inline;
  text-align: center;
  &:hover{
    color: #555555;
    cursor: pointer;
  }
`;
const AnswerArea = styled.div`
  display: ${props => props.openanswer ? 'block' : 'none'};
`;
const AnswerBox = styled.div`
  text-align: start;
  margin: 30px 0;
`;
const AnswerQuestion = styled.div`
  font-size: 20px;
  white-space: pre-line;
  line-height: 1.2;
`;
const AnswerProblemItem = styled.div`
  margin: 10px 0;
  color: ${props => props.check ? 'red' : 'black'};
`;

const ResultDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
`;
const RankImg = styled.img`
  width: 200px;
  height: auto;
`;

export default ExamPaper;
