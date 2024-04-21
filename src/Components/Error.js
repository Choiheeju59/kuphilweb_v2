import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Error = (props) => {
  const { ClickHandler } = props;
  const navigate = useNavigate();
  return (
    <ErrorDiv>
      <ErrorImg src={process.env.REACT_APP_KUPHIL_PUBLIC_URL + '/images/error.png'} />
      <ErrorButtonArea>
        <button onClick={ClickHandler}>다시 불러오기</button>
        <button onClick={() => navigate(-1)}>뒤로 가기</button>
      </ErrorButtonArea>
    </ErrorDiv>
  )
}

const ErrorDiv = styled.div`
  margin: 0 auto;
  width: 250px;
  padding: 20px 0;
  @media screen and (max-width: 767px){
    width: 100%;
    max-width: 200px;
  }
`;
const ErrorImg = styled.img`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;
const ErrorButtonArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  & button{
    width: 100%;
    background-color: white;
    margin: 4px 0;
    border: 1px solid black;
    border-radius: 5px;
    height: 40px;
    &:hover{
      cursor: pointer;
      background-color: #efefef;
    }
    @media screen and (max-width: 767px){
        height: 35px;
    }
  }
`;

export default Error;