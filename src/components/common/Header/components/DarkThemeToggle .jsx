import { useSelector } from "react-redux";
import styled from "styled-components";

import { useDispatchedActions } from "hooks";

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;

  &::after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input:checked ~ ${Checkmark}::after {
    display: block;
  }

  input:checked ~ ${Checkmark} {
    background-color: #ccc;
  }

  ${Checkmark}::after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const DarkThemeToggle = () => {
  const { darkThemeEnabled } = useSelector((state) => state.app);
  const { toggleTheme } = useDispatchedActions();

  const toggleThemeHandler = () => {
    toggleTheme();
  };

  return (
    <Label>
      <input
        type="checkbox"
        checked={darkThemeEnabled}
        onChange={toggleThemeHandler}
      ></input>
      <Checkmark></Checkmark>
    </Label>
  );
};
