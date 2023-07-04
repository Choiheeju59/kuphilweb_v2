import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Menus = () => {
  const navigate = useNavigate();

  const moveIntroducePage = () => {
    navigate(`/introduce`);
  }
  const moveArchivePage = () => {
    navigate(`/archive`);
  }
  const moveBoardPage = () => {
    navigate(`/board`);
  }
  const movePlaygroundPage = () => {
    navigate(`/playground`);
  }
  const moveLabPage = () => {
    navigate(`/lab`);
  }

  return (
    <>
      <StyledMenus>
        <StyledList onClick={moveIntroducePage}>소개</StyledList>
        <StyledList onClick={moveArchivePage}>아카이브</StyledList>
        <StyledList onClick={moveBoardPage}>게시판</StyledList>
        <StyledList onClick={movePlaygroundPage}>놀이터</StyledList>
        <StyledList onClick={moveLabPage}>실험실</StyledList>
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
