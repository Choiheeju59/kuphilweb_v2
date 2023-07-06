import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';
import BoardBox from '../Components/board/BoardBox';
import Pagination from '../Components/board/Pagination';

const Board = () => {
  const [ checked, setChecked ] = useState('notice');
  const [ content, setContent ] = useState([]);
  const [ result, setResult ] = useState(null);
  const [ totalCount, setTotalCount ] = useState(0);
  const [ nowPage, setNowPage ] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  

  useEffect(() => {
    if(content.length){
      let contents = content.map((v, i) => {
        return <BoardBox key={i} title={v.title} answerCount={v.answerCount} date={v.date} />
      });
      setResult(contents);
    } else {
      setResult(
        <BoardBox title="질문이 없습니다." answerCount={null} date={null} />
      )
    }
  }, [content]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    let _checked = queryParams.get('category') || 'notice';
    setChecked(_checked);
    let _nowPage = Number(queryParams.get('page')) || 1;
    setNowPage(_nowPage);

    let newContent = [];
    let newTotalCount = 91;
    let for_end = (_nowPage * 10) > newTotalCount ? newTotalCount - ((_nowPage - 1) * 10) : 10;
    for(let i = 0; i < for_end; i++){
      newContent[i] = {title: '[' + _checked + ']' + _nowPage + '-' + i, answerCount: i, date: '2023-07-04'};
    }
    setTotalCount(newTotalCount);
    setContent([...newContent]);
  },[location]);

  const movePage = (str) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('category', str);
    queryParams.delete('page');

    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    })
  };

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
          <CategoryBox>
            <CategoryText checked={checked === 'notice' ? true : false} onClick={() => movePage('notice')}>공지 사항</CategoryText>
            <CategoryText checked={checked === 'free' ? true : false} onClick={() => movePage('free')}>자유 게시판</CategoryText>
          </CategoryBox>
          {
            checked === 'free' ?
            (
              <Writing>
                <WritingBox>
                  <WritingBtn>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>
                    <WritingText>글쓰기</WritingText>
                  </WritingBtn>
                </WritingBox>
              </Writing>
            )
            :
            (
              null
            )
          }
          <ReadBox>
            {result}
          </ReadBox>
          <PageBox>
            <Pagination totalCount={totalCount} />
          </PageBox>
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

const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 30px;
  @media screen and (max-width: 767px){
    margin-top: 60px;
  }
`;
const CategoryText = styled.p`
  height: auto;
  font-size: 18px;
  margin: 0 30px;
  text-decoration: ${props => props.checked ? 'underline' : 'none'};
  text-underline-position : under;
  &:hover{
    cursor: pointer;
    color: #aaaaaa;
  }
  @media screen and (max-width: 767px){
    margin: 0 20px;
    font-size: 16px;
  }
`;
const Writing = styled.div`
  width: 100%;
`;
const WritingBox = styled.div`
  width: 600px;
  padding: 10px 0;
  margin: 0 auto;
  text-align: end;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
const WritingBtn = styled.p`
  display: flex;
  flex-direction: row;
  &:hover{
    cursor: pointer;
    opacity: 50%;
  }
`;
const WritingText = styled.p`
`;
const ReadBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px){
    margin: 25px 0;
  }
`;
const PageBox = styled.div`
  width: 100%;
  height: auto;
  margin: 50px 0;
`;

export default Board;
