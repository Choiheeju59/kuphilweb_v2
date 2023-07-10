import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
  const navigate = useNavigate();

  const moveBack = () => {
    navigate(-1);
  }

  return (
    <Back onClick={moveBack}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
    </Back>
  );
};

const Back = styled.div`
  display: inline-block;
  padding: 8px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

export default BackBtn;
