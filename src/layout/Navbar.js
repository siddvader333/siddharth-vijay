import React from "react";
import styled from "styled-components";
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

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 50px auto 0;
  height: 50px;
  padding: 0px 50px;
  display: grid;
  grid-template-columns: 220px auto;
  align-content: center;
  justify-content: space-between;
`;

const Title = styled(H3)`
  width: 250px;
`;

const MenuWrapper = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(${(props) => props.count}, 100px);
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
