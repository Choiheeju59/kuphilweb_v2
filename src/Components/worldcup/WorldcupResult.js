import React from 'react';
import styled from 'styled-components';

const WorldcupResult = (props) => {
  const { data } = props;

  return (
    <StyledResult>
      <div>
        <MainSentence>{data.composer_en}</MainSentence>
        <SubSentence>{data.composer_kr}</SubSentence>
        <ImgDiv>
          <ImgData src={""} alt={""} />
        </ImgDiv>
      </div>
      <ButtonArea>
        <Button onClick={() => window.location.reload()}>
          <StyledSvg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/></StyledSvg>
          다시하기
        </Button>
        <Button>
          <StyledSvg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></StyledSvg>
          랭킹보기
        </Button>
      </ButtonArea>
    </StyledResult>
  );
}

const StyledResult = styled.div`
  width: 350px;
  max-width: 100%;
  margin: 0 auto;
`;
const MainSentence = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px){
    font-size: 20px;
  }
`;
const SubSentence = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;
const ImgDiv = styled.div`
  width: 100%;
  padding-top: 120%;
  position: relative;
  margin-bottom: 10px;

  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
`;
const ImgData = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

const ButtonArea = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  width: 150px;
  padding: 10px;
  background-color: white;
  border: none;
  margin: 0 10px;
  font-size: 20px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  stroke: #000000;
  &:hover{
    cursor: pointer;
    color: #aaaaaa;
    stroke: #aaaaaa;
  }
`;
const StyledSvg = styled.svg`
  margin: 5px;
`;


export default WorldcupResult