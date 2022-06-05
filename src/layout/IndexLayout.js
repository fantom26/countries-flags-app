import { useEffect } from "react";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";

import { Header } from "components/common/";

import { useDispatchedActions } from "hooks/useDispatchedActions";

export const IndexLayout = () => {
  const { countries } = useSelector((state) => state.country);

  // Dispatch
  const { getAllCountries } = useDispatchedActions();

  // // Get all counties
  useEffect(() => {
    if (!countries.isDataLoaded) {
      getAllCountries();
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
      <main>
        <Outlet />
      </main>
    </>
  );
};
