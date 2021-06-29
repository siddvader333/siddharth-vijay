import React from "react";
import styled from "styled-components";
import Tab from "./common/Tab";

const WorkExperienceDisplay = () => {
  const [tabSelected, setTabSelected] = React.useState(0);
  const tabs = ["Shield Crypto", "Amazon", "Amazon"];

  const tabsList = tabs.map((currentTab, index) => {
    return (
      <Tab
        key={index}
        onClick={() => {
          setTabSelected(index);
        }}
        isSelected={tabSelected === index}
        text={currentTab}
      />
    );
  });

  return (
    <Wrapper>
      <TabsWrapper length={tabs.length}>{tabsList}</TabsWrapper>
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  );
};

export default WorkExperienceDisplay;

const Wrapper = styled.div`
  max-width: 650px;
  display: grid;
  grid-template-rows: 50px auto;
  gap: 0;
`;

const TabsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.length}, auto);
  gap: 12px;
`;

const ContentWrapper = styled.div``;
