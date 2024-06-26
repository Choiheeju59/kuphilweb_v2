import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TitleGradient from "../Components/TitleGradient";
import WorldcupBox from "../Components/worldcup/WorldcupBox";
import { useParams } from "react-router-dom";
import WorldcupGame from "../Components/worldcup/WorldcupGame";
import { useScrollTopAlways } from "../hooks/useScrollTop";

const Worldcup = () => {
  const params = useParams();
  const [gameId, setGameId] = useState(0);
  const [title, setTitle] = useState("");
  const [gameStart, setGameStart] = useState(false);
  const [round, setRound] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useScrollTopAlways();

  useEffect(() => {
    if (params.id) {
      let _title;
      if (params.id === "1") {
        _title = "작곡가 ver.";
        setIsActive(true);
        setTitle(_title);
        setGameId(Number(params.id));
      } else if (params.id === "2") {
        _title = "곡 ver.";
        setIsActive(true);
        setTitle(_title);
        setGameId(Number(params.id));
      } else {
        setIsActive(false);
      }
    }
  }, [params]);

  const start = (num) => {
    setGameStart(true);
    setRound(num);
  };

  return (
    <>
      <Contents>
        <TitleGradient
          title="나의 최애는?"
          explain={"생각만 해도 두근두근!\n신중하게 최애를 골라봐요!"}
          link={isActive ? "/worldcup/" + gameId : "/worldcup/1"}
          color="linear-gradient(91.48deg, #EFF2FF 0%, rgba(252, 225, 225, 0.31) 100%)"
        />
        {isActive ? (
          <>
            {!gameStart ? (
              <WorldcupBox title={title} gameId={gameId} start={start} />
            ) : (
              <WorldcupGame
                gameId={gameId}
                title={title}
                round={round}
                setRound={setRound}
              />
            )}
          </>
        ) : null}
      </Contents>
    </>
  );
};

const Contents = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    max-width: 400px;
  }
`;

export default Worldcup;
