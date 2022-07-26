import styled from "styled-components";
import { shadowColor } from "theme";

const Wrapper = styled.article`
  border-radius: var(--radius);
  background-color: var(--colors-ui-base);
  box-shadow: ${shadowColor};
  cursor: pointer;
  overflow: hidden;
  transition: transform var(--transition);

  & + article {
    @media (max-width: 460px) {
      margin-top: 1.5rem;
    }
  }

  @media (hover) {
    &:hover {
      transform: scale(1.05);
      transition: transform var(--transition);
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  box-shadow: ${shadowColor};
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h2`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  margin-top: 1rem;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 150%;
  font-weight: var(--fw-light);
  & > span {
    font-weight: var(--fw-bold);
  }

  & + li {
    margin-top: 0.5rem;
  }
`;

export const Card = ({ img, name, info = [], onClick }) => (
  <Wrapper onClick={onClick}>
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
