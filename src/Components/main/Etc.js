import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Etc = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`./etc`);
  }
  return (
    <StyledEtc>
      <div>
        <p>쿠웹이 준비한</p>
        <p>즐길거리!</p>
        <button onClick={handleButtonClick}>Go</button>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/main/etc.png'} />
      </div>
    </StyledEtc>
  );
};

const StyledEtc = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div{
    width: 100%;
    height: 50%;
    padding: 0 30px;
    box-sizing: border-box;
    &:first-child{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #E2FCFF;
    }
    
    & > p{
      font-size: 18px;
      line-height: 150%;
      letter-spacing: 5px;
    }

    & > button{
      margin-top: 20px;
      padding: 15px 30px;
      font-size: 14px;
      display: inline-block;
      box-sizing: border-box;
      color: white;
      background-color: #007482;
      box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
      border: none;
      border-radius: 10px;
      letter-spacing: 0.2rem;
      &:hover{
        cursor: pointer;
      }
    }
    & > img{
      margin-top: 5%;
      height: 90%;
    }
  }
  
  
`;

export default Etc;
