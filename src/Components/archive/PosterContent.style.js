import styled from 'styled-components';

export const PosterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  margin: 0 2vw;
  gap: 4vw;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: 412px) {
    grid-template-columns: repeat(1, auto);
    gap: 7vw 4vw;
  }
`

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;

    @media screen and (max-width: 767px) {
      gap: 2vw;
    }

    @media screen and (max-width: 412px) {
      gap: 3vw;
    }
`

export const WrapPoster = styled.div`
    width: ${(props) => props.divWidth}px;
    height: ${(props) => props.divWidth * 1.4}px;
    min-width: 160px;
    min-height: 224px;
    max-width: 200px;
    max-height: 280px;
    transition: background-size 0.3s;
    box-shadow: 2px 2px 5px #ccc;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    
    @media screen and (min-width: 768px) and (hover: hover) and (pointer: fine)  {
      &:hover {
        background-size: 103%;
      }
    }
    
    @media screen and (max-width: 767px) {
      width: ${(props) => props.divWidth * 1.4}px;
      height: ${(props) => props.divWidth * 1.96}px;
    }

    @media screen and (max-width: 412px) {
      width: ${(props) => props.divWidth * 3}px;
      height: ${(props) => props.divWidth * 4.2}px;
    }
`
export const WrapConcertNumber = styled.div`
    display: flex;
    width: 100%;
    height: 3vw;
    align-items: center;
    justify-content: center;
`

export const ConcertNumber = styled.p`
    cursor: pointer;
    font-size: clamp(1rem, 1vw, 1.5rem);
`

export const WrapPageNum = styled.div`
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PageBtn = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    font-size: 1.2rem;
    width: 40px;
    height: 40px;
`