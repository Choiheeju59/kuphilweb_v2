import React from "react";
import styled from 'styled-components';

const Youtube = () => {
  return (
    <StyledYoutube>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/D6Fjxs6dMaQ?si=sjudL2jHW3n0Vcim" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
    & > iframe{
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
