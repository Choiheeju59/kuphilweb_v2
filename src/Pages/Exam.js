import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';
import { useParams, useNavigate } from 'react-router-dom';
import ExamPaper from '../Components/exam/ExamPaper';
import { getExamData, getExamScoreData } from '../utils/api';

const Exam = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [problemNumber, setProblemNumber] = useState(0); // 문제 번호
  const [problems, setProblems] = useState([]); // 문제, 보기, 답
  // [
  //   {id:1, question:"", choices:["","","",""]},
  //   {id:2, question:"", choices:["","","",""]},
  //   ...
  // ]
  const [submitAnswers, setSubmitAnswers] = useState([]); // 사용자 답
  // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const [score, setScore] = useState(0);

  useEffect(() => {
    if(params.id){
      if(params.id === '1' || params.id === '2' || params.id === '3'){
        let _title = `제${params.id}회 클래식 능력고사`;
        setTitle(_title);
      } else{ // 잘못된 주소 접근 -> 404
        navigate(`/exam/1`);
      }
    }
  }, [params]);

  const examStart = (start) => {
    if(start === 1){ // 바로 시작하기
      getData();
    } else{ // 다음에 하기
      navigate(-1);
    }
  }

  const getData = async () => {
    getExamData(params.id)
      .then((res) => {
        setProblems([...res.data]);
        setProblemNumber(1);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const nextQuestion = (num) => {
    setSubmitAnswers([...submitAnswers, num]);
    if(problemNumber <= 10) setProblemNumber(n => n + 1);
  }

  useEffect(() => {
    if(submitAnswers.length >= 10){
      checkAnswer();
    }
  }, [submitAnswers]);

  const checkAnswer = () => {
    // 백엔드에 정답 체크 요청
    getExamScoreData(params.id, submitAnswers)
      .then((res) => {
        setScore(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const examEnd = (end) => {
    if(end === 1){ // 다시하기
      window.location.reload();
    } else{ // 종료하기
      navigate(-1);
    }
  }

  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <TitleGradient
            title="클래식 능력고사"
            explain={
              "당신은 클래식을 많이 아십니까?\n이곳에서 당신의 능력을 확인해보십시오!"
            }
            link={"/exam/" + params.id}
            color="linear-gradient(91.48deg, #EFF2FF 0%, rgba(252, 225, 225, 0.31) 100%)"
          />
          <ExamContent>
            {!problemNumber ? (
              <ExamPaper id={problemNumber} question={title} choices={['바로 시작하기', '다음에 하기']} handleClickEvent={examStart} />
            ) : (
              <>
                {problemNumber <= 10 ? (
                  <ExamPaper id={problemNumber} question={problems[problemNumber - 1]['question']} choices={problems[problemNumber - 1]['choices']} handleClickEvent={nextQuestion} />
                ) : (
                  <ExamPaper id={problemNumber} handleClickEvent={examEnd} score={score} />
                )}
              </>
            )}
          </ExamContent>
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
const ExamContent = styled.div`
  width: 100%;
  height: auto;
  padding: 50px 0;

  @media screen and (max-width: 767px){
    padding: 20px 0;
  }
`;

export default Exam;
