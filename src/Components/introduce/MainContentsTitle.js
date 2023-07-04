import React from "react";
import styled from 'styled-components';

const MainContentsTitle = (props) => {
    const {title} = props;
    return(
        <StyledMainContentsTitle>{title}</StyledMainContentsTitle>
    );
}

export default MainContentsTitle;

const StyledMainContentsTitle = styled.p`
    font-size: 2rem;
    color: black;
    text-align: left;
    margin-bottom: 40px;

    @media screen and (max-width: 767px){
        font-size: 1.6rem;
        text-align: center;
        margin-bottom: 15px;
    }
`
