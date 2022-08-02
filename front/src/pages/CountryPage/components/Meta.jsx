import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { backgroundColor, shadowColor } from "theme";

import { AdaptiveFont } from "utils/helpers/adaptiveFont.helper";

const ListItemTitle = styled.h2`
  ${AdaptiveFont({ pcSize: 18, mobSize: 16 })};
  display: inline-block;
`;

const MetaWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-top: 3rem;

  @media (max-width: 1200px) {
    display: block;
  }

  span {
    display: inline-block;
    font-weight: 700;
    margin-left: 2rem;
    ${AdaptiveFont({ pcSize: 18, mobSize: 16 })};
    text-decoration: underline;
  }
`;

const TagGroup = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 1rem;

  @media (max-width: 1200px) {
    margin-left: initial;
    margin-top: 2rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 460px) {
    display: block;
  }
`;

const Tag = styled.li`
  align-items: center;
  background-color: ${backgroundColor};
  border-radius: var(--radius);
  box-shadow: ${shadowColor};
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${AdaptiveFont({ pcSize: 16, mobSize: 14 })};
  padding: 1rem;
  text-align: center;
  word-break: break-all;

  & + li {
    @media (max-width: 460px) {
      margin-top: 1rem;
    }
  }
`;

export const Meta = ({ neighbors, borders }) => {
  const navigate = useNavigate();
  return (
    <MetaWrapper>
      <ListItemTitle>Border Countries:</ListItemTitle>
      {!borders.length ? (
        <span>There is no border countries</span>
      ) : (
        <TagGroup>
          {neighbors.map((b) => (
            <Tag key={b} onClick={() => navigate(`/country/${b}`)}>
              {b}
            </Tag>
          ))}
        </TagGroup>
      )}
    </MetaWrapper>
  );
};
