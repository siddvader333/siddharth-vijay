import React from "react";
import styled from "styled-components";
import HeroWaveBackground from "../components/backgrounds/HeroWaveBackground";

const HeroSection = () => {
  return (
    <Wrapper>
      <HeroWaveBackground />
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  );
};
export default HeroSection;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  height: 100vh;
`;
