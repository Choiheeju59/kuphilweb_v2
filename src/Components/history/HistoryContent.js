import React from "react";
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query'

const HistoryContent = () => {
    const YearArr = [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];


    // Dummy Data로 형태 잡기
    // 실제 DB에서 가져올 때는 Typescript로 Migration해서 type을 정의해 전체 -> 연도 -> 해당연도 연혁 순으로 Array에 담아준 뒤 활용할 계획
    // 혹은 {year: 2003, date: '02월', text: '세레나데 창단'} 형식으로 가져온다면 filter를 활용해서 나열할 계획

    
    const getComments = async () => {
        return await (await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")).json();
      };
    
    
    const { data, isLoading, error } = useQuery(["comments"], getComments);

    if (isLoading) return <div>'Loading...'</div>;

    if (error) return <div>'Error..'</div>
    
    if(data !== undefined) {
      let comments = data.map(
        (comment) =>
        <WrapComment>
            <Date>00일</Date>
            <Text key={comment.name}>{comment.name}</Text>
        </WrapComment>);
       
      return (
        <>
            <WrapContent>
                {YearArr.map((v) => (
                    <>
                        <Year key={v}><a name={v}>{v}</a></Year>
                        <WrapComments>{comments}</WrapComments>
                    </>
                 ))}
            </WrapContent>
        </>
      )
    }
    
    return(
        <WrapContent/>
    )
}

export default HistoryContent;

const WrapContent = styled.section`
`

const WrapComments = styled.div`
    height: 150px;
    margin: 30px 0 80px 20px;
    padding: 5px 0 5px 10px;
    border-left: 3px solid #ccd0d3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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