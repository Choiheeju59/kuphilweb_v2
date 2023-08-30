import React, { useEffect } from "react";
import { useState } from "react";
import styled from 'styled-components';

const Tip = () => {
  const [tip, setTip] = useState([
    `2003년 11월 3일은 (현) 쿠필, (전) 세레나데의 창립일입니다.`,
    `쿠필의 전 명칭은 '세레나데'입니다.`,
    `쿠필에는 모두가 인정하는 실력을 가진 '비올라 마스터'가 있습니다.`,
    `스트라빈스키의 "불새"를 들으면서 졸다가는 "미왕 카셰이 무리들의 지옥의 춤" 도입부에 놀라서 고함을 지를 수도 있습니다.`,
    `오보에를 잘못 불면 태평소 소리가 납니다. 저도 알고 싶지 않았어요...`,
    `영화 "불멸의 연인"은 베토벤의 각종 썰들을 엮어 만들어졌습니다.`,
    `브람스는 절친했던 바이올리니스트 요아힘과 의절한 후, 화해를 위해 "바이올린과 첼로를 위한 더블 콘체르토"를 작곡했다고 합니다.`,
    `바로크 시대에 유행한 반주 기법인 통주 저음은 왼손 악보만 있으며 연주자 재량대로 화음이나 꾸밈음을 넣어 연주를 하게 되어있습니다.`,
    `피에르 불레즈는 젊은 시절 지휘를 할 때 선글라스를 착용하고 지휘하였는데, 눈이 안좋아서가 아니라 멋져보여서 그랬다고 합니다.`,
    `토스카니니보다 많은 지휘료를 요구한 지휘자가 있었는데, 토스카니니는 그 연주회에서 무료로 지휘하여 1리라만 받게 되었습니다.`,
    `클라우디오 아바도는 민주적인 오케스트라를 표방하였는데, 덕분에 리허설 시간이 몇배로 늘어나 단원들의 불만이 상당했다고 합니다.`,
    `토스카니니는 리허설 도중 단원들의 연주가 맘에 들지 않으면 지휘봉을 부러뜨리고 악보를 찢는 등 과격하게 대응했다고 합니다.`,
    `파가니니는 당초 베를리오즈에게 비올라협주곡을 의뢰하였으나 협주곡에 대해 문외한이었던 베를리오즈는 교향곡을 써주었습니다.`,
    `드뷔시는 학교에 다니며 괴작을 일삼아 주변에서 걱정하였으나 장학금이 필요하자 지극히 멀쩡한 작품을 써서 한번에 수상하였습니다.`,
    `이탈리아에서 화려한 삶을 보낸 비발디는 말년에 빈의 저렴한 숙소에서 사망했습니다. 근데 지금 그 숙소는 굉장히 비쌉니다.`,
  ]);
  const [randNum, setRandNum] = useState(0);

  useEffect(() => {
    // getTip();
    let _randNum = Math.floor(Math.random() * tip.length);
    setRandNum(_randNum);
  },[]);
  
  // api로 랜덤 하나 들고 오기
  // const getTip = async () => {

  // };
  const handleReloadTip = () => {
    // getTip();
    let _randNum = Math.floor(Math.random() * tip.length);
    setRandNum(_randNum);
  }

  return (
    <StyledTip>
      <Reload onClick={handleReloadTip}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
        <p>새로고침</p>
      </Reload>
      <TipStatement>
        {tip[randNum]}
      </TipStatement>
    </StyledTip>
  );
};
const StyledTip = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Reload = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 12px;
  display: flex;
  justify-content: end;
  flex-direction: row;
  align-items: center;
  font-size: 12px;

  // 드래그 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > svg{
    stroke: black;
    padding-right: 3px;
  }
  &:hover{
    cursor: pointer;
    color: #aaaaaa;
    & > svg{
      stroke: #aaaaaa;
    }
  }
`;
const TipStatement = styled.div`
  width: 100%;
  padding: 32px 20px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  line-height: 1.2;
`;

export default Tip;
