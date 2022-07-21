import { useEffect, useState } from "react";

import styled from "styled-components";
import { backgroundColor, textColor } from "theme";

import { IconSvg } from "utils/constants";

export const Button = styled.div`
  position: fixed;
  right: 4rem;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${textColor};
  border-radius: 50%;
  min-width: 5.4rem;
  min-height: 5.4rem;
  z-index: 1;
  cursor: pointer;
  background-color: ${backgroundColor};
  transition: visibility var(--transition), opacity var(--transition);

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
