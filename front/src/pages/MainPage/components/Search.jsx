import styled from "styled-components";
import { shadowColor } from "theme";

const InputContainer = styled.label`
  align-items: center;
  background-color: var(--colors-ui-base);
  border-radius: var(--radius);
  box-shadow: ${shadowColor};
  display: flex;
  margin-bottom: 1rem;

  margin-right: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;

  @media (min-width: 767px) {
    margin-bottom: initial;
    max-width: 28rem;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country"
})`
  width: 100%;
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--color-text);
  min-height: 5rem;
`;

// eslint-disable-next-line arrow-body-style
export const Search = ({ searchStr, setSearchStr }) => {
  return (
    <InputContainer>
      <Input onChange={(e) => setSearchStr(e.target.value)} value={searchStr} />
    </InputContainer>
  );
};
