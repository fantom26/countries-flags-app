import { Suspense } from "react";

import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Loader } from "components/ui";

const Wrapper = styled.main`
  padding-top: 20px;
  padding-bottom: 20px;
  @media (min-width: 767px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const AppLayout = () => (
  <Wrapper>
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </Wrapper>
);
