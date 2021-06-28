import React from "react";
import styled from "styled-components";
import { BodyIntro } from "../../styles/TextStyles";

const PrimaryButton = (props) => {
  const { text, height, width } = props;
  return (
    <PrimaryBtn height={height} width={width}>
      <ButtonText>{text}</ButtonText>
    </PrimaryBtn>
  );
};

export default PrimaryButton;

const PrimaryBtn = styled.button`
  height: ${(props) => props.height || "77px"};
  width: ${(props) => props.width || "250px"};
  border: none;
  transition: 0.5s;
  background: linear-gradient(
    180deg,
    rgba(110, 149, 84, 0.75) 0%,
    rgba(34, 99, 65, 0.75) 100%
  );
  /* Button Shadow 1 */

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 37.5px;

  &:hover {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
    transform: translateY(-5px) scale(1.01);
    cursor: pointer;
  }
`;

const ButtonText = styled(BodyIntro)`
  color: white;
`;
