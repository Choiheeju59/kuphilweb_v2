import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Cooperate = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`./recruitment`);
  }
  return (
    <StyledCooperate>
      <img src={process.env.PUBLIC_URL + '/images/main/cooperate.png'} />
      <button onClick={handleButtonClick}>제휴 및 후원하기</button>
    </StyledCooperate>
  );
};

const StyledCooperate = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: #ffeffc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > img{
    width: 50%;
    @media screen and (max-width: 767px){
      width: 45%;
    }
  }
  & > button{
    padding: 15px;
    font-size: 14px;
    display: inline-block;
    box-sizing: border-box;
    color: white;
    background-color: #920084;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 10px;
    letter-spacing: 0.2rem;
    &:hover{
      cursor: pointer;
    }
    @media screen and (max-width: 767px){
      padding: 12px;
      font-size: 10px;
    }
  }
`;

export default Cooperate;
