import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const movePolicyPage = () => {
    navigate(`/policy`);
  }

  return (
    <StyledFooter>
      <FooterContent>
        <Content>
          <div>
            <FooterPolicy onClick={movePolicyPage}>이용 약관</FooterPolicy>
            <FooterExplain>
              서울특별시 광진구 능동로 120, 제2학생회관 B117호
              <br />
              © KUPHIL. All rights reserved.
            </FooterExplain>
          </div>
          <DesktopContent>
            <img height="80px" src={process.env.PUBLIC_URL + '/images/kuphil_logo.png'} />
            <img height="80px" src={process.env.PUBLIC_URL + '/images/konkuk_logo.png'} />
          </DesktopContent>
        </Content>
      </FooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: 100%;
  border-top: 1px solid rgb(235, 235, 235);
`;
const FooterContent = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0;

  @media screen and (max-width: 767px){
    width: 90%;
    max-width: 400px;
    height: 120px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px){
    justify-content: center;
  }
`;
const FooterPolicy = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: start;
  margin-bottom: 10px;
  @media screen and (max-width: 767px){
    text-align: center;
    font-size: 12px;
  }
`;
const FooterExplain = styled.p`
  font-size: 14px;
  line-height: 1.2;
  text-align: start;
  @media screen and (max-width: 767px){
    text-align: center;
    font-size: 12px;
  }
`;
const DesktopContent = styled.div`
  @media screen and (max-width: 767px){
    display: none;
  }
`;

export default Footer;
