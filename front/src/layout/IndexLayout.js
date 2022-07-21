import { useEffect, useState } from "react";
import { useCallback } from "react";

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

  // Get countries
  // useEffect(() => {
  //   if (fetching) {
  //     getCountriesByPageAndLimit([currentPage, countries.limit]);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [fetching]);

  //

  // console.log("data.length outside", data.length);
  // console.log("total outside", total);

  // const scrollHandler = (e) => {
  //   const heightCondition =
  //     e.target.documentElement.scrollHeight -
  //       (e.target.documentElement.scrollTop + window.innerHeight) <
  //     100;

  //   const lengthCondition = total > data.length;

  //   console.log("data.length inside", data.length);
  //   console.log("total", total);

  //   if (heightCondition && lengthCondition) {
  //     setFetching(true);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("scroll", scrollHandler);
  //   return function () {
  //     document.removeEventListener("scroll", scrollHandler);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
