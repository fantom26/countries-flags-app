import Select from "react-select";
import styled from "styled-components";
import { backgroundColor, shadowColor, textColor } from "theme";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: `${backgroundColor}`,
      border: "none",
      borderRadius: "var(--radius)",
      boxShadow: `${shadowColor}`,
      color: `${textColor}`,
      fontSize: "1.6rem",
      padding: "2.5px",
      minHeight: "50px",
      minWidth: "200px"
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: state.isSelected ? `${backgroundColor}` : `${textColor}`,
      fontSize: "1.6rem",
      backgroundColor: state.isSelected ? `${textColor}` : `${backgroundColor}`
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "#808E88",
      fontSize: "1.6rem"
    })
  }
})`
  border-radius: var(--radius);
  border: none;

  @media (max-width: 767px) {
    margin-top: 2rem;
    flex-basis: 100%;
  }

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
    background-color: ${backgroundColor};
  }
`;
