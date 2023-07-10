import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';
import BoardAnswerBox from '../Components/board/BoardAnswerBox';
import BackBtn from '../Components/BackBtn';
import AnswerAdd from '../Components/board/AnswerAdd';

const BoardRead = () => {
  const [ main, setMain ] = useState(null);
  const [ answer, setAnswer ] = useState(null);
  const params = useParams();

  useEffect(() => {
    let mainContent = (
      <MainBox>
        <MainTitle>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet eros et risus dictum sollicitudin vel in mauris.'}</MainTitle>
        <MainContent>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet eros et risus dictum sollicitudin vel in mauris. Donec commodo mi sed consectetur placerat. Morbi at sollicitudin neque. Aenean nunc eros, sodales at consectetur a, placerat at elit. In euismod nisi bibendum ex semper, eu interdum leo viverra. Donec id felis non nibh euismod aliquam et non dui. Duis lacinia nulla vitae ullamcorper viverra. Nunc lobortis ornare nisl in venenatis. Maecenas sem arcu, volutpat malesuada mi sed, eleifend luctus odio. Donec id urna eget ligula gravida cursus eu ut neque. In hac habitasse platea dictumst. Suspendisse et viverra eros, et fringilla est.\n사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.'}</MainContent>
        <MainExplain>
          <MainExplainLeft>
            <MainAnswerCount>댓글 {params.id}</MainAnswerCount>
            <MainDate>날짜 {'2023-07-04'}</MainDate>
          </MainExplainLeft>
          <div>
            <MainDelete>
              글 삭제
            </MainDelete>
          </div>
        </MainExplain>
      </MainBox>
    );

    let answerContent = (
      <>
        <BoardAnswerBox answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet eros et risus dictum sollicitudin vel in mauris. Donec commodo mi sed consectetur placerat. Morbi at sollicitudin neque. Aenean nunc eros, sodales at consectetur a, placerat at elit. In euismod nisi bibendum ex semper, eu interdum leo viverra. Donec id felis non nibh euismod aliquam et non dui. Duis lacinia nulla vitae ullamcorper viverra. Nunc lobortis ornare nisl in venenatis. Maecenas sem arcu, volutpat malesuada mi sed, eleifend luctus odio. Donec id urna eget ligula gravida cursus eu ut neque. In hac habitasse platea dictumst. Suspendisse et viverra eros, et fringilla est.'} date={'2023-07-04'} />
        <BoardAnswerBox answer={'사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.'} date={'2023-07-04'} />
        <BoardAnswerBox last={true} answer={'ㅇㅇ'} date={'2023-07-04'} />
      </>
    );

    setMain(mainContent);
    setAnswer(answerContent)
  }, [params]);

  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <TitleGradient
            title="게시판"
            explain={"게시판 문구"}
            link="/board"
            color="linear-gradient(91.48deg, #E5FAFD 0%, rgba(189, 193, 236, 0.31) 100%)"
          />
          <BackArea>
            <BackBox>
              <BackBtn />
            </BackBox>
          </BackArea>
          <MainArea>
            {main}
          </MainArea>
          <AnswerArea>
            <AnswerTitle>댓글</AnswerTitle>
            <AnswerBox>
              {answer}
            </AnswerBox>
            <AnswerAddBox>
              <AnswerAdd />
            </AnswerAddBox>
          </AnswerArea>
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

const BackArea = styled.div`
  width: 100%;
  margin: 40px 0 20px 0;
`;
const BackBox = styled.div`
  width: 600px;
  margin: 0 auto;
  text-align: start;
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;

const MainArea = styled.div`
  width: 100%;
`;
const MainBox = styled.div`
  width: 600px;
  padding: 15px;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 767px){
    width: 100%;
  }
`;
const MainTitle = styled.div`
  width: 100%;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #aaaaaa;
  font-size: 20px;
  text-align: start;
  word-break: break-all;
  white-space: pre-wrap;
  line-height: 1.5;
`;
const MainContent = styled.div`
  width: 100%;
  margin-bottom: 30px;
  text-align: start;
  word-break: break-all;
  white-space: pre-wrap;
  line-height: 1.5;
`;
const MainExplain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MainExplainLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  color: #aaaaaa;
`;
const MainAnswerCount = styled.p`
  font-size: 12px;
  margin-right: 5px;
`;
const MainDate = styled.p`
  font-size: 12px;
`;
const MainDelete = styled.p`
  font-size: 12px;
  &:hover{
    cursor: pointer;
  }
`;

const AnswerArea = styled.div`
  width: 100%;
  margin-top: 50px;
`;
const AnswerTitle = styled.div`
  width: 600px;
  text-align: start;
  margin: 0 auto;
  font-size: 20px;
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;
const AnswerBox = styled.div`
  width: 600px;
  margin: 15px auto;
  text-align: start;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  padding: 0 15px;
  box-sizing: border-box;
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;

const AnswerAddBox = styled.div`
  width: 600px;
  margin: 0 auto;
  margin-bottom: 70px;
  text-align: start;
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;

export default BoardRead;
