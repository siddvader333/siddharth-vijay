import React from "react";
import styled, { keyframes } from "styled-components";
import { H1 } from "../styles/TextStyles";
import HeroWaveBackground from "../components/backgrounds/HeroWaveBackground";

const HeroSection = () => {
  return (
    <Wrapper>
      <HeroWaveBackground />
      <ContentWrapper>
        <TextWrapper>
          Hello. <br />
          I'm Siddharth. <br />
          Welcome to my page.
        </TextWrapper>
        <ImageWrapper>
          <IllustrationWrapper src="/images/totoro/Hero-Illustration.svg" />
          <IconWrapper src="/images/icons/Explore-down-icon.svg" />
        </ImageWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
export default HeroSection;

/*Animations */
const bounceAnimation = keyframes`
  0%, 100% {
    -webkit-transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-10px);
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 155px;
  padding: 124px 715px 0px 100px;
  display: grid;
  grid-template-rows: 220px auto;
  gap: 70px;
`;

const TextWrapper = styled(H1)`
  max-width: 625px;
  font-weight: 200;
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 393px 86px auto;
  gap: 185px;
`;

const IllustrationWrapper = styled.img`
  max-width: 393px;
  height: 333px;
`;

const IconWrapper = styled.img`
  max-width: 86px;
  height: 83px;
  margin-top: 230px;
  margin-bottom: 10px;

  :hover {
    cursor: pointer;
    animation: ${bounceAnimation} 1s linear 0s infinite;
  }
`;
