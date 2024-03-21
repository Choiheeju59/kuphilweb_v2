import React from "react";
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Menus = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const moveIntroducePage = () => {
    if(location.pathname === '/introduce') navigate(0, {replace: true});
    else navigate(`/introduce`);
  }
  const moveHistoryPage = () => {
    if(location.pathname === '/history') navigate(0, {replace: true});
    else navigate(`/history`);
  }
  const moveArchivePage = () => {
    if(location.pathname === '/archive/1') navigate(0, {replace: true});
    else navigate(`/archive/1`);
  }
  const moveRecruitmentPage = () => {
    if(location.pathname === '/recruitment') navigate(0, {replace: true});
    else navigate(`/recruitment`);
  }
  const moveEtcPage = () => {
    if(location.pathname === '/etc') navigate(0, {replace: true});
    else navigate(`/etc`);
  }

  return (
    <>
      <StyledMenus>
        <StyledList onClick={moveIntroducePage}>소개</StyledList>
        <StyledList onClick={moveHistoryPage}>연혁</StyledList>
        <StyledList onClick={moveArchivePage}>아카이브</StyledList>
        <StyledList onClick={moveRecruitmentPage}>모집/제휴</StyledList>
        <StyledList onClick={moveEtcPage}>etc.</StyledList>
      </StyledMenus>
    </>
  );
};

const StyledMenus = styled.ul`
  height: 40px;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
`;
const StyledList = styled.li`
  margin-left: 56px;
  font-size: 16px;
  line-height: normal;
  &:hover{
    cursor: pointer;
    color: #aaaaaa;
  }
`;

export default Menus;
