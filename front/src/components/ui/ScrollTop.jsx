import { useEffect, useState } from "react";

import styled from "styled-components";
import { backgroundColor, textColor } from "theme";

import { IconSvg } from "utils/constants";

export const Button = styled.div`
  align-items: center;
  background-color: ${backgroundColor};
  border: 0.1rem solid ${textColor};
  border-radius: 50%;
  bottom: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-height: 5.4rem;
  min-width: 5.4rem;
  position: fixed;
  right: 4rem;
  transition: visibility var(--transition), opacity var(--transition);
  z-index: 1;

  svg {
    path {
      fill: ${textColor};
    }
  }
`;

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      style={{
        visibility: visible ? "visible" : "hidden",
        opacity: visible ? 1 : 0
      }}
    >
      <IconSvg tag="arrowTop" />
    </Button>
  );
};
