import { LoaderSvgSelector } from "images/loaderSvgSelector";
import styled from "styled-components";

const Spinner = styled.div`
  border: 1px solid transparent;
  border-bottom-color: #aaa;
  border-right-color: #aaa;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: load 2s linear infinite;

  @keyframes load {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

const Edge = styled.div`
  background-color: #fff;
  box-shadow: inset 0px 0px 20px #eee;
  width: 125px;
  height: 125px;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SvgInner = styled.div`
  svg {
    position: absolute;
    fill-opacity: 0;
    stroke: #aaa;
    stroke-opacity: 1;
    stroke-width: 2;
    stroke-dasharray: 670px;
    animation: draw 5s infinite ease-in-out alternate,
      rotate 5s -2.5s infinite ease-in-out reverse;

    @keyframes draw {
      0% {
        stroke-dashoffset: 670px;
      }
      100% {
        stroke-dashoffset: 0;
      }
    }
    @keyframes rotate {
      from {
        left: -265px;
      }
      to {
        left: 0px;
      }
    }
  }
`;

export const Loader = () => (
  <>
    <Spinner />
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
