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
  max-width: 1234px;
  margin: 0 auto;
  display: grid;
  padding: 120px 30px;
  gap: 100px;
  grid-template-rows: 55px fit-content();

  @media (max-width: 450px) {
    gap: 50px;
  }
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
  @media (max-width: 450px) {
    width: 100%;
    font-size: 25px;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 367px auto;
  gap: 75px;

  @media (max-width: 1210px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    gap: 50px;
    justify-items: center;
    text-align: center;
    > * {
      :nth-child(1) {
        order: 2;
      }
      :nth-child(2) {
        order: 1;
      }
    }
  }
`;

const WorkIllustration = styled.img`
  padding-top: 250px;

  @media (max-width: 1210px) {
    padding-top: 50px;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
