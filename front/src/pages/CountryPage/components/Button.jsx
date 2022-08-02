import styled from "styled-components";
import { shadowColor, textColor } from "theme";

import { AdaptiveFont } from "utils/helpers/adaptiveFont.helper";

export const Button = styled.button`
  align-items: center;
  background-color: var(--colors-ui-base);
  border: none;
  border-radius: var(--radius);
  box-shadow: ${shadowColor};
  color: var(--color-text);
  display: flex;
  font-weight: 700;
  min-height: 4rem;
  ${AdaptiveFont({ pcSize: 18, mobSize: 16 })};
  min-width: 7rem;
  padding-left: 1rem;
  padding-right: 1rem;

  svg {
    margin-right: 0.6rem;
    max-width: 2.4rem;

    path {
      fill: ${textColor};
    }
  }
`;
