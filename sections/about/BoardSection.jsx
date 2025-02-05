import styled from "styled-components";

import CardFill from "../../public/members/card-fill.png";
import { Card } from "../../components";
import { baseTheme } from "../../theme";
import { media } from "../../utils";

/**
 *
 * BoardSection
 * @prop {boardMembers} board - Board members information
 * @prop {string} board - Board name
 * @prop {string} boardDescription - Board description: established year and no. of members
 * @prop {string} align - Alignment of the board description (left or right)
 */
export const BoardSection = ({
  board,
  boardDescription,
  boardMembers, // array
  align = "left", // align content left or right for board
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Info align={align}>
        <Title>{board}</Title>
        <p>{boardDescription}</p>
      </Info>
      <Board>
        {boardMembers.map((member) => (
          <SCard
            key={`About__Page__Card__${member.name}`}
            thumbnail={member.avatar ? member.avatar : CardFill}
            title={member.name}
            imageWidth={member.imageWidth}
            imageHeight={member.imageHeight}
            cardHeight={member.cardHeight}
            contentPadding={"5px"}
            component={
              <PositionWrapper>
                <Name fontcolor={member.fontColor}>{member.name}</Name>
                <Position fontcolor={member.fontColor}>{member.position}</Position>
              </PositionWrapper>
            }
          />
        ))}
      </Board>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 7%;
  margin-bottom: 5vh;
`;
const Info = styled.div`
  ${({ align }) => `
        text-align: ${align};
    `};
`;
const Title = styled.h2`
  ${({ theme }) => `
        font-family: ${theme.font.kumbh};
        font-weight: 700;
    `};
`;
const Name = styled.h3`
  ${({ theme, fontcolor }) => `
        font-family: ${theme.font.kumbh};
        font-weight: 700;
        font-size: 1.4rem;
        color: ${fontcolor ? fontcolor : baseTheme.colors.navy};
    `};
`;
const Position = styled.p`
  ${({ theme, fontcolor }) => `
        font-family: ${theme.font.kumbh};
        color: ${fontcolor ? fontcolor : baseTheme.colors.navy};
        font-size: 1.1rem!important;
        margin-top: -15px;
    `};
`;
const PositionWrapper = styled.div`
  text-align: center;
`;
const Board = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5vh;
  ${media(
    500,
    `
            flex-direction: column;
        `
  )};
`;
const SCard = styled(Card)`
  margin: 0 5px;
  margin-bottom: 5vh;
`;
