import { useEffect } from "react";

import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "components/ui";

import { useDispatchedActions } from "hooks";

import { AdaptiveFont } from "utils/adaptiveFont";

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
  to: "/"
})`
  ${AdaptiveFont({ pcSize: 30, mobSize: 18 })};
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

export const Header = () => {
  const { theme } = useSelector((state) => state.app);

  const { toggleTheme } = useDispatchedActions();

  const toggleThemeHandler = () => {
    toggleTheme(theme);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleThemeHandler}>
            {theme === "light" ? (
              <IoMoonOutline size="16px" />
            ) : (
              <IoMoon size="16px" />
            )}
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
