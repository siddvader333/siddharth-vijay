import React from "react";
import styled from "styled-components";
import AboutWaveBackground from "../components/backgrounds/AboutWaveBackground";

const AboutSection = () => {
  return (
    <Wrapper>
      <AboutWaveBackground />
      <ContentWrapper />
    </Wrapper>
  );
};

export default AboutSection;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: 1015px;
  margin-top: 120px;
  padding: 124px 715px 0px 100px;
  display: grid;
  grid-template-rows: 220px auto;
  gap: 70px;
`;
