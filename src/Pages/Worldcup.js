import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';
import WorldcupBox from '../Components/worldcup/WorldcupBox';
import { useNavigate, useParams } from 'react-router-dom';
import WorldcupGame from '../Components/worldcup/WorldcupGame';

const Worldcup = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [gameId, setGameId] = useState(0);
  const [title, setTitle] = useState('');
  const [gameStart, setGameStart] = useState(false);
  const [round, setRound] = useState(0);
  
  useEffect(() => {
    if(params.id){
      let _title;
      if(params.id === '1'){
        _title = '작곡가 ver.'
      } else if(params.id === '2'){
        _title = '곡 ver.'
      } else{ // 잘못된 주소 접근 -> 404
        navigate(`/worldcup/1`);
      }
      setTitle(_title);
      setGameId(params.id);
    }
  }, [params]);

  const start = (num) => {
    setGameStart(true);
    setRound(num);
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
            <WorldcupGame gameId={gameId} title={title} round={round} setRound={setRound} />
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
