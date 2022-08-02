import { DarkThemeProvider } from "providers";
import styled, { createGlobalStyle } from "styled-components";
import { backgroundColor, textColor } from "theme";

import { Router } from "components/common";

const GlobalStyle = createGlobalStyle`
  body {
    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${backgroundColor};
      outline: 1px solid ${textColor};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${textColor};
      border-radius: 1rem;
    }
  }
  `;

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 37.5rem;
  overflow: hidden;
  width: 100%;
`;

export const App = () => (
  <>
    <DarkThemeProvider>
      <GlobalStyle />
      <Wrapper>
        <Router />
      </Wrapper>
    </DarkThemeProvider>
  </>
);
