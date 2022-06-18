import { DarkThemeProvider } from "providers/DarkThemeProvider";
import styled from "styled-components";
import theme from "styled-theming";

import { Router } from "components/common";

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d"
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff"
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  background-color: ${backgroundColor};
  color: ${textColor};
  transition: background-color 0.3s, color 0.3s;
`;

export const App = () => (
  <>
    <DarkThemeProvider>
      <Wrapper>
        <Router />
      </Wrapper>
    </DarkThemeProvider>
  </>
);
