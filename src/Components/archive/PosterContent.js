import React from "react";
import styled from 'styled-components';

const PosterContent = () => {
    return(
        <Wrap>
            <WrapPoster>
            <Poster src="../../../images/thumbnail/exam.jpg" alt="더미 이미지"/>
            </WrapPoster>
            <WrapConcertNumber>
                <ConcertNumber>제</ConcertNumber>
                <ConcertNumber>0</ConcertNumber>
                <ConcertNumber>회</ConcertNumber>
            </WrapConcertNumber>
        </Wrap>
        
    )
}

export default PosterContent;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const WrapPoster = styled.div`
    width: 200px;
    height: 370px;
    box-shadow: 5px 5px 5px #999;
    
    @media screen and (max-width: 767px){
        width: 120px;
        height: 220px;
    }
`

const Poster = styled.img`
    width: 200px;
    height: 370px;
    cursor: pointer;
    
    &:hover{  
        width: 202px;
        height: 372px;
    }
    
    @media screen and (max-width: 767px){
        width: 120px;
        height: 220px;

        &:hover{  
            width: 121px;
            height: 221px;
        }
    }
`
const WrapConcertNumber = styled.div`
    display: flex;
    width: 200px;
    height: 30px;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 767px){
        width: 120px;
        height: 20px;
    }
`

const ConcertNumber = styled.p`
    cursor: pointer;
`