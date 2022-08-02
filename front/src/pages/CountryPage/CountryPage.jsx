import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { Container } from "components/ui";

import { CountryService } from "services/CountryService";

import { IconSvg } from "utils/constants";

import { Button } from "./components/Button";
import { Info } from "./components/Info";

const CountrySection = styled.section`
  padding-bottom: 2rem;
  padding-top: 2rem;
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

  const handlerBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <CountrySection>
      <Container>
        <Button onClick={handlerBack}>
          <IconSvg tag="arrowBack" />
          <span>Back</span>
        </Button>
        {country && <Info {...country} />}
      </Container>
    </CountrySection>
  );
};

export default CountryPage;
