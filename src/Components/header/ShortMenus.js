import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ShortMenus(props) {
  const { shortMenusOpen, setShortMenusOpen } = props;
  const navigate = useNavigate();

  const moveIntroducePage = () => {
    navigate(`/introduce`);
  }
  const moveArchivePage = () => {
    navigate(`/archive`);
  }
  const moveQnAPage = () => {
    navigate(`/qna`);
  }
  const moveGamecenterPage = () => {
    navigate(`/gamecenter`);
  }
  const moveLabPage = () => {
    navigate(`/lab`);
  }
  return (
    <StyledShortMenus shortMenusOpen={shortMenusOpen}>
      <Content>
        <Close>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => {
              setShortMenusOpen(false);
            }}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </Close>
        <StyledList onClick={moveIntroducePage}>소개</StyledList>
        <StyledList onClick={moveArchivePage}>아카이브</StyledList>
        <StyledList onClick={moveQnAPage}>Q&A</StyledList>
        <StyledList onClick={moveGamecenterPage}>놀이터</StyledList>
        <StyledList onClick={moveLabPage}>실험실</StyledList>
      </Content>
    </StyledShortMenus>
  );
}


const StyledShortMenus = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 99;
  background-color: rgb(256, 256, 256, 0.95);
  display: ${props => props.shortMenusOpen ? 'block' : 'none'};
`;
const Close = styled.div`
  width: 100%;
  text-align: end;
  margin-bottom: 50px;
  padding-top: 15px;
  cursor: pointer;
`;
const Content = styled.ul`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  flex-shrink: 0;
`;
const StyledList = styled.li`
  margin: 20px 0;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    color: #aaaaaa;
  }
`;

export default ShortMenus;
