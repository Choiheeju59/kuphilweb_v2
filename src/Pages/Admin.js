import { useState } from 'react';
import styled from 'styled-components';

const Admin = () => {
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);

  const handlePasswordInput = (e) => {
    if(wrong) setWrong(false);
    setPassword(e.target.value);
  }
  const subminPassword = () => {
    setWrong(false);
    // 비밀번호 백엔드로 전달

    // 임시 로그인
    if(password === 'aa') {
      console.log('로그인');
    }
    else{
      setWrong(true);
    }
  }
  return (
    <StyledAdmin>
      <AdminBox>
        <AdminTitle><span>KUPHIL</span> Admin</AdminTitle>
        <AdminInput type='password' value={password} onChange={handlePasswordInput} placeholder='Password' />
        {wrong ? (
          <WrongPassword>비밀번호가 잘못되었습니다.</WrongPassword>
        ) : (
          null
        )}
        <AdminSubmit onClick={subminPassword}>Login</AdminSubmit>
      </AdminBox>
    </StyledAdmin>
  );
}

const StyledAdmin = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const AdminBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
`;

const AdminTitle = styled.p`
  font-size: 40px;
  margin-bottom: 20px;
  & span{
    font-weight: bold;
  }
`;
const AdminInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 10px;
  font-size: 16px;
  margin-bottom: 5px;
`;
const WrongPassword = styled.p`
  font-size: 12px;
  color: red;
`;
const AdminSubmit = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 15px 10px;
  background-color: black;
  color: white;
  border-radius: 5px;
  font-size: 18px;
  &:hover{
    cursor: pointer;
    background-color: #222222;
  }
`;

export default Admin;