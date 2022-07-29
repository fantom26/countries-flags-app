import { useEffect, useRef } from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";

import { Container, ScrollButton } from "components/ui";

import { useDispatchedActions } from "hooks";

import { Controls } from "./components/Controls";
import { List } from "./components/List";

const Wrapper = styled.div`
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

let currentPage = 1;

const MainPage = () => {
  const { countries } = useSelector((state) => state.country);
  const { data, total, limit } = countries;
  const lastElement = useRef(null);
  const observer = useRef();
  const { search, region } = useSelector((state) => state.country);

  // Dispatch
  const { getCountriesByPageAndLimit, clearCountries } = useDispatchedActions();

  const addingSearchOrFilter = (limit, search, region) => {
    currentPage = 1;
    clearCountries();
    getCountriesByPageAndLimit({ currentPage, limit, search, region });
    currentPage += 1;
  };

  useEffect(() => {
    if (search && !region) {
      addingSearchOrFilter(limit, search, null);
    }
    if (!search && region) {
      addingSearchOrFilter(limit, "", region);
    }
    if (search && region) {
      addingSearchOrFilter(limit, search, region);
    }
    if (!search && !region) {
      addingSearchOrFilter(limit, search, region);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.length, region]);

  // Infinity scroll
  useEffect(() => {
    if (countries.isLoading) return;
    if (observer.current) observer.current.disconnect();
    const callback = (entries) => {
      if (entries[0].isIntersecting && total > data.length) {
        getCountriesByPageAndLimit({ currentPage, limit, region, search });
        currentPage += 1;
      }
    };
    // eslint-disable-next-line no-undef
    observer.current = new IntersectionObserver(callback);
    if (lastElement.current !== null) {
      observer.current.observe(lastElement.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries.isLoading]);

  return (
    <Wrapper>
      <Container>
        <Controls />
        <List
          lastElement={lastElement}
          loading={countries.isLoading}
          countries={countries.data}
        />
        <ScrollButton />
      </Container>
    </Wrapper>
  );
};

export default MainPage;
