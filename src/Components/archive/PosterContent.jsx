import {
  ConcertNumber,
  PageBtn,
  PosterContainer,
  Wrap,
  WrapConcertNumber,
  WrapPageNum,
  WrapPoster,
} from "./PosterContent.style";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useScrollTopAlways } from "../../hooks/useScrollTop";

const PosterContent = () => {
  const TOTAL_POSTERS = 44;
  const POSTERS_PER_PAGE = 6;

  const { page } = useParams();
  const navigate = useNavigate();
  const currentPage = Number(page) || 1;

  const [divWidth, setDivWidth] = useState(window.innerWidth * 0.15);

  useScrollTopAlways();

  useEffect(() => {
    const handleResize = () => {
      setDivWidth(window.innerWidth * 0.15);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(TOTAL_POSTERS / POSTERS_PER_PAGE);

  useEffect(() => {
    if (currentPage < 1 || currentPage > totalPages) {
      navigate("/archive/1");
    }
  }, [currentPage, totalPages, navigate]);

  const postersToShow = Array.from({ length: POSTERS_PER_PAGE }, (_, i) => {
    const posterNumber =
      TOTAL_POSTERS - ((currentPage - 1) * POSTERS_PER_PAGE + i);
    return posterNumber > 0 ? posterNumber : null;
  }).filter(Boolean);

  return (
    <>
      <PosterContainer>
        {postersToShow.map((posterNumber) => (
          <Wrap
            key={posterNumber}
            onClick={() => navigate(`/concert/${posterNumber}`)}
          >
            <WrapPoster
              divWidth={divWidth}
              style={{
                backgroundImage: `url(../../../images/poster/poster_${posterNumber}.jpg)`,
              }}
            />
            <WrapConcertNumber>
              <ConcertNumber>제</ConcertNumber>
              <ConcertNumber>{posterNumber}</ConcertNumber>
              <ConcertNumber>회</ConcertNumber>
            </WrapConcertNumber>
          </Wrap>
        ))}
      </PosterContainer>

      <WrapPageNum>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageBtn
            key={i}
            id={(i + 1).toString()}
            onClick={() => navigate(`/archive/${i + 1}`)}
            style={
              currentPage === i + 1
                ? {
                    color: "#555555",
                    border: "1px solid #555555",
                    borderRadius: "5px",
                  }
                : { color: "black" }
            }
          >
            {i + 1}
          </PageBtn>
        ))}
      </WrapPageNum>
    </>
  );
};

export default PosterContent;
