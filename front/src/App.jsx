import { DarkThemeProvider } from "providers/DarkThemeProvider";
import styled from "styled-components";
import { backgroundColor, textColor } from "theme";

import { Router } from "components/common";

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
      <Wrapper>
        <Router />
      </Wrapper>
    </DarkThemeProvider>
  </>
);
