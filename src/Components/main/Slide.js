import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import useInterval from '../../hooks/useInterval';

const Slide = () => {
  const [image, setImage] = useState([
    '/images/main/banner1.png',
    '/images/main/banner2.png',
  ]);
  const [imageNum, setImageNum] = useState(0);
  const SEC = 5000;
  const [delay, setDelay] = useState(SEC);

  useInterval(() => {
    imageNum >= image.length - 1 ? setImageNum(0) : setImageNum(prev => prev + 1);
  }, delay);
  
  useEffect(() => {
    if(delay === null){
      setDelay(SEC);
    }
  }, [delay])

  const leftMove = () => {
    setDelay(null);
    imageNum <= 0 ? setImageNum(image.length - 1) : setImageNum(prev => prev - 1);
  }
  const rightMove = () => {
    setDelay(null);
    imageNum >= image.length - 1 ? setImageNum(0) : setImageNum(prev => prev + 1);
  }

  const moveSlide = (num) => {
    setDelay(null);
    setImageNum(num);
  }

  return (
    <StyledSlide>
      <SliderContainer slidenum={image.length}>
        {image.map((v,i) => 
          <SlideList key={i} leftvalue={i} slidenum={image.length} style={{opacity: imageNum === i ? 1 : 0}}>
            <img src={process.env.REACT_APP_KUPHIL_PUBLIC_URL + v} alt="쿠필 웹사이트" />
          </SlideList>)}
      </SliderContainer>
      <SlideMove>
        {/* <SlideArrow onClick={leftMove}>＜</SlideArrow><SlideArrow onClick={rightMove}>＞</SlideArrow> */}
        <SlideBar active={0 === imageNum} onClick={() => moveSlide(0)}></SlideBar>
        <SlideBar active={1 === imageNum} onClick={() => moveSlide(1)}></SlideBar>
      </SlideMove>
    </StyledSlide>
  );
};

const StyledSlide = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const SliderContainer = styled.div`
  width: ${props => props.slidenum * 100}%;
  height: 100%;
  display: flex;
  position: relative;
`;

const SlideList = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  left: -${props => props.leftvalue * 100 / props.slidenum}%;
  flex-shrink: 0;
  transition: opacity 500ms, visibility 500ms;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SlideMove = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 5px 15px;
  display: flex;
`;
const SlideArrow = styled.span`
  color: white;
  margin: 0 5px;
  &:hover{
    cursor: pointer;
  }
`;

const SlideBar = styled.div`
  background-color: ${props => props.active ? '#FFA800' : '#ffffff'};
  width: 80px;
  height: 5px;
  margin: 0 5px;
  &:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 767px){
    display: none;
  }
`;

export default Slide;