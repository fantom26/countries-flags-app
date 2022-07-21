import { DarkThemeProvider } from "providers/DarkThemeProvider";
import styled from "styled-components";
import { backgroundColor, textColor } from "theme";

import { Router } from "components/common";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  background-color: ${backgroundColor};
  color: ${textColor};
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
