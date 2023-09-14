import React, { useEffect } from "react";
import { useState } from "react";
import styled from 'styled-components';
import axios from 'axios';

const Tip = () => {
  const [tip, setTip] = useState(['']);
  const [randNum, setRandNum] = useState(0);
  const axiosUrl = process.env.REACT_APP_AXIOS_URL;

  useEffect(() => {
    getTip();
  },[]);
  
  //api로 랜덤 하나 들고 오기
  const getTip = async () => {
    const res = await axios.get(`${axiosUrl}/api/v1/tip`);
      try {
        console.log(res);
        let newTip = res.data.tip;
        setTip(newTip);
      } catch {
        console.log("오류");
      }
  };
  const handleReloadTip = () => {
    getTip();
  }

  return (
    <StyledTip>
      <Reload onClick={handleReloadTip}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
        <p>새로고침</p>
      </Reload>
      <TipStatement>
        {tip[randNum]}
      </TipStatement>
    </StyledTip>
  );
};
const StyledTip = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Reload = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 12px;
  display: flex;
  justify-content: end;
  flex-direction: row;
  align-items: center;
  font-size: 12px;

  // 드래그 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > svg{
    stroke: black;
    padding-right: 3px;
  }
  &:hover{
    cursor: pointer;
    color: #aaaaaa;
    & > svg{
      stroke: #aaaaaa;
    }
  }

  @media screen and (max-width: 767px){
    font-size: 10px;
  }
`;
const TipStatement = styled.div`
  width: 100%;
  padding: 32px 20px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  line-height: 1.2;
  @media screen and (max-width: 767px){
    font-size: 12px;
  }
`;

export default Tip;
