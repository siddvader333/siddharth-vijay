import React from "react";
import styled from "styled-components";

const SocialIcons = () => {
  return (
    <IconsWrapper>
      <Icon alt="github-icon" src="/images/icons/github.svg" />
      <Icon alt="instagram-icon" src="/images/icons/instagram.svg" />
      <Icon alt="linkedin-icon" src="/images/icons/linkedin.svg" />
    </IconsWrapper>
  );
};

export default SocialIcons;

const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  align-content: center;
`;

const Icon = styled.img`
  height: 40px;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px) scale(1.01);
  }
`;
