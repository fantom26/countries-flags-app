import { Suspense, useEffect } from "react";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Header } from "components/common/";
import { Loader } from "components/ui";

const Main = styled.main`
  flex-grow: 1;
`;

export const IndexLayout = () => {
  const { countries } = useSelector((state) => state.country);

  // Handling error
  useEffect(() => {
    if (countries.isFetchError) {
      // eslint-disable-next-line no-console
      console.log("Error with fetching data");
    }
  }, [countries.isFetchError]);

  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
