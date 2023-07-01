import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ContentsBox = (props) => {
  const { title, src, info, link } = props;
  const navigate = useNavigate();

  const movePage = () => {
    navigate(link);
  }

  return (
    <StyledContentsBox>
      <ContentsBoxTitle>{title}</ContentsBoxTitle>
      <ContentsBoxImg src={"./images/thumbnail/" + src} onClick={movePage} />
      <ContentsBoxInfo>{info}</ContentsBoxInfo>
      <ContentsBoxBtn onClick={movePage}>Go!</ContentsBoxBtn>
    </StyledContentsBox>
  );
};

const StyledContentsBox = styled.div`
  margin: 15px 0;
  width: 450px;
  height: auto;
  padding: 50px 25px;
  box-sizing: border-box;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 767px){
    margin: 5px 0;
    width: 100%;
    padding: 40px 15px;
    height: auto;
  }
`;

const ContentsBoxTitle = styled.p`
  font-size: 28px;
  @media screen and (max-width: 767px){
    font-size: 25px;
  }
`;
const ContentsBoxImg = styled.img`
  width: 300px;
  height: auto;
  border: 1px solid #dddddd;
  margin: 15px 0;
  &:hover{
    cursor: pointer;
  }

  @media screen and (max-width: 767px){
    width: 80%;
    height: auto;
  }
`;
const ContentsBoxInfo = styled.p`
  white-space: pre-line;
  font-size: 18px;
  @media screen and (max-width: 767px){
    font-size: 16px;
  }
`;
const ContentsBoxBtn = styled.button`
  font-size: 20px;
  width: auto;
  height: auto;
  padding: 15px 35px;
  margin-top: 30px;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  background-color: #111111;
  color: #fefefe;
  &:hover{
    cursor: pointer;
  }

  @media screen and (max-width: 767px){
    margin-top: 20px;
    padding: 12px 30px;
  }
`;

export default ContentsBox;
