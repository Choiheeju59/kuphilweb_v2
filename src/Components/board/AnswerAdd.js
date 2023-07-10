import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';

const AnswerAdd = () => {
  const [ btnActive, setBtnActive ] = useState(false);
  const formRef = useRef();

  const handleTextareaChange = () => {
    let value = formRef.current.value;
    if(value) {
      setBtnActive(true);
      
    }
    else setBtnActive(false);
    
    adjustTextareaHeight();
  }

  const adjustTextareaHeight = () => {
    const textarea = formRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  return (
    <StyledForm >
      <FormInput placeholder='댓글을 입력해주세요.' rows={2} ref={formRef} onChange={handleTextareaChange}/>
      <FormBtn btnActive={btnActive}>저장</FormBtn>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  width: 100%;
  min-height: 100px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 15px;
  margin: 10px 0;

  @media screen and (max-width: 767px){
    min-height: 90px;
  }
`;
const FormInput = styled.textarea`
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  resize: none;
  overflow-y: hidden;
`;
const FormBtn = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #eeeeee;
  background-color: ${props => props.btnActive ? '#eeeeee' : 'white'};
  color: ${props => props.btnActive ? 'black' : '#aaaaaa'};
  &:hover{
    cursor: ${props => props.btnActive ? 'pointer' : 'auto'};
  }
`;

export default AnswerAdd;
