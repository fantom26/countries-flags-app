import { Link } from "react-router-dom";
import styled from "styled-components";
import { backgroundColor, shadowColor, textColor } from "theme";

import { Container } from "components/ui";

import { AdaptiveFont } from "utils/helpers/adaptiveFont.helper";

import { DarkThemeToggle } from "./components/DarkThemeToggle";

const HeaderEl = styled.header`
  background-color: ${backgroundColor};
  box-shadow: ${shadowColor};
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
`;

const Title = styled(Link).attrs({
  to: "/"
})`
  ${AdaptiveFont({ pcSize: 24, mobSize: 18 })};
  color: ${textColor};
  text-decoration: none;
  font-weight: 700;
`;

export const Header = () => (
  <HeaderEl>
    <Container>
      <Wrapper>
        <Title>Countries-app</Title>
        <DarkThemeToggle />
      </Wrapper>
    </Container>
  </HeaderEl>
);
