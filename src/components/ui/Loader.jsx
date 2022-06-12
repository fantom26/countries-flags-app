import { LoaderSvgSelector } from "images/loaderSvgSelector";
import styled from "styled-components";

const Edge = styled.div`
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  width: 125px;
  height: 125px;
  top: 50%;
  left: 50%;
  box-shadow: inset 0px 0px 20px #eee;
  background-color: var(--colors-ui-base);
  transform: translate(-50%, -50%);
`;

const SvgInner = styled.div`
  svg {
    position: absolute;
    fill-opacity: 0;
    stroke: #aaa;
    stroke-opacity: 1;
    stroke-width: 2;
    stroke-dasharray: 67rem;
    animation: draw 5s infinite ease-in-out alternate,
      rotate 5s -2.5s infinite ease-in-out reverse;

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
        <LoaderSvgSelector id="loader--1" />
      </SvgInner>
      <SvgInner>
        <LoaderSvgSelector id="loader--2" />
      </SvgInner>
    </Edge>
  </>
);
