import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;

  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

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
      <IoSearch size="16px" />
      <Input onChange={(e) => setSearchStr(e.target.value)} value={searchStr} />
    </InputContainer>
  );
};
