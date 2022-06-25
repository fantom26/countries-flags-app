import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Card } from "./Card";

const Cards = styled.section`
  list-style: none;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 460px) {
    display: block;
  }
`;

export const List = ({ countries }) => {
  const navigate = useNavigate();
  return (
    <Cards>
      {countries?.map((country) => {
        const countryInfo = {
          img: country.flags.svg,
          name: country.name,
          info: [
            {
              title: "Population",
              description: country.population.toLocaleString()
            },
            {
              title: "Region",
              description: country.region
            },
            {
              title: "Capital",
              description: country.capital
            }
          ]
        };
        return (
          <Card
            onClick={() =>
              navigate(`country/${country.name}`, { replace: true })
            }
            key={country.name}
            {...countryInfo}
          />
        );
      })}
    </Cards>
  );
};
