import React from "react";
import styled, { keyframes } from "styled-components";

const HeroWaveBackground = () => {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/about-header-wave.svg"
        style={{ top: "1047px", visibility: "hidden" }}
      />
      <Wave src="/images/waves/about-wave1.svg" style={{ top: "396px" }} />
      <Wave src="/images/waves/about-wave2.svg" style={{ top: "574px" }} />
      <Wave src="/images/waves/about-wave3.svg" style={{ top: "1049px" }} />
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

const Wave = styled.img`
  position: absolute;
  z-index: -1;

  animation: ${waveGentleBounce} 3s linear 0s infinite;
  @media (min-width: 1440px) {
    width: 100%;
  }
`;
