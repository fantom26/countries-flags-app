import { useEffect, useRef } from "react";

import { useSelector } from "react-redux";

import { Container } from "components/ui";
import { ScrollButton } from "components/ui/ScrollTop";

import { useDispatchedActions } from "hooks";

// import { Controls } from "./components/Controls";
import { List } from "./components/List";

const MainPage = () => {
  const { countries } = useSelector((state) => state.country);
  const { data, currentPage, total, limit } = countries;
  const lastElement = useRef();
  const observer = useRef();

  // Dispatch
  const { getCountriesByPageAndLimit } = useDispatchedActions();

  // Infinity scroll
  useEffect(() => {
    if (countries.isLoading) return;
    if (observer.current) observer.current.disconnect();
    const callback = (entries) => {
      if (entries[0].isIntersecting && total > data.length) {
        getCountriesByPageAndLimit([currentPage, limit]);
      }
    };
    // eslint-disable-next-line no-undef
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries.isLoading]);

  return (
    <Container>
      <List countries={countries.data} />
      <div
        ref={lastElement}
        style={{ height: 20, backgroundColor: "transparent" }}
      ></div>
      <ScrollButton />
    </Container>
  );
};

export default MainPage;
