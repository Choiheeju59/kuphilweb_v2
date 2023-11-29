import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';
import WorldcupBox from '../Components/worldcup/WorldcupBox';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import WorldcupGame from '../Components/worldcup/WorldcupGame';

const Worldcup = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [gameStart, setGameStart] = useState(0);
  const [round, setRound] = useState(0);
  const [choice, setChoice] = useState([]);
  
  useEffect(() => {
    if(params.id){
      let _title;
      if(params.id === '1'){
        _title = '나의 최애는?(작곡가 ver.)'
      } else if(params.id === '2'){
        _title = '나의 최애는?(교향곡 ver.)'
      } else{ // 잘못된 주소 접근 -> 404
        navigate(`/worldcup/1`);
      }
      setTitle(_title);
    }
  }, []);

  const start = (num) => {
    setGameStart(1);
    setRound(num);
    getData();
  }
  const getData = async () => {
    // data 가져오기
    let _data = [];
    for(let i = 0; i < round; i++){
      _data.push({title: i + '번째 작곡가', semiTitle: i + '번째 작곡가', img: ''});
    }
    setChoice(_data);
  }

  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <TitleGradient
            title="나의 최애는?"
            explain={"생각만 해도 두근두근!\n신중하게 최애를 골라봐요!"}
            link={"/worldcup/" + params.id}
            color="linear-gradient(91.48deg, #EFF2FF 0%, rgba(252, 225, 225, 0.31) 100%)"
          />
          {!gameStart ? (
            <WorldcupBox title={title} data={params.id} start={start} />
          ) : (
            <WorldcupGame round={round} setRound={setRound} choice={choice} setChoice={setChoice} />
          )}
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
  @media screen and (max-width: 767px){
    min-height: calc(100vh - 152px);
  }
`;
const Contents = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 767px){
    max-width: 400px;
  }
`;

export default Worldcup;
