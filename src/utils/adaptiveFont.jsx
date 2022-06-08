import { css } from "styled-components";

const addSize = (pcSize, mobSize) => +pcSize - +mobSize;
const addMobSize = (pcSize, mobSize) =>
  addSize(pcSize, mobSize) + addSize(pcSize, mobSize) * 0.7;

export const AdaptiveFont = ({ pcSize, mobSize }) => css`
  @media (max-width: 767px) {
    font-size: calc(
      ${mobSize}px + ${addMobSize(pcSize, mobSize)} * ((100vw - 320px) / 1200))
    );
  }
  @media (min-width: 767px) {
    font-size: calc(
      ${mobSize}px + ((${pcSize} - ${mobSize}) * (100vw / 1200))
    );
  }
`;
