import React from "react";
import styled from 'styled-components';

const Sns = () => {
  const handleSnsClick = (sns) => {
    switch(sns){
      case 'facebook':
        window.open(`https://www.facebook.com/KUPhilharmonic/`, );
        break;
      case 'instagram':
        window.open(`https://www.instagram.com/kuphilharmonic/?hl=ko`);
        break;
      case 'youtube':
        window.open(`https://www.youtube.com/channel/UCyG3uwmWmLt8tYNOJ3I1QYA`);
        break;
    }
  }
  return (
    <StyledSns>
      <img onClick={() => handleSnsClick('facebook')} src={process.env.PUBLIC_URL + '/images/sns/facebook.png'} />
      <img onClick={() => handleSnsClick('instagram')} src={process.env.PUBLIC_URL + '/images/sns/instagram.png'} />
      <img onClick={() => handleSnsClick('youtube')} src={process.env.PUBLIC_URL + '/images/sns/youtube.png'} />
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

  & > img{
    width: 16%;
    margin: 0 5%;
    max-width: 100px;
    &:hover{
      cursor: pointer;
    }

    @media screen and (max-width: 767px){
      width: 14%;
    }
  }
`;

export default Sns;
