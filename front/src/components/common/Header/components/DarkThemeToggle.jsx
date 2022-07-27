import { useState } from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";
import { textColor } from "theme";

import { useDispatchedActions } from "hooks";

import { IconSvg } from "utils/constants";

import sound from "assets/audio/tick.mp3";

const SwitchWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-left: 1.5rem;

  svg {
    path {
      fill: ${textColor};
    }
  }
`;

const Switch = styled.span`
  background-color: #b6b6b6;
  border-radius: 2.5rem;
  cursor: pointer;
  inset: 0;
  position: absolute;
  transition: background-color var(--transition) ease;

  &::before {
    background-color: #333;
    border-radius: 50%;
    content: "";
    height: 2.1rem;
    left: 0.2rem;
    position: absolute;
    top: 0.2rem;
    transition: transform var(--transition) ease;
    width: 2.1rem;
  }
`;

const SwitchToggle = styled.label`
  display: inline-block;
  height: 2.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  position: relative;
  width: 5rem;

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
