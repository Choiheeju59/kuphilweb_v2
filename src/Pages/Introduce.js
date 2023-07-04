import React, {useState} from "react";

import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';
import MainContentsTitle from '../Components/introduce/MainContentsTitle';
import TitleGradient from '../Components/TitleGradient';
import styled from 'styled-components';

const Introduce = () => {
    const [MapFrontIsOn, setMapFrontIsOn] = useState(true);
    const [MapLibraryIsOn, setMapLibraryIsOn] = useState(false);
    const [MapBackIsOn, setMapBackIsOn] = useState(false);

    const MapFront = () => {
        let map_front = document.getElementById("map_front");
        map_front.style.color = "#000000";
        let map_library = document.getElementById("map_library");
        map_library.style.color = "#989898";
        let map_back = document.getElementById("map_back");
        map_back.style.color = "#989898";
        setMapFrontIsOn(true);
        setMapLibraryIsOn(false);
        setMapBackIsOn(false);
    }

    const MapLibrary = () => {
        let map_front = document.getElementById("map_front");
        map_front.style.color = "#989898";
        let map_library = document.getElementById("map_library");
        map_library.style.color = "#000000";
        let map_back = document.getElementById("map_back");
        map_back.style.color = "#989898";
        setMapFrontIsOn(false);
        setMapLibraryIsOn(true);
        setMapBackIsOn(false);
    }

    const MapBack = () => {
        let map_front = document.getElementById("map_front");
        map_front.style.color = "#989898";
        let map_library = document.getElementById("map_library");
        map_library.style.color = "#989898";
        let map_back = document.getElementById("map_back");
        map_back.style.color = "#000000";
        setMapFrontIsOn(false);
        setMapLibraryIsOn(false);
        setMapBackIsOn(true);
    }
    
    return(
        <>
            <Wrap>
                <Header/>
                <Contents>
                    <TitleGradient
                        title="소개"
                        title2="연혁"
                        explain={"건국대학교 아마추어 오케스트라 동아리 'KUphil'입니다.\nKUphil의 전반적인 활동 내용 및 위치를 소개합니다."}
                        link="/introduce"
                        link2="/history"
                        color="linear-gradient(91.48deg, rgba(255, 224, 196, 0.44) 0%, #FFFBD9 100%)"
                    />
                    <MainContents>
                        <MainContentsTitle
                            title="인사말"
                        />
                        <Welcome>
                            <ImgProfessor src="./images/introduce/professor.jpg" alt="교수님 사진"/>
                            <div>
                                <ProfessorWelcomeTitle>
                                    "건국인들의 열정이 모여 만들어진 오케스트라, KUPhil을 소개합니다."
                                </ProfessorWelcomeTitle>
                                <br/>
                                <ProfessorWelcome>건국대학교 내 아마추어 오케스트라 동아리 KU Philharmonic orchestra(이하 KUPhil)는 정기연주회, 음악캠프, 창립제, 병원 연주 등 활발한 연주 활동을 지속하며 대학 문화 내 클래식 음악 전파를 위해 노력하고 있습니다.</ProfessorWelcome>
                                <br/><br/>
                                <ProfessorWelcome>2003년, 저는 클래식 음악에 대한 애정을 표출하기 위해 10여 명의 건국대학교 재학생들과 함께 오케스트라 동아리 'Serenade'를 결성했습니다. 소규모로 시작했던 Serenade에서의 모임은 해를 거듭하며 점차 그 규모를 키워 나갔습니다. 그리고 창립 10주년을 맞은 해인 2013년 3월, Serenade는 'KUPhil'로 개칭하며 새로운 시작을 맞았습니다.</ProfessorWelcome>
                                <br/><br/>
                                <ProfessorWelcome>비록 시간이 흐르며 우리를 둘러싼 많은 것들이 바뀌어 갔지만, 클래식 문화의 저변 확대와 건국대학교 발전에 이바지하고자 했던 창립 당시의 목표는 조금도 달라지지 않았습니다. 여러 격변을 겪으면서도 KUPhil은 임원들의 헌신과 희생, 단원들의 끈기어린 노력, 그리고 졸업생들의 아낌없는 후원에 힘입어 발전을 거듭하고 있습니다.</ProfessorWelcome>
                                <br/><br/>
                                <ProfessorWelcome>이들을 응원해 주시는 모든 분들께 감사와 축복의 인사를 드리며, 앞으로도 꾸준히 활동을 이어갈 KUPhil을 사랑으로 지켜봐 주시길 부탁드립니다.</ProfessorWelcome>
                                <br/><br/><br/>
                                <Closing>건국대학교 필하모닉 오케스트라 KUPhil <br/> 지도교수 이형식</Closing>
                            </div>
                        </Welcome>
                    </MainContents>
                    <MainContents>
                        <MainContentsTitle
                            title="ABOUT KUPhil"
                        />
                        <ImgIntroduce src="./images/introduce/introduce_2.png"/>
                        <ImgDeskTopIntroduce src="./images/introduce/introduce_1.png"/>
                    </MainContents>
                    <MainContents>
                        <MainContentsTitle
                            title="찾아오시는 길"
                        />
                        <Directions>
                            <WrapWay>
                                <Way type="button" defaultValue={"수의과대학 (정문)"} onClick={MapFront} id="map_front" style={{color: "#000000"}}/>
                                <Way type="button" defaultValue={"도서관 (중문)"} onClick={MapLibrary} id="map_library" style={{color: "#989898"}}/>
                                <Way type="button" defaultValue={"경영대학 (후문)"} onClick={MapBack} id="map_back" style={{color: "#989898"}}/>
                            </WrapWay>
                            {
                                MapFrontIsOn &&
                                <Map src="./images/introduce/map_front.jpg" alt="정문에서 동아리방 오는 길 이미지"/>
                            }
                            {
                                MapLibraryIsOn &&
                                <Map src="./images/introduce/map_library.jpg" alt="중문에서 동아리방 오는 길 이미지"/>
                            }
                            {
                                MapBackIsOn &&
                                <Map src="./images/introduce/map_back.jpg" alt="후문에서 동아리방 오는 길 이미지"/>
                            }
                            <LocationInfo>
                                쿠필 동아리방은 <Location>제2학생회관 지하 B117호</Location>입니다.<br/>
                                제2학생회관 지하로 내려오는 계단은 홍예교 앞 또는 공과대학 맞은편 노천극장 입구에 있습니다.
                            </LocationInfo>
                        </Directions>
                    </MainContents>
                    
                </Contents>
            </Wrap>
            <Footer/>
        </>
    );
}

