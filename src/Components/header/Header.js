import React, {useState} from "react";
import styled from 'styled-components';
import Menus from './Menus';
import ShortMenus from './ShortMenus';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [shortMenusOpen, setShortMenusOpen] = useState(false);
  const navigate = useNavigate();

  const moveHome = () => {
    navigate(`/`);  
  }

  return (
    <StyledHeader>
      <HeaderContent>
        <HeaderLogo>
          <Logo src={process.env.PUBLIC_URL + '/images/logo.png'} onClick={moveHome} />
        </HeaderLogo>
        <HeaderDesktop>
        <Menus />
        </HeaderDesktop>
        <HeaderPhone>
        <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => {setShortMenusOpen(true)}}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </StyledSvg>
          <ShortMenus shortMenusOpen={shortMenusOpen} setShortMenusOpen={setShortMenusOpen} />
          </HeaderPhone>
      </HeaderContent>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(235, 235, 235);
`;
const HeaderContent = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0;

  @media screen and (max-width: 767px){
    width: 90%;
    max-width: 400px;
    height: 40px;
  }
`;

const HeaderLogo = styled.div`
  height: auto;
  width: auto;
`;
const Logo = styled.img`
  height: 25px;
  &:hover{
    cursor: pointer;
  }
`;
const HeaderDesktop = styled.div`
  @media screen and (max-width: 767px){
    display: none;
  }
`;
const HeaderPhone = styled.div`
  display: none;
  @media screen and (max-width: 767px){
    display: block;
  }
`;
const StyledSvg = styled.svg`
  cursor: pointer;
  
`;

export default Header;
