import React from "react";
import styled from "styled-components";
import { BodyIntro, BodyMain, H2, MediumText } from "../../styles/TextStyles";

const WorkExperienceLayout = (props) => {
  const { title, date, position, content } = props;
  return (
    <Wrapper>
      <Header>
        <MainHeader>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </MainHeader>
        <SubHeader>{position}</SubHeader>
      </Header>
      <ContentList numItems={content.length}>
        {content.map((item, index) => {
          return (
            <ListItem key={index}>
              <ListIcon src="images/icons/chevron-right.svg"></ListIcon>
              <ListText>{item}</ListText>
            </ListItem>
          );
        })}
      </ContentList>
    </Wrapper>
  );
};

export default WorkExperienceLayout;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 90px auto;
  gap: 50px;
  padding: 30px 37px;

  @media (max-width: 865px) {
    display: grid;
    grid-template-rows: auto auto;
    gap: 50px;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-rows: 47px auto;
  gap: 13px;
  padding: 0px 23px;

  @media (max-width: 865px) {
    margin-left: 0px;
    display: grid;
    grid-template-rows: auto auto;
    gap: 20px;
    justify-items: center;
    text-align: center;
    justify-content: center;
  }
`;

const MainHeader = styled.div`
  display: grid;
  grid-template-columns: 190px auto;
  justify-content: space-between;
  justify-items: left;

  @media (max-width: 865px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    gap: 10px;
    justify-items: center;
  }
`;

const Title = styled(H2)``;
const Date = styled(BodyMain)``;
const SubHeader = styled(BodyIntro)`
  text-align: left;

  @media (max-width: 450px) {
    text-align: center;
  }
`;

const ContentList = styled.div`
  padding: 0 40px 0;
  display: grid;
  grid-template-rows: repeat(${(props) => props.length}, 200px);
  gap: 30px;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  justify-content: left;
  text-align: left;
`;

const ListIcon = styled.img``;
const ListText = styled(MediumText)``;
