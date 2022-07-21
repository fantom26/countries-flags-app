import Select from "react-select";
import styled from "styled-components";
import { backgroundColor, shadowColor, textColor } from "theme";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: `${backgroundColor}`,
      color: `${textColor}`,
      borderRadius: "var(--radius)",
      padding: "2.5px",
      border: "none",
      boxShadow: "var(--shadow)",
      minHeight: "50px"
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: `${textColor}`,
      backgroundColor: state.isSelected
        ? "var(--colors-bg)"
        : "var(--colors-ui-base)"
    })
  }
})`
  width: 200px;
  border-radius: var(--radius);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: ${shadowColor};
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: ${textColor} !important;
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;
