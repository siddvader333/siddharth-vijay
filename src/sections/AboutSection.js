import React from "react";
import styled from "styled-components";
import { BodyMain, H2 } from "../styles/TextStyles";
import SocialIcons from "../components/common/SocialIcons";
import PrimaryButton from "../components/common/PrimaryButton";
import AboutWaveBackground from "../components/backgrounds/AboutWaveBackground";
const AboutSection = () => {
  return (
    <Wrapper>
      <AboutWaveBackground />
      <AboutWrapper>
        <AboutHeader>
          <Title>About Me</Title>
        </AboutHeader>

        <MainContent>
          <TextBody>
            <span style={{ fontWeight: 800 }}>Hello! </span>
            My name is Siddharth Vijay and I am a software engineer based in
            Toronto. I just graduated from the University of Toronto with a
            Computer Engineering Degeree.
            <br />
            <br />
            My passion for coding started in 9th grade when I took an intro to
            Mobile App Programming course and was so astonished by seeing
            something I coded come to life that I wanted to chase that feeling.
            I love working on innovative and interesting projects and seeing the
            design come to fruition.
          </TextBody>
          <AboutMeIllustration src="/images/totoro/About-illustration.svg" />
        </MainContent>

        <ButtonGroup>
          <PrimaryButton text="Get Resume" />
          <SocialIcons />
        </ButtonGroup>
      </AboutWrapper>
    </Wrapper>
  );
};

export default AboutSection;

const Wrapper = styled.div`
  overflow: hidden;
`;

const AboutWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 120px 141px 380px;
  display: grid;
  grid-template-rows: 55px 320px auto;
  gap: 115px;
`;

const AboutHeader = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`;

const Title = styled(H2)`
  width: 277px;
  height: 54px;
  text-align: center;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 550px auto;
  gap: 100px;
`;

const AboutMeIllustration = styled.img`
  width: 498px;
  align-self: center;
  padding-top: 35px;
  padding-bottom: 35px;
`;

const TextBody = styled(BodyMain)``;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-rows: 77px auto;
  gap: 50px;
  align-content: center;
  justify-content: center;
  height: 180px;
`;
