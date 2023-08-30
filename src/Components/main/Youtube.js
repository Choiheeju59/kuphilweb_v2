import React from "react";
import styled from 'styled-components';

const Youtube = () => {
  return (
    <StyledYoutube>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/M3jevDWfj3U"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </StyledYoutube>
  );
};

const StyledYoutube = styled.div`
border-radius: 10px;
  background-color: #111111;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

export default Youtube;