const Wrap = styled.div`
  width: 100%;
  height: auto;

  min-height: calc(100vh - 202px);
  @media screen and (max-width: 767px){
    min-height: calc(100vh - 152px);
  }
`;

const Contents = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 767px){
    max-width: 400px;
  }
`;

const MainContents = styled.div`
    width: 84%;
    padding: 0 8%;
    margin: 70px auto;
`;

const Welcome = styled.div`
    margin: 30px auto;
    padding: 0 1.5%;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 767px){
    display: block;
}  
`

const ImgProfessor = styled.img`
  width: 180px;
  border-radius: 70%;

  @media screen and (max-width: 767px){
    width: 150px;
    margin-bottom: 20px;
}
`

const ProfessorWelcomeTitle = styled.article`
width: 100%;
font-size: 1.3rem;
    margin-left: 50px;
    line-height: 180%;
  text-align: left;
  font-weight: bold;

  @media screen and (max-width: 767px){
    font-size: 1rem;
    margin-left: 0;
}
`

const ProfessorWelcome = styled.p`
width: 100%;
font-size: 1.1rem;
    margin-left: 50px;
    line-height: 150%;
  text-align: left;

  @media screen and (max-width: 767px){
    font-size: 0.8rem;
    margin-left: 0;
}
`

const Closing = styled.p`
width: 100%;
font-size: 1.1rem;
margin-left: 50px;
  text-align: right;
  line-height: 150%;

  @media screen and (max-width: 767px){
    font-size: 0.8rem;
    margin-left: 0;
}
`

const ImgIntroduce = styled.img`
    display: none;

    @media screen and (max-width: 767px){
        width: 80%;
    display: block;
    margin: 0 auto;
    max-width: 600px;
    }
`

const ImgDeskTopIntroduce = styled.img`
width: 80%;
display: block;
margin: 0 auto;
max-width: 800px;

@media screen and (max-width: 767px){
    display: none;
}
`

const Directions = styled.div`

`

const WrapWay = styled.div`
margin: 30px auto;
display: flex;
justify-content: space-evenly;
`

const Way = styled.input`
    border: none;
    cursor: pointer;
    background: #FFFFFF;
    font-weight: bold;
    font-size: 1.1rem;

    @media screen and (max-width: 767px){
        font-size: 0.8rem;
    }
`

const Map = styled.img`
width: 500px;

@media screen and (max-width: 767px){
    width: 300px;
}
`

const LocationInfo = styled.div`
margin: 30px auto;
line-height: 30px;
font-size: 1rem;

    @media screen and (max-width: 767px){
        font-size: 0.7rem;
        line-height: 20px;
    }
`

const Location = styled.span`
font-size: 1rem;
font-weight: bold;

    @media screen and (max-width: 767px){
        font-size: 0.7rem;
    }
`

export default Introduce;