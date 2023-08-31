import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Recruitment = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`./recruitment`);
  }
  return (
    <StyledRecruitment>
      <img src={process.env.PUBLIC_URL + '/images/main/recruitment.png'} />
      <div>
        <p>쿠필과 연주할</p>
        <p>신입 부원을</p>
        <p>모집합니다.</p>
        <button onClick={handleButtonClick}>자세히 보기</button>
      </div>
    </StyledRecruitment>
  );
};

const StyledRecruitment = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: #EEFFE2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > img{
    width: 40%;
  }
  & > div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    & > p{
      font-size: 18px;
      line-height: 150%;
      letter-spacing: 10px;
    }

    & > button{
      margin-top: 20px;
      padding: 15px;
      font-size: 14px;
      display: inline-block;
      box-sizing: border-box;
      color: white;
      background-color: #327900;
      box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
      border: none;
      border-radius: 10px;
      letter-spacing: 0.2rem;
      &:hover{
        cursor: pointer;
      }
    }
  }
  
`;

export default Recruitment;
