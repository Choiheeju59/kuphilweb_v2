import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { getExamData } from '../../utils/api';
import { useParams } from 'react-router-dom';

const ExamPaper = (props) => {
  const { id, question, choices, handleClickEvent, score } = props;
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [openAnswer, setOpenAnswer] = useState(false);
  const [answerDiv, setAnswerDiv] = useState(null);

  useEffect(() => {
    if(id > 10){
      // 3초 동안 로딩
      setLoading(true);
    }
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
          console.log(res.data);
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
  }, [openAnswer])

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
            <ProblemList>
              {choices.map((v, i) =>
                <ProblemItem key={i} onClick={() => {handleClickEvent(i + 1)}}>
                  {v}
                </ProblemItem>
              )}
            </ProblemList>
          </div>
        </>
      ) : (
        <>
          {loading ? (
            <Loading>
              <img src={process.env.REACT_APP_PUBLIC_URL + '/images/purple_loading.svg'} />
            </Loading>
          ) : (
            <>
              <div>
                <img src="" />
                <Question>당신의 점수는 "{score}점" 입니다!</Question>
              </div>
              <div>
                <ProblemList>
                  <ProblemItem onClick={() => {handleClickEvent(1)}}>다시하기</ProblemItem>
                  <ProblemItem onClick={() => {handleClickEvent(2)}}>종료하기</ProblemItem>
                </ProblemList>
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
// const ProblemList = styled.ol`
//   list-style: decimal;
//   list-style-position: inside;
//   display: flex;
//   flex-direction: column;
//   align-items: start;
  
// `;
// const ProblemItem = styled.li`
//   padding: 10px 0;
  
//   &:hover{
//     color: red;
//     cursor: pointer;
//   }

//   @media screen and (max-width: 767px){
//     font-size: 14px;
//   }
// `;

const ProblemList = styled.div`
`;
const ProblemItem = styled.div`
  width: 100%;
  height: 60px;
  margin: 20px 0;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
  opacity: 60%;
  display: flex;
  align-items: center;
  &:hover{
    opacity: 100%;
    cursor: pointer;
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

export default ExamPaper;
