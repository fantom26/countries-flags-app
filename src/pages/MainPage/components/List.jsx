import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Card } from "./Card";

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

export const List = ({ countries }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {countries.map((country) => {
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
    </Wrapper>
  );
};
