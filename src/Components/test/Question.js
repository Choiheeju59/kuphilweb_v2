import React from "react";
import styled from 'styled-components';

const Question = (props) => {
  const { id, question } = props;

  return (
    <>
      <StyledQuestion>
        {
          id !== 0 ?
            <>{id}. </>
            :
            null
        }
        {question.text}
      </StyledQuestion>
    </>
  );
};

const StyledQuestion = styled.div`
  font-size: 25px;

  @media screen and (max-width: 767px){
    font-size: 20px;
}
`;

export default Question;
