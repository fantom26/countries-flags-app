import { useSelector } from "react-redux";
import styled from "styled-components";
import { backgroundColor, shadowColor, textColor } from "theme";

import { useDispatchedActions } from "hooks";

import { AdaptiveFont } from "utils/adaptiveFont";
import { IconSvg } from "utils/constants";

const InputContainer = styled.label`
  align-items: center;
  background-color: ${backgroundColor};
  border-radius: var(--radius);
  box-shadow: ${shadowColor};
  display: flex;

  margin-right: 1.5rem;
  max-width: 24rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;

  svg {
    path {
      stroke: ${textColor};
    }
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country"
})`
  ${AdaptiveFont({ pcSize: 16, mobSize: 14 })};
  width: 100%;
  margin-left: 1rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${textColor};
  min-height: 5rem;
`;

// eslint-disable-next-line arrow-body-style
export const Search = () => {
  const { search } = useSelector((state) => state.country);

  const { searchHandler } = useDispatchedActions();

  return (
    <InputContainer>
      <IconSvg tag="search" />
      <Input onChange={(e) => searchHandler(e.target.value)} value={search} />
    </InputContainer>
  );
};
