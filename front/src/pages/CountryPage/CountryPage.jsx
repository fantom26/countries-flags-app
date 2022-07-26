import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { Container } from "components/ui";

import { CountryService } from "services/CountryService";

import { IconSvg } from "utils/constants";

import { Button } from "./components/Button";
import { Info } from "./components/Info";

const CountrySection = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const CountryPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    CountryService.searchByCountry(name).then(({ data }) =>
      setCountry(data[0])
    );
  }, [name]);

  return (
    <CountrySection>
      <Container>
        <Button onClick={() => navigate(-1)}>
          <IconSvg tag="arrowBack" />
          <span>Back</span>
        </Button>
        {country && <Info {...country} />}
      </Container>
    </CountrySection>
  );
};

export default CountryPage;
