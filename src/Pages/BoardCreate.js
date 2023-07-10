import React, { useRef, useState } from "react";
import styled from "styled-components";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import TitleGradient from "../Components/TitleGradient";

const BoardCreate = () => {
  const [ titleDone, setTitleDone ] = useState(false);
  const [ contentDone, setContentDone ] = useState(false);
  const [ passwordDone, setPasswordDone ] = useState(false);
  const titleRef = useRef();
  const contentRef = useRef();
  const passwordRef = useRef();

  const handleTitleChange = () => {
    let value = titleRef.current.value;
    if(value) setTitleDone(true);
    else setTitleDone(false);
  }
  const handleContentChange = () => {
    let value = contentRef.current.value;
    if(value) setContentDone(true);
    else setContentDone(false);
    
    adjustTextareaHeight();
  }
  const handlePasswordChange = () => {
    let value = passwordRef.current.value;
    if(value) setPasswordDone(true);
    else setPasswordDone(false);
  }

  const adjustTextareaHeight = () => {
    const textarea = contentRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const register = () => {
    window.confirm('글을 등록하시겠습니까?');
  }

  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <TitleGradient
            title="게시판"
            explain={"게시판 문구"}
            link="/board"
            color="linear-gradient(91.48deg, #E5FAFD 0%, rgba(189, 193, 236, 0.31) 100%)"
          />
          <MainArea>
            <Title>자유게시판 글쓰기</Title>
            <MainBox>
              <MainTitle rows={1} placeholder='제목을 입력해주세요.' ref={titleRef} onChange={handleTitleChange}/>
              <MainContent placeholder='내용을 입력해주세요.' ref={contentRef} onChange={handleContentChange} />
              <MainPassword type='password' placeholder='비밀번호를 입력해주세요.(글 삭제 시 필요합니다.)' ref={passwordRef} onChange={handlePasswordChange}/>
            </MainBox>
            <ButtonArea>
              <FormBtn
                active={titleDone && contentDone && passwordDone}
                onClick={() => {
                  titleDone && contentDone && passwordDone && register();
                }}>등록</FormBtn>
            </ButtonArea>
          </MainArea>
        </Contents>
      </Wrap>
      <Footer />
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 202px);
  @media screen and (max-width: 767px) {
    min-height: calc(100vh - 152px);
  }
`;
const Contents = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    max-width: 400px;
  }
`;

const MainArea = styled.div`
  width: 100%;
  margin-top: 70px;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    margin-top: 60px;
  }
`;
const Title = styled.p`
  width: 600px;
  margin: 0 auto;
  text-align: start;
  font-size: 25px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 22px;
  }
`;
const MainBox = styled.div`
  width: 600px;
  padding: 15px;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
const MainTitle = styled.textarea`
  width: 100%;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 1px solid #aaaaaa;
  font-size: 16px;
  text-align: start;
  word-break: break-all;
  white-space: pre-wrap;
  line-height: 1.5;

  outline: none;
  resize: none;
  overflow-y: hidden;
`;
const MainContent = styled.textarea`
  width: 100%;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 1px solid #aaaaaa;
  font-size: 16px;
  text-align: start;
  word-break: break-all;
  white-space: pre-wrap;
  line-height: 1.5;
  min-height: 250px;

  outline: none;
  resize: none;
  overflow-y: hidden;
`;
const MainPassword = styled.input`
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  resize: none;
  overflow-y: hidden;
`;

const ButtonArea = styled.div`
  width: 600px;
  text-align: end;
  margin: 0 auto;
  margin-top: 15px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
const FormBtn = styled.button`
  padding: 5px 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #eeeeee;
  background-color: ${props => props.active ? '#eeeeee' : 'white'};
  color: ${props => props.active ? 'black' : '#aaaaaa'};
  &:hover{
    cursor: ${props => props.active ? 'pointer' : 'auto'};
  }
`;

export default BoardCreate;
