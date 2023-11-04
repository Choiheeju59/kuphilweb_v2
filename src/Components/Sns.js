import React from "react";
import styled from "styled-components";

const Sns = () => {
  const movePage = (str) => {
    if(str === 'instagram'){
      window.open('https://www.instagram.com/kuphilharmonic/?hl=ko');
    } else if(str === 'facebook'){
        window.open('https://www.facebook.com/KUPhilharmonic/');
    } else{
      window.open('https://www.youtube.com/channel/UCyG3uwmWmLt8tYNOJ3I1QYA');
  }
  }
  return (
    <StyledSns>
        <Content>
          <img src={process.env.PUBLIC_URL + "/images/sns/instagram.png"} onClick={() => movePage('instagram')} />
        </Content>
        <Content>
          <img src={process.env.PUBLIC_URL + "/images/sns/facebook.png"} onClick={() => movePage('facebook')} />
        </Content>
        <Content>
          <img src={process.env.PUBLIC_URL + "/images/sns/youtube.png"} onClick={() => movePage('youtube')} />
        </Content>
    </StyledSns>
  );
};

const StyledSns = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 60px 0;
  @media screen and (max-width: 767px){
    justify-content: space-evenly;
    margin: 30px 0;
  }
`;

const Content = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 40px;
  & > img {
    width: 100%;
    &:hover {
      cursor: pointer;
    }
  }


  @media screen and (max-width: 767px){
    width: 50px;
    max-height: 50px;
    height: auto;
    margin: 0 20px;
  }
`;

export default Sns;
