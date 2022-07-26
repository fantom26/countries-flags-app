import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { backgroundColor, shadowColor } from "theme";

import { CountryService } from "services/CountryService";

import { AdaptiveFont } from "utils/adaptiveFont";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`;

const InfoInner = styled.div`
  margin-left: 2rem;
  width: 100%;
  max-width: 60rem;
`;

const InfoImage = styled.img`
  width: 100%;
  max-width: 50rem;
  height: auto;
  object-fit: cover;
`;

const InfoTitle = styled.h1`
  margin-bottom: 2rem;
  font-weight: 700;
  ${AdaptiveFont({ pcSize: 40, mobSize: 20 })};
`;

const ListGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  flex: 0 0 48%;
`;

const ListItem = styled.li`
  ${AdaptiveFont({ pcSize: 18, mobSize: 16 })};
  line-height: 150%;

  & + li {
    margin-top: 1rem;
  }
`;

const ListItemTitle = styled.h2`
  ${AdaptiveFont({ pcSize: 18, mobSize: 16 })};
  display: inline-block;
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    margin-left: 2rem;
    font-weight: 700;
    ${AdaptiveFont({ pcSize: 18, mobSize: 16 })};
    text-decoration: underline;
  }
`;

const TagGroup = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-left: 1rem;
`;

const Tag = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: var(--radius);
  text-align: center;
  word-break: break-all;
  ${AdaptiveFont({ pcSize: 16, mobSize: 14 })};
  background-color: ${backgroundColor};
  box-shadow: ${shadowColor};
  cursor: pointer;
`;

export const Info = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = []
  } = props;

  const navigate = useNavigate();

  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    if (borders.length)
      // eslint-disable-next-line nonblock-statement-body-position
      CountryService.filterByCode(borders).then(({ data }) =>
        setNeighbors(data.map((c) => c.name))
      );
  }, [borders]);

  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />

      <InfoInner>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <ListItemTitle>Native Name:</ListItemTitle> {nativeName}
            </ListItem>
            <ListItem>
              <ListItemTitle>Population:</ListItemTitle> {population}
            </ListItem>
            <ListItem>
              <ListItemTitle>Region:</ListItemTitle> {region}
            </ListItem>
            <ListItem>
              <ListItemTitle>Sub Region:</ListItemTitle> {subregion}
            </ListItem>
            <ListItem>
              <ListItemTitle>Capital:</ListItemTitle> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemTitle>Top Level Domain</ListItemTitle>
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <ListItemTitle>Currency</ListItemTitle>
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <ListItemTitle>Top Level Domain</ListItemTitle>
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <ListItemTitle>Border Countries</ListItemTitle>
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
        </Meta>
      </InfoInner>
    </Wrapper>
  );
};
