import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const ExamPaper = (props) => {
  const { id, question, problem, handleClickEvent, score } = props;
  const [loading, setLoading] = useState(false);

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
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [loading]);

  return (
    <StyledExamPaper>
      {id <= 10 ? (
        <>
          <div>
            {id ? 
              <>
                <Progress>{id} / 10</Progress>
                <Question>{id}. {question} [10점]</Question>
              </>
            :
              <Question>{question}</Question>
            }
          </div>
          <div>
            <ProblemList>
              {problem.map((v, i) =>
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
  border-radius: 5px;
  background-image: url('/images/exam/exam_paper.jpg');
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
const Question = styled.p`
  font-size: 22px;

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

export default ExamPaper;
