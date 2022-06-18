import { useEffect } from "react";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

import { Header } from "components/common/";

import { useDispatchedActions } from "hooks/useDispatchedActions";

const Main = styled.main`
  flex-grow: 1;
`;

export const IndexLayout = () => {
  const { countries } = useSelector((state) => state.country);

  // Dispatch
  const { getAllCountries } = useDispatchedActions();

  // Get all counties
  useEffect(() => {
    if (!countries.isDataLoaded) {
      getAllCountries(1, 8);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries.isDataLoaded]);

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
