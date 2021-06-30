import React from "react";
import styled from "styled-components";
import { H2 } from "../styles/TextStyles";
import WorkExperienceDisplay from "../components/work/WorkExperienceDisplay";
import WorkWaveBackground from "../components/backgrounds/WorkWaveBackground";

const WorkSection = () => {
  return (
    <Wrapper>
      <WorkWaveBackground />
      <WorkWrapper>
        <WorkHeader>
          <Title>Work Experience</Title>
        </WorkHeader>

        <MainContent>
          <WorkIllustration src="/images/totoro/Work-Illustration.svg" />
          <WorkExperienceDisplay />
        </MainContent>
      </WorkWrapper>
    </Wrapper>
  );
};

export default WorkSection;

const Wrapper = styled.div`
  overflow: hidden;
`;

const WorkWrapper = styled.div`
  max-width: 1440px;
  height: 1200px;
  margin: 0 auto;
  display: grid;
  padding: 70px 97px 0px;
  grid-template-rows: 55px 550px;
  gap: 100px;
`;

const WorkHeader = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
`;

const Title = styled(H2)`
  width: 383px;
  height: 54px;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 367px auto;
  gap: 75px;
`;

const WorkIllustration = styled.img`
  padding-top: 250px;
`;
