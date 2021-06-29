import React from "react";
import styled from "styled-components";
import { BodyMain } from "../../styles/TextStyles";

const Tab = ({ isSelected, text, width, height, onClick }) => {
  return (
    <TabWrapper
      onClick={onClick}
      height={height}
      width={width}
      isSelected={isSelected}
    >
      <TextWrapper isSelected={isSelected}>{text}</TextWrapper>
    </TabWrapper>
  );
};

export default Tab;

const TabWrapper = styled.div`
  width: ${(props) => props.width || "195px"};
  height: ${(props) => props.height || "50px"};
  background: ${(props) =>
    props.isSelected ? "rgba(110, 149, 84, 0.7)" : "$FFFFFF"};
  /* Text 2 */

  border: 0.5px solid #656660;
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  align-content: center;
  border-radius: 10px 10px 0px 0px;

  &:hover {
    cursor: pointer;
  }
`;

const TextWrapper = styled(BodyMain)`
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "#656660")};
`;
