import React from "react";
import styled from "styled-components";
import { H2 } from "../styles/TextStyles";
import ProjectWaveBackground from "../components/backgrounds/ProjectWaveBackground";

const ProjectSection = () => {
  return (
    <Wrapper>
      <ProjectWaveBackground />
      <ProjectWrapper>
        <ProjectHeader>
          <Title>Featured Projects</Title>
        </ProjectHeader>
        <MainContent>
          <ProjectBlock src="/images/projects/spot-a-match-thumbnail.png"></ProjectBlock>
          <ProjectBlock src="/images/projects/js-playground-thumbnail.png"></ProjectBlock>
          <ProjectBlock src="/images/projects/link-hub-thumbnail.png"></ProjectBlock>
          <ProjectBlock></ProjectBlock>
        </MainContent>
      </ProjectWrapper>
    </Wrapper>
  );
};

export default ProjectSection;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ProjectWrapper = styled.div`
  max-width: 1440px;
  height: 1200px;
  margin: 0 auto;
  display: grid;
  padding: 20px 267px 20px 267px;
  grid-template-rows: 55px 900px;
  justify-content: center;
  gap: 100px;
`;

const ProjectHeader = styled.div`
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
  grid-template-columns: 450px 450px;
  grid-template-rows: 450px 450px;
  gap: 0px;
`;

const ProjectBlock = styled.img`
  width: 450px;
  height: 450px;
`;
