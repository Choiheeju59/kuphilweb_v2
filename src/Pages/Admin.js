import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getLogin } from '../utils/api';

const Admin = () => {
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handlePasswordInput = (e) => {
    if(wrong) setWrong(false);
    setPassword(e.target.value);
  }
  const submitPassword = () => {
    setWrong(false);
    // 비밀번호 백엔드로 전달
    getLogin(password)
      .then((res) => {
        if(res.data) {
          sessionStorage.setItem('auth_token', res.data);
          navigate(`./home`);
        }
        else setWrong(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  return (
    <StyledAdmin>
      <AdminBox>
        <AdminTitle><span>KUPHIL</span> Admin</AdminTitle>
        {isLogin ? (
          <></>
        ) : (
          <>
            <AdminInput type='password' value={password} wrong={wrong} onChange={handlePasswordInput} placeholder='Password' />
            {wrong ? (
              <WrongPassword>잘못된 비밀번호입니다. 다시 한 번 확인해주세요.</WrongPassword>
            ) : (
              null
            )}
            <AdminSubmit onClick={submitPassword}>Login</AdminSubmit>
          </>
        )}
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
  width: 270px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  box-sizing: border-box;
`;

const AdminTitle = styled.p`
  font-size: 34px;
  margin-bottom: 10px;
  & span{
    font-weight: bold;
  }
`;
const AdminInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 10px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px 0;
  border: 1px solid ${props => props.wrong ? 'red' : 'black'};
`;
const WrongPassword = styled.p`
  font-size: 12px;
  color: red;
  text-align: start;
  padding: 0 0 10px 2px;
`;
const AdminSubmit = styled.div`
  width: 100%;
  box-sizing: border-box;
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