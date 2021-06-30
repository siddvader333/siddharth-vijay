import React from "react";
import styled, { keyframes } from "styled-components";

const ProjectWaveBackground = () => {
  return (
    <Wrapper>
      <Background />
      <Wave
        className="wave1"
        src="/images/waves/project-wave1.svg"
        style={{ top: "0px", right: "0px" }}
      />
      <Wave src="/images/waves/project-wave2.svg" style={{ top: "265px" }} />
    </Wrapper>
  );
};

export default ProjectWaveBackground;

const waveGentleBounce = keyframes`
  0%, 100% {
    -webkit-transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-5px);
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;

  animation: ${waveGentleBounce} 3s linear 0s infinite;
  @media (min-width: 1440px) {
  }
`;
