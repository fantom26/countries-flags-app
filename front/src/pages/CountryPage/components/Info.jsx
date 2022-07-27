import { useEffect, useState } from "react";

import styled from "styled-components";

import { CountryService } from "services/CountryService";

import { AdaptiveFont } from "utils/adaptiveFont";

import { Meta } from "./Meta";

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const InfoInner = styled.div`
  margin-left: 2rem;
  max-width: 60rem;
  width: 100%;

  @media (max-width: 1100px) {
    margin-left: initial;
    margin-top: 2rem;
    max-width: initial;
  }
`;

const InfoImage = styled.img`
  height: auto;
  max-width: 50rem;
  object-fit: cover;
  width: 100%;

  @media (max-width: 1100px) {
    max-width: initial;
  }
`;

const InfoTitle = styled.h1`
  font-weight: 700;
  margin-bottom: 2rem;
  ${AdaptiveFont({ pcSize: 40, mobSize: 20 })};
`;

const ListGroup = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 460px) {
    display: block;
  }
`;

const List = styled.ul`
  flex: 0 0 48%;

  @media (max-width: 460px) {
    flex: initial;
  }

  & + ul {
    @media (max-width: 460px) {
      margin-top: 1rem;
    }
  }
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
              <ListItemTitle>Top Level Domain: </ListItemTitle>
              {topLevelDomain.map((d) => (
                <span key={d}> {d}</span>
              ))}
            </ListItem>
            <ListItem>
              <ListItemTitle>Currency: </ListItemTitle>
              {currencies.map((c) => (
                <span key={c.code}> {c.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <ListItemTitle>Top Level Domain: </ListItemTitle>
              {languages.map((l) => (
                <span key={l.name}> {l.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta borders={borders} neighbors={neighbors} />
      </InfoInner>
    </Wrapper>
  );
};
