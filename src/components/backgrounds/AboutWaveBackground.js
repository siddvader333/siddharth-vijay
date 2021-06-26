import React from "react";
import styled, { keyframes } from "styled-components";

const HeroWaveBackground = () => {
  return (
    <Wrapper>
      <Background />
      <HeaderWave
        src="/images/waves/about-header-wave.svg"
        style={{ top: "120px" }}
      />
      <Wave src="/images/waves/about-wave1.svg" style={{ top: "305px" }} />
      <Wave src="/images/waves/about-wave2.svg" style={{ top: "515px" }} />
      <Wave src="/images/waves/about-wave3.svg" style={{ top: "886px" }} />
    </Wrapper>
  );
};

export default HeroWaveBackground;

const waveGentleBounce = keyframes`
  0%, 100% {
    -webkit-transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-5px);
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 900px;
  z-index: -1;
`;

const HeaderWave = styled.img`
  position: absolute;
  z-index: -1;
  animation: ${waveGentleBounce} 3s linear 0s infinite;
  width: 100%;
  height: 180px;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;

  animation: ${waveGentleBounce} 3s linear 0s infinite;
  @media (min-width: 1440px) {
    width: 100%;
  }
`;
