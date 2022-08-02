import styled from "styled-components";
import { backgroundColor } from "theme";
import { IconSvg } from "utils/constants";

const Edge = styled.div`
  background-color: ${backgroundColor};
  border-radius: 50%;
  box-shadow: inset 0px 0px 20px #eee;
  height: 125px;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 125px;
`;

const SvgInner = styled.div`
  svg {
    animation: draw 5s infinite ease-in-out alternate,
      rotate 5s -2.5s infinite ease-in-out reverse;
    fill-opacity: 0;
    position: absolute;
    stroke: #aaa;
    stroke-dasharray: 67rem;
    stroke-opacity: 1;
    stroke-width: 2;

    @keyframes draw {
      0% {
        stroke-dashoffset: 67rem;
      }
      100% {
        stroke-dashoffset: 0;
      }
    }
    @keyframes rotate {
      from {
        left: -26.5rem;
      }
      to {
        left: 0;
      }
    }
  }
`;

export const Loader = () => (
  <>
    <Edge>
      <SvgInner>
        <IconSvg tag="loader1" />
      </SvgInner>
      <SvgInner>
        <IconSvg tag="loader2" />
      </SvgInner>
    </Edge>
  </>
);
