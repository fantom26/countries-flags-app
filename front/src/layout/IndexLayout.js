import { useCallback, useEffect, useState } from "react";

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
  const { currentPage, data, total } = useSelector(
    (state) => state.country.countries
  );
  const [fetching, setFetching] = useState(true);

  // Dispatch
  const { getCountriesByPageAndLimit } = useDispatchedActions();

  // Get countries
  useEffect(() => {
    if (fetching) {
      getCountriesByPageAndLimit([currentPage, countries.limit]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  useEffect(() => {
    setFetching(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);

  const scrollHandler = (e) => {
    const heightCondition =
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100;

    const lengthCondition = data.length < total;

    if (heightCondition && lengthCondition) {
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
