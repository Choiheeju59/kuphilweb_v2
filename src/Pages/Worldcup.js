import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import TitleGradient from '../Components/TitleGradient';
import WorldcupBox from '../Components/worldcup/WorldcupBox';
import WorldcupGame from '../Components/worldcup/WorldcupGame';

const Worldcup = () => {
  const [ round, setRound ] = useState(0);
  const [ game, setGame ] = useState(0);

  return (
    <>
      <Wrap>
        <Header />
        <Contents>
          <TitleGradient
            title="내 최애 OOO?!"
            explain={"생각만 해도 두근두근!\n신중하게 최애를 골라봐요!"}
            link="/worldcup"
            color="linear-gradient(91.48deg, #EFF2FF 0%, rgba(252, 225, 225, 0.31) 100%)"
          />
          <WorldcupContent>
            {
              round === 0 ?
              (
                <>
                  <WorldcupBox title="작곡가 이상형 월드컵" thumbnail='' setRound={setRound} setGame={setGame} gameNum={1}/>
                  <WorldcupBox title="교향곡 이상형 월드컵" thumbnail='' setRound={setRound} setGame={setGame} gameNum={2}/>
                </>
              ) :
              (
                <>
                  <WorldcupGame round={round} setRound={setRound} game={game} />
                </>
              )
            }
            
          </WorldcupContent>
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
const WorldcupContent = styled.div`
  width: 100%;
  height: auto;
  margin-top: 70px;

  @media screen and (max-width: 767px){
    margin-top: 50px;
  }
`;

export default Worldcup;
