import { useState } from "react";
import { useEffect } from "react";

import { useSelector } from "react-redux";

import { Container } from "components/ui";

import { Controls } from "./components/Controls";
import { List } from "./components/List";

const MainPage = () => {
  const { countries } = useSelector((state) => state.country);
  console.log("Main page countries", countries);

  const [filteredCountries, setFilteredCountries] = useState(countries.data.results);
  console.log("filteredCountries", filteredCountries);
  // const handleSearch = (search, region) => {
  //   let data = [...countries.data];

  //   if (region) {
  //     data = data.filter((c) => c.region.includes(region));
  //   }

  //   if (search) {
  //     data = data.filter((c) =>
  //       c.name.toLowerCase().includes(search.toLowerCase())
  //     );
  //   }

  //   setFilteredCountries(data);
  // };

  // useEffect(() => {
  //   handleSearch();
  //   // eslint-disable-next-line
  // }, [countries]);
  return (
    <>
      <Container>
        {/* <Controls onSearch={handleSearch} /> */}
        <List countries={filteredCountries} />
      </Container>
    </>
  );
};

export default MainPage;
