import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { H3, BodyIntro } from '../styles/TextStyles';

const navLinks = [ 'About', 'Work', 'Projects' ];

const Navbar = () => {
	return (
		<Wrapper>
			<Link to="/">
				<Title>Siddharth Vijay</Title>
			</Link>
			<MenuWrapper count={navLinks.length}>
				{navLinks.map((item) => <MenuTextItem key={item}>{item}</MenuTextItem>)}
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
    width: 250px
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
    transition: 1s;
    :hover{
        cursor: pointer;
        text-decoration: underline;
        transform: translateY(-5px);
    }
`;
