import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Pagination = (props) => {
  const { totalCount } = props;
  const [ nowPage, setNowPage ] = useState(1);
  const [ endPage, setEndPage ] = useState(nowPage);
  const [ result, setResult ] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    let _nowPage = Number(queryParams.get('page')) || 1;
    setNowPage(_nowPage);
    let _endPage = Math.floor((totalCount - 1) / 10) + 1 ? Math.floor((totalCount - 1) / 10) + 1 : 1 ;
    setEndPage(_endPage);
    console.log(_endPage);

    let pageStart = Math.floor((_nowPage - 1) / 5) * 5 + 1;
    let pageEnd = (pageStart + 4) < _endPage ? (pageStart + 4) : _endPage;
    let paging = [];
    for(let i = pageStart; i <= pageEnd; i++){
      paging.push(
        <PageNum key={i} checked={_nowPage === i ? true : false} onClick={() => movePage(i)}>{i}</PageNum>
      );
    }
    setResult(paging);
  },[location, totalCount]);

  const movePage = (num) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', num);

    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });
  }
  return(
    <StyledPagination>
      <PageMove blank={nowPage === 1 ? true : false} onClick={() => nowPage === 1 ? null : movePage(nowPage - 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </PageMove>
      {result}
      <PageMove blank={nowPage === endPage ? true : false} onClick={() => nowPage === endPage ? null : movePage(nowPage + 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </PageMove>
    </StyledPagination>  
  );
}

const StyledPagination = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const PageMove = styled.div`
  width: 32px;
  height: 32px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${props => props.blank ? '#dddddd' : 'black'};
  &:hover{
    cursor: pointer;
  }
`;
const PageNum = styled.li`
  width: 32px;
  height: 32px;
  margin: 0 5px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  line-height: 35px;
  border: ${props => props.checked ? '1px solid black' : 'none'};
  &:hover{
    cursor: pointer;
  }
`;

export default Pagination;