import React from "react";
import styled from 'styled-components';

const Sns = () => {
  const sns = [
    ['facebook.png', 'https://www.facebook.com/KUPhilharmonic/'],
    ['instagram.png', 'https://www.instagram.com/kuphilharmonic/?hl=ko'],
    ['youtube.png', 'https://www.youtube.com/channel/UCyG3uwmWmLt8tYNOJ3I1QYA'],
  ]
  return (
    <StyledSns>
      {sns.map((v, i) => (
        <div key={i}>
          <a
            role='button'
            style={{backgroundImage: `url(${process.env.REACT_APP_KUPHIL_PUBLIC_URL + '/images/sns/' + v[0]})`}}
            href={v[1]}
            target="_blank"
            rel="noopener noreferrer"
            title="새창으로 열기" />
        </div>
      ))}
    </StyledSns>
  );
};

const StyledSns = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > div{
    width: 16%;
    padding-bottom: 16%;
    position: relative;
    margin: 0 5%;
    @media screen and (max-width: 767px){
      width: 14%;
      padding-bottom: 14%;
    }
    & > a{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-size: cover;
      background-position: center;
    }
  }
`;

export default Sns;
