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
  background: rgba(255, 255, 255, 0.95);
  width: ${(props) => props.width || "800px"};
  height: ${(props) => props.height || "500px"};

  /* Card Shadow 1 */

  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;
