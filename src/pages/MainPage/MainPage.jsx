import { useSelector } from "react-redux";

import { Container } from "components/ui";

import { Controls } from "./components/Controls";
import { List } from "./components/List";

const MainPage = () => {
  const { countries } = useSelector((state) => state.country);
  return (
    <>
      <Container>
        <Controls />
        <List countries={countries.data} />
      </Container>
    </>
  );
};

export default MainPage;
