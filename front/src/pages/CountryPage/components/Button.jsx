import styled from "styled-components";
import { shadowColor, textColor } from "theme";

import { AdaptiveFont } from "utils/adaptiveFont";

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: var(--radius);
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 4rem;
  min-width: 7rem;
  font-weight: 700;
  ${AdaptiveFont({ pcSize: 18, mobSize: 16 })};
  color: var(--color-text);
  box-shadow: ${shadowColor};
  background-color: var(--colors-ui-base);

  svg {
    margin-right: 0.6rem;
    max-width: 2.4rem;

    path {
      fill: ${textColor};
    }
  }
`;
