import React, { useEffect, useState } from "react";

import { getHistoryData } from "../../utils/api";
import styled from 'styled-components';

const HistoryContent = () => {
    const [historyData, setHistoryData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getHistoryData();
            setHistoryData(response.data);
            setIsLoading(false);
          } catch (error) {
            console.error(error);
            setIsLoading(false);
          }
        };
    
        fetchData();
        
      }, []);


      const renderComments = (comments) => {
        return comments.reverse().map(comment => (
            <WrapComment key={comment.context}>
                <Date>{comment.month}월 {comment.day ? comment.day + '일' : ''}</Date>
                <Text>{comment.context}</Text>
            </WrapComment>
        ));
    };

    if (isLoading) return <>Loading...</>

    const years = Array.from(new Array(21), (_, index) => 2024 - index);

    const groupCommentsByYear = (year) => {
        let dataByYear = [];
        
        for (let i = 0; i < historyData.length; i++) {
            if (historyData[i].year === year) {
                dataByYear.push(historyData[i]);
            }
        }

        return renderComments(dataByYear);
    };

    return (
        <>
            <WrapContent>
                {years.map(year => (
                    <div key={year}>
                        <Year>{year}</Year>
                        <WrapComments>{groupCommentsByYear(year)}</WrapComments>
                    </div>
                ))}
            </WrapContent>
        </>
    );
}

export default HistoryContent;


const WrapContent = styled.section`
`

const WrapComments = styled.div`
    height: fit-content;
    margin: 30px 0 80px 20px;
    padding: 5px 0 5px 10px;
    border-left: 3px solid #ccd0d3;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 767px){
        height: auto;
        padding-left: 0;
        margin: 10px 0 80px 0px;
        border: none;
    } 
`

const WrapComment = styled.div`
    display: flex;

    @media screen and (max-width: 767px){
        height: 35px;
        flex-direction: column;
        margin: 10px 0;
        justify-content: space-between;
    } 
`

const Year = styled.p`
    font-size: 30px;
    font-weight: bold;
    text-align: left;

    @media screen and (max-width: 767px){
        font-size: 16px;
        text-align: center;
    } 
`

const Date = styled.p`
    font-size: 15px;
    width: 100px;
    font-weight: bold;
    margin: 0 10px 0 20px;
    text-align: left;

    @media screen and (max-width: 767px){
        font-size: 13px;
        text-align: center;
        margin: 0;
        width: auto;
    } 
`

const Text = styled.p`
    font-size: 15px;

    @media screen and (max-width: 767px){
        font-size: 13px;
    } 
`