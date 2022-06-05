import styled from "styled-components";

const LoaderEl = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px dashed var(--colors-text);
  animation: rotate 1s infinite linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg) scale(1);
    }
    to {
      transform: rotate(360deg) scale(1.4);
    }
  }
`;

export const Loader = () => <LoaderEl />;
