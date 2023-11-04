import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';

const Slide = () => {
  const [image, setImage] = useState([
    '/images/main/slide1.png',
    '/images/main/slide2.png',
    '/images/main/slide3.png',
  ]);
  const imageNum = useRef(1);
  const slideRef = useRef(null);

  useEffect(() => {
    const newImage = [...image];
    newImage.unshift(newImage[newImage.length - 1]);
    newImage.push(newImage[1]);
    setImage(newImage);
    const slider = slideRef.current;
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-100%)`;
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      imageNum.current += 1;
      const slider = slideRef.current;
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(-${imageNum.current * 100}%)`;

      setTimeout(() => {
        slider.style.transition = 'none';
      }, 1000);

      setTimeout(() => {
        if(imageNum.current === 3){
          slider.style.transform = `translateX(-0%)`;
          imageNum.current = 0;
        }
      }, 2000);

    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  },[image])

  return (
    <StyledSlide>
      <SliderContainer ref={slideRef}>
        {image.map((v,i) => 
          <SlideList key={i}>
            <img src={v} alt={'Slide' + i + 1} />
          </SlideList>)}
      </SliderContainer>
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
  width: 100%;
  height: 100%;
  display: flex;
  transition: none;
  transform: translateX(-100%);
`;

const SlideList = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Slide;