import React, { useState } from "react";
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const TitleGradient = (props) => {
  const { title, explain, link, title2, link2, color } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [link2Clicked, setLink2Clicked] = useState(link2 === location.pathname);

  const movePage = () => {
    if(location.pathname === link) window.location.reload(); 
    else navigate(link);
  }
  const movePage2 = () => {
    if(location.pathname === link2) window.location.reload(); 
    else navigate(link2);
  }
  return (
    <StyledTitleGradient>
      <GradientContent color={color}>
        <TitleContent>
        <Title link2Clicked={link2Clicked} onClick={movePage}>{title}</Title>
        {
          title2 ?
            <>
              <TitleDivide>|</TitleDivide>
              <TitleSecond link2Clicked={link2Clicked} onClick={movePage2}>{title2}</TitleSecond>
            </>
          :
            null
        }
        </TitleContent>
        <Explain>{explain}</Explain>
      </GradientContent>
    </StyledTitleGradient>
  );
};

const StyledTitleGradient = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;

  @media screen and (max-width: 767px){
    margin-top: 10px;
  }
`;
const GradientContent = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  border-radius: 15px;
  background: ${props => props.color};

  @media screen and (max-width: 767px){
    height: 150px;
  }
`;
const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 25px;
  align-items: center;

  @media screen and (max-width: 767px){
    padding-top: 40px;
    padding-bottom: 20px;
  }
`;
const Title = styled.p`
  font-size: 30px;
  color: ${props => props.link2Clicked ? 'gray' : 'black'};
  cursor: pointer;
  @media screen and (max-width: 767px){
    font-size: 22px;
  }
`;
const TitleDivide = styled.p`
  font-size: 20px;
  margin: 0 10px;
  color: gray;
  @media screen and (max-width: 767px){
    font-size: 18px;
  }
`;
const TitleSecond = styled.p`
  font-size: 30px;
  color: ${props => props.link2Clicked ? 'black' : 'gray'};
  cursor: pointer;
  @media screen and (max-width: 767px){
    font-size: 22px;
  }
`;
const Explain = styled.p`
  white-space: pre-line;
  line-height: 1.2;
  @media screen and (max-width: 767px){
    font-size: 13px;
  }
`;

export default TitleGradient;
