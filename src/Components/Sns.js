import React from "react";
import styled from "styled-components";

const Sns = () => {
  const movePage = (str) => {
    if(str === 'instagram'){
      window.open('https://www.instagram.com/kuphilharmonic/?hl=ko');
    } else {
        window.open('https://www.facebook.com/KUPhilharmonic/');
    }
  }
  return (
    <StyledSns>
      <p>KUPHIL SNS</p>
      <div>
        <Content>
          <img src={process.env.PUBLIC_URL + "/images/sns/instagram.png"} onClick={() => movePage('instagram')} />
          <p>인스타그램</p>
        </Content>
        <Content>
          <img src={process.env.PUBLIC_URL + "/images/sns/facebook.png"} onClick={() => movePage('facebook')} />
          <p>페이스북</p>
        </Content>
        <Content>
          <img src={process.env.PUBLIC_URL + "/images/sns/gmail.png"} />
          <p>kuphilharmonic@gmail.com</p>
        </Content>
      </div>
    </StyledSns>
  );
};

const StyledSns = styled.div`
  width: 100%;
  & > p {
    font-size: 24px;
  }
`;

const Content = styled.div`
  & > img {
    width: 70px;
    margin-top: 20px;
    margin-bottom: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  &:last-child {
    & > img {
      &:hover {
        cursor: default;
      }
    }
  }
  & > p {
    font-size: 18px;
  }
`;

export default Sns;
