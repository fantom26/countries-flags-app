import styled from "styled-components";
import { backgroundColor, shadowColor } from "theme";

import { AdaptiveFont } from "utils/adaptiveFont";

const CardImage = styled.img`
  box-shadow: ${shadowColor};
  height: 15rem;
  object-fit: cover;
  width: 100%;
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h2`
  ${AdaptiveFont({ pcSize: 20, mobSize: 18 })};
  font-weight: 700;
`;

const CardList = styled.ul`
  margin-top: 1rem;
`;

const CardListItem = styled.li`
  ${AdaptiveFont({ pcSize: 16, mobSize: 14 })};
  line-height: 150%;

  & > span {
    font-weight: 700;
  }

  & + li {
    margin-top: 0.5rem;
  }
`;

const Wrapper = styled.li`
  background-color: ${backgroundColor};
  border-radius: var(--radius);
  box-shadow: ${shadowColor};
  cursor: pointer;
  overflow: hidden;
  transition: transform var(--transition);

  &.grid {
    & + li {
      @media (max-width: 460px) {
        margin-top: 1.5rem;
      }
    }
  }

  &.list {
    & + li {
      margin-top: 2rem;
    }
  }

  @media (hover) {
    &:hover {
      transform: scale(1.01);
      transition: transform var(--transition);
    }
  }

  &.list {
    align-items: center;
    display: flex;
    padding: 2rem;

    @media (max-width: 992px) {
      padding: 1rem;
    }

    ${CardImage} {
      box-shadow: ${shadowColor};
      height: auto;
      max-width: 15rem;
      object-fit: contain;
      object-position: center;
      width: 100%;
    }

    ${CardBody} {
      margin-left: 2rem;
      padding: initial;

      @media (max-width: 767px) {
        margin-left: 1.5rem;
      }
    }

    ${CardList} {
      align-items: center;
      display: flex;

      @media (max-width: 767px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
      }

      @media (max-width: 576px) {
        display: block;
      }
    }

    ${CardListItem} {
      & + li {
        margin-left: 2rem;
        margin-top: initial;

        @media (max-width: 767px) {
          margin-left: initial;
        }

        @media (max-width: 576px) {
          margin-top: 1rem;
        }
      }
    }
  }
`;

export const Card = ({
  styleOption,
  lastElement,
  view,
  img,
  name,
  info = [],
  onClick
}) => (
  <Wrapper
    style={styleOption}
    ref={lastElement}
    className={view === "list" ? "list" : "grid"}
    onClick={onClick}
  >
    <CardImage src={img} alt={name} />
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardList>
        {info.map((el) => (
          <CardListItem key={el.title}>
            <span>{el.title}:</span> {el.description}
          </CardListItem>
        ))}
      </CardList>
    </CardBody>
  </Wrapper>
);
