import { ConcertNumber, PageBtn, PosterContainer, Wrap, WrapConcertNumber, WrapPageNum, WrapPoster } from "./PosterContent.style";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

const PosterContent = () => {
    const { page } = useParams();
    const navigate = useNavigate();

    const [divWidth, setDivWidth] = useState(window.innerWidth * 0.15);
    
      useEffect(() => {
        const handleResize = () => {
          setDivWidth(window.innerWidth * 0.15);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      let imageName = [42, 36, 30, 24, 18, 12, 6];
      let indexArr = [0, 1, 2, 3, 4, 5];
      let indexArr2 = [0, 1, 2, 3, 4, 5]
      
    return(
        <>
            <PosterContainer>
            {page !== String(imageName.length) ? indexArr.map((elem, idx) => {
        return(
            <Wrap key={idx} onClick={() => navigate(`/concert/${imageName[Number(page)-1]-elem}`)}>
                <WrapPoster divWidth={divWidth} style={{backgroundImage: `url(../../../images/poster/poster_${imageName[Number(page)-1]-elem}.jpg)` }}/>
                <WrapConcertNumber>
                    <ConcertNumber>제</ConcertNumber>
                    <ConcertNumber>{imageName[Number(page)-1]-elem}</ConcertNumber>
                    <ConcertNumber>회</ConcertNumber>
                </WrapConcertNumber>
            </Wrap>
            )}
            ) : indexArr2.map((elem, idx) => {
        return(
            <Wrap key={idx} onClick={() => navigate(`/concert/${imageName[Number(page)-1]-elem}`)}>
                <WrapPoster divWidth={divWidth} style={{backgroundImage: `url(../../../images/poster/poster_${imageName[Number(page)-1]-elem}.jpg)` }}/>
                <WrapConcertNumber>
                    <ConcertNumber>제</ConcertNumber>
                    <ConcertNumber>{imageName[Number(page)-1]-elem}</ConcertNumber>
                    <ConcertNumber>회</ConcertNumber>
                </WrapConcertNumber>
            </Wrap>
            )}
        )}
            </PosterContainer>
            <WrapPageNum>
                {imageName.map((elem, idx) => {
                    return(
                        <PageBtn key={idx} name="page" id={(idx + 1).toString()} onClick={() => navigate(`/archive/${idx + 1}`)} style={(idx + 1).toString() === page ? { fontWeight: 'bold' } : {}}>{idx + 1}</PageBtn>
                    )
                })}
            </WrapPageNum>
        </>
    )
}

export default PosterContent;