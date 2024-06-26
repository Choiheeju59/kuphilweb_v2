import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TitleGradient from "../Components/TitleGradient";
import QuizGame from "../Components/quiz/QuizGame";

const Quiz = () => {
  const [imported, setImported] = useState(null);
  const params = useParams();
  const [quizId, setQuizId] = useState(0);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (params.id) {
      if (params.id === "1" || params.id === "2") {
        setIsActive(true);
        setQuizId(Number(params.id));
        importFile();
      } else {
        // 잘못된 주소 접근 -> 404
        setIsActive(false);
      }
    }
  }, [params]);

  const importFile = async () => {
    let fileName = `q${params.id}`;
    const _imported = await import(`../utils/${fileName}`);
    setImported(_imported[fileName]);
  };
  return (
    <>
      <Contents>
        <TitleGradient
          title={
            isActive
              ? `악보 퀴즈 (${quizId === 1 ? "쉬움" : "어려움"})`
              : `악보 퀴즈`
          }
          explain={
            "당신은 악보를 보고 곡을 맞출 수 있나요?\n상위 몇 퍼인지 확인해봐요!"
          }
          link={isActive ? `/quiz/${quizId}` : `/quiz/1`}
          color="linear-gradient(91.48deg, #EFF2FF 0%, rgba(252, 225, 225, 0.31) 100%)"
        />
        {isActive ? (
          <QuizContent>
            <QuizGame imported={imported} quizId={quizId} />
          </QuizContent>
        ) : null}
      </Contents>
    </>
  );
};

const Contents = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    max-width: 400px;
  }
`;

const QuizContent = styled.div`
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  padding: 80px 0;

  @media screen and (max-width: 767px) {
    padding-top: 80px;
  }
`;

export default Quiz;
