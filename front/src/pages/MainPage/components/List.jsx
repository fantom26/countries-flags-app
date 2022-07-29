import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Card } from "./Card";

const Cards = styled.ul`
  list-style: none;
  width: 100%;
  &.grid {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(4, 1fr);

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
  }

  &.loading {
    filter: blur(2px);
    pointer-events: none;
  }
`;

const styleOption = {
  backgroundColor: "red"
};

export const List = ({ lastElement, loading, countries }) => {
  const navigate = useNavigate();
  const { view } = useSelector((state) => state.app);
  const { limit } = useSelector((state) => state.country.countries);

  const defineClasses = () => {
    let classes = "";

    if (loading) {
      classes += " loading";
    }

    if (view === "list") {
      classes += " list";
    } else {
      classes += " grid";
    }

    return classes;
  };

  return (
    <Cards className={defineClasses()}>
      {countries.length > limit - 1
        ? countries?.map((country, index) => {
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

            if (countries.length - 1 === index) {
              return (
                <Card
                  lastElement={lastElement}
                  onClick={() =>
                    navigate(`country/${country.name}`, { replace: true })
                  }
                  styleOption={styleOption}
                  view={view}
                  key={country.name}
                  {...countryInfo}
                />
              );
            }
            return (
              <Card
                onClick={() =>
                  navigate(`country/${country.name}`, { replace: true })
                }
                view={view}
                key={country.name}
                {...countryInfo}
              />
            );
          })
        : countries?.map((country) => {
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
                view={view}
                key={country.name}
                {...countryInfo}
              />
            );
          })}
    </Cards>
  );
};
