import React from "react";
import styled from 'styled-components';
import YouTube from 'react-youtube';

const Youtube = () => {
  return (
    <StyledYoutube>
      <div>
        <YouTube
          videoId="M3jevDWfj3U" //동영상 주소
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
            },
          }}
        />
      </div>
    </StyledYoutube>
  );
};

const StyledYoutube = styled.div`
  border-radius: 10px;
  background-color: #1a1a1a;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & > div{
    position: relative;
    width: 60%;
    padding-bottom: calc(56.2% * 6 / 10);
    & > div{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 767px){
      width: 80%;
      padding-bottom: calc(56.2% * 8 / 10);
    }
  }
`;

export default Youtube;
