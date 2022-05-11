import { useEffect, useState } from "react";

import { IoMoon, IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";

import { Container } from "components/ui/Container";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Title = styled.a.attrs({
  href: "/"
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  cursor: pointer;
  font-size: var(--fs-sm);
  color: var(--colors-text);
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

const ModeSwitcherSpan = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

export const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}
            <ModeSwitcherSpan>Light Theme</ModeSwitcherSpan>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
