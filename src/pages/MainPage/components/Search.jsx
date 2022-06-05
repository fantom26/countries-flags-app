import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 767px) {
    margin-bottom: initial;
    max-width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country"
})`
  width: 100%;
  margin-left: 20px;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--color-text);
  min-height: 50px;
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
