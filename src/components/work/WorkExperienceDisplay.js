import React from "react";
import styled from "styled-components";
import Tab from "../common/Tab";
import ContentCard from "../common/ContentCard";
import WorkExperienceLayout from "./WorkExperienceLayout";
import { WorkData } from "../../../static/data/WorkData";

const WorkExperienceDisplay = () => {
  const [tabSelected, setTabSelected] = React.useState(0);

  const tabsList = WorkData.map((currentTab, index) => {
    return (
      <Tab
        key={index}
        onClick={() => {
          setTabSelected(index);
        }}
        isSelected={tabSelected === index}
        text={currentTab.title}
      />
    );
  });

  return (
    <Wrapper>
      <TabsWrapper length={WorkData.length}>{tabsList}</TabsWrapper>
      <ContentWrapper>
        <ContentCard>
          <WorkExperienceLayout
            title={WorkData[tabSelected].title}
            date={WorkData[tabSelected].date}
            position={WorkData[tabSelected].position}
            content={WorkData[tabSelected].content}
          />
        </ContentCard>
      </ContentWrapper>
    </Wrapper>
  );
};

export default WorkExperienceDisplay;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
  gap: 0;
`;

const TabsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.length}, auto);
  gap: 12px;
  justify-content: start;
  @media (max-width: 450px) {
    overflow: scroll;
  }
`;

const ContentWrapper = styled.div``;
