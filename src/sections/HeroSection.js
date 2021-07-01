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
          <Title>
            Hello. <br />
            I'm Siddharth. <br />
            Welcome to my page.
          </Title>
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

const fallAnimation = keyframes`
    0%{ opacity: 0; transform: translateY(-10px); filer: blur(10px);} 
    100% { opacity: 1; transform: translateY(0px); filter: blur(0px);}
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 280px 30px 0px;
  display: grid;
  grid-template-rows: 220px fit-content();
  gap: 70px;

  @media (max-width: 865px) {
    display: grid;
    grid-template-rows: 220px fit-content();
    padding: 280px 40px 100px;
    justify-items: center;
  }

  > * {
    opacity: 0;
    animation: ${fallAnimation} 1s 0.2s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const TextWrapper = styled.div`
  max-width: 625px;

  @media (max-width: 865px) {
    justify-items: center;
    text-align: center;
  }
`;

const Title = styled(H1)`
  @media (max-width: 865px) {
    font-size: 40px;
  }
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 393px 86px;
  gap: 185px;
  justify-items: center;

  @media (max-width: 865px) {
    grid-template-columns: auto;
    grid-template-rows: 252px 83px;
    gap: 60px;
  }
`;

const IllustrationWrapper = styled.img`
  width: 300px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const IconWrapper = styled.img`
  display: grid;
  padding-top: 150px;
  max-width: 86px;

  @media (max-width: 865px) {
    padding-top: 50px;
  }
  :hover {
    cursor: pointer;
    animation: ${bounceAnimation} 1s linear 0s infinite;
  }
`;
