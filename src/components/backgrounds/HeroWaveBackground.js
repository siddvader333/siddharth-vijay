import React from "react";
import styled from "styled-components";

const HeroWaveBackground = () => {
  console.log("hero wave");
  return (
    <Wrapper>
      <Background />
      <Wave src="/images/waves/hero-wave1.svg" style={{ top: "21vh" }} />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "44vh" }} />
      <Wave src="/images/waves/hero-wave3.svg" style={{ top: "65vh" }} />
    </Wrapper>
  );
};

export default HeroWaveBackground;

const Wrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
`;
