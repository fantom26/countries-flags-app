import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "components/ui";

import { AdaptiveFont } from "utils/adaptiveFont";

import { DarkThemeToggle } from "./components/DarkThemeToggle ";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Title = styled(Link).attrs({
  to: "/dsfsdf"
})`
  ${AdaptiveFont({ pcSize: 24, mobSize: 18 })};
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const Header = () => (
  <HeaderEl>
    <Container>
      <Wrapper>
        <Title>Where is the world?</Title>
        <DarkThemeToggle />
      </Wrapper>
    </Container>
  </HeaderEl>
);
