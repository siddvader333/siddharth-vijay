import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";
import { H3, BodyIntro } from "../styles/TextStyles";

const navLinks = ["About", "Work", "Projects"];

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Title>Siddharth Vijay</Title>
      </Link>
      <MenuWrapper count={navLinks.length + 1}>
        {navLinks.map((item) => (
          <MenuTextItem key={item}>{item}</MenuTextItem>
        ))}
        <GithubIcon src="/images/icons/github.svg" />
      </MenuWrapper>
    </Wrapper>
  );
};

export default Navbar;

const fallAnimation = keyframes`
  0% {
    -webkit-transform: translateY(-100px);

  }
  100% {

    -webkit-transform: translateY(0px);
  }
`;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 50px auto 0;
  height: 50px;
  padding: 0px 50px;
  display: grid;
  grid-template-columns: 220px auto;
  align-content: center;
  justify-content: space-between;
  animation: ${fallAnimation} 2s linear 1s;
`;

const Title = styled(H3)`
  width: 220px;
`;

const MenuTextItem = styled(BodyIntro)`
  width: 100px;
  text-align: center;
  text-decoration: none;
  transition: 0.5s;
  :hover {
    cursor: pointer;
    transform: scale(1.05) translateY(-5px);
    border-bottom: 1px solid black;
    padding-bottom: 3px;
  }
`;

const MenuWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(${(props) => props.count}, 100px);
  gap: 50px;
  @media (max-width: 1024px) {
    grid-template-columns: 100px;
    > ${MenuTextItem} {
      display: none;
    }
  }
`;

const GithubIcon = styled.img`
  width: 30px;
  transition: 0.5s;
  text-decoration: none;
  text-align: center;
  justify-self: center;
  :hover {
    cursor: pointer;
    transform: scale(1.05) translateY(-5px);
    border-bottom: 1px solid black;
    padding-bottom: 3px;
  }
`;
