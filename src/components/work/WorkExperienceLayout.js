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
`;

const Header = styled.div`
  display: grid;
  grid-template-rows: 47px auto;
  gap: 13px;
  margin-left: 23px;
`;

const MainHeader = styled.div`
  display: grid;
  grid-template-columns: 190px auto;
  justify-content: space-between;
`;

const Title = styled(H2)``;
const Date = styled(BodyMain)``;
const SubHeader = styled(BodyIntro)`
  text-align: left;
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
  align-items: center;
`;

const ListIcon = styled.img``;
const ListText = styled(MediumText)``;
