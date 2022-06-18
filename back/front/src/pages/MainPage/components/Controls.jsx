import { useEffect, useState } from "react";

import styled from "styled-components";

import { CustomSelect } from "./CustomSelect";
import { Search } from "./Search";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" }
];

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Controls = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(searchStr, regionValue);

    // eslint-disable-next-line
  }, [searchStr, region]);

  return (
    <Wrapper>
      <Search searchStr={searchStr} setSearchStr={setSearchStr} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};
