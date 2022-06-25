import { useEffect, useState } from "react";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  // Dispatch
  const { getAllCountries } = useDispatchedActions();
  console.log("outside currentPage", currentPage);

  // Get countries
  useEffect(() => {
    if (fetching) {
      try {
        getAllCountries([currentPage, countries.limit]);
      } catch (e) {
        console.log("Error", e);
      } finally {
        setCurrentPage((prevState) => prevState + 1);
        setFetching(false);
        console.log("inside currentPage", currentPage);
        console.log("first useEffect fetching", fetching);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
      console.log("Second useEffect fetching", fetching);
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
