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
      {src === '' && link === '' ? (
        <></>
      ) : (
        <>
          <ContentsBoxImgDiv>
            <ContentsBoxImg src={`${process.env.REACT_APP_KUPHIL_PUBLIC_URL}/images/thumbnail/${src}`} onClick={movePage} />
          </ContentsBoxImgDiv>
          <ContentsBoxInfo>{info}</ContentsBoxInfo>
          <ContentsBoxBtn onClick={movePage}>Go!</ContentsBoxBtn>
        </>
      )}
    </StyledContentsBox>
  );
};

const StyledContentsBox = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0;
  box-sizing: border-box;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

`;

const ContentsBoxTitle = styled.p`
  font-size: 16px;
  @media screen and (max-width: 767px){
    font-size: 14px;
  }
`;
const ContentsBoxImgDiv = styled.div`
  width: 80%;
  padding-bottom: 80%;
  position: relative;
  border: 1px solid #dddddd;
  margin: 15px 0;
`;
const ContentsBoxImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &:hover{
    cursor: pointer;
  }
`;
const ContentsBoxInfo = styled.p`
  white-space: pre-line;
  font-size: 14px;
`;
const ContentsBoxBtn = styled.button`
  font-size: 14px;
  width: auto;
  height: auto;
  padding: 10px 28px;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  background-color: #111111;
  color: #fefefe;
  &:hover{
    cursor: pointer;
  }
`;

export default ContentsBox;
