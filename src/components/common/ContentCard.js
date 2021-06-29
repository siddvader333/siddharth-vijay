import React from "react";
import styled from "styled-components";

const ContentCard = (props) => {
  return (
    <Wrapper height={props.height} width={props.width}>
      {props.children}
    </Wrapper>
  );
};

export default ContentCard;

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  width: ${(props) => props.width || "650px"};
  height: auto
  border-radius: 5px;
  z-index: 1;
  /* Card Shadow 1 */

  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 20px 20px 10px 20px;
`;
