import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Menus = () => {
  const navigate = useNavigate();

  const moveIntroducePage = () => {
    navigate(`/introduce`);
  }
  const moveHistoryPage = () => {
    navigate(`/history`);
  }
  const moveArchivePage = () => {
    navigate(`/archive`);
  }
  const moveRecruitmentPage = () => {
    navigate(`/recruitment`);
  }
  const moveEtcPage = () => {
    navigate(`/etc`);
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
