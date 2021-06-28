import React from "react";
import styled from "styled-components";
import AboutWaveBackground from "../components/backgrounds/AboutWaveBackground";
import { H1, H2 } from "../styles/TextStyles";
import SocialIcons from "../components/common/SocialIcons";
import PrimaryButton from "../components/common/PrimaryButton";

const AboutSection = () => {
  return (
    <Wrapper>
      <AboutWaveBackground />
      <AboutWrapper>
        <AboutHeader>
          <Title>About Me</Title>
        </AboutHeader>

        <ContentWrapper>
          <MainContent>
            <TextBody>
              <span style={{ fontWeight: 800 }}>Hello!</span>
              <br />
              My name is Siddharth Vijay. <br />
              I'm a software engineer. <br />
              I'm based in Toronto. <br />
            </TextBody>
            <ButtonGroup>
              <PrimaryButton text="Get Resume" />
              <SocialIcons />
            </ButtonGroup>
          </MainContent>
          <ExtraContent>
            <AboutMeIllustration src="/images/totoro/About-illustration.svg" />
            <ExtraTextBody>
              You might be able to tell but, I really like anime. How many
              Totoros can you find?
            </ExtraTextBody>
          </ExtraContent>
        </ContentWrapper>
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
  height: 1015px;
  margin-top: 120px;
  padding: 0;
  display: grid;
  grid-template-rows: 180px auto;
  gap: 75px;
`;

const AboutHeader = styled.div`
  padding: 43px 1058px 83px 105px;
`;

const Title = styled(H1)`
  width: 277px;
  height: 54px;
`;

const ContentWrapper = styled.div`
  padding: 0px 70px 0px 30px;
  display: grid;
  grid-template-rows: 215px auto;
  gap: 50px;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 551px auto;
  gap: 186px;
  padding: 0px 0px 0px 92px;
`;

const TextBody = styled(H2)``;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  gap: 40px;
  align-content: center;
`;

const ExtraContent = styled.div`
  display: grid;
  grid-template-columns: 750px auto;
  gap: 55px;
  padding: 0;
`;

const AboutMeIllustration = styled.img`
  width: 750px;
  height: 309px;
`;
const ExtraTextBody = styled(H2)`
  padding-top: 106px;
`;
