import { useState } from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";
import { textColor } from "theme";

import { useDispatchedActions } from "hooks";

import { IconSvg } from "utils/constants";

import sound from "assets/audio/tick.mp3";

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;

  svg {
    path {
      fill: ${textColor};
    }
  }
`;

const Switch = styled.span`
  position: absolute;
  inset: 0;
  cursor: pointer;
  border-radius: 2.5rem;
  background-color: #b6b6b6;
  transition: background-color var(--transition) ease;

  &::before {
    position: absolute;
    content: "";
    left: 0.2rem;
    top: 0.2rem;
    width: 2.1rem;
    height: 2.1rem;
    background-color: #333;
    border-radius: 50%;
    transition: transform var(--transition) ease;
  }
`;

const SwitchToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.5rem;
  margin-right: 1rem;
  margin-left: 1rem;

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked + ${Switch}::before {
    transform: translateX(25px);
  }

  input[type="checkbox"]:checked + ${Switch} {
    background-color: #0d0d0d;
  }
`;

export const DarkThemeToggle = () => {
  const { darkThemeEnabled } = useSelector((state) => state.app);
  const { toggleTheme } = useDispatchedActions();

  // eslint-disable-next-line no-undef
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(sound));

  const toggleThemeHandler = () => {
    toggleTheme();
    if (audio) {
      audio.play();
    }
  };

  return (
    <SwitchWrapper>
      <IconSvg tag="sun" />
      <SwitchToggle>
        <input
          type="checkbox"
          checked={darkThemeEnabled}
          onChange={toggleThemeHandler}
        />
        <Switch />
      </SwitchToggle>
      <IconSvg tag="moon" />
    </SwitchWrapper>
  );
};
