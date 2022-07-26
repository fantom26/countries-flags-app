import { useEffect } from "react";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

import { Header } from "components/common/";

const Main = styled.main`
  flex-grow: 1;
`;

export const IndexLayout = () => {
  const { countries } = useSelector((state) => state.country);

  // Handling error
  useEffect(() => {
    if (countries.isFetchError) {
      toast.error("Error with fetching data");
    }
  }, [countries.isFetchError]);

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
