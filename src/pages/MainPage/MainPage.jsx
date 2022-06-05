import { useSelector } from "react-redux";

import { Controls } from "./components/Controls";
import { List } from "./components/List";

export const MainPage = () => {
  const { countries } = useSelector((state) => state.country);
  return (
    <>
      <Controls />
      <List countries={countries.data} />
    </>
  );
};
