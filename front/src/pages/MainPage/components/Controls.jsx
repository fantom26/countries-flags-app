// import { useEffect, useState } from "react";
import styled from "styled-components";
import { textColor } from "theme";

import { useDispatchedActions } from "hooks";

import { IconSvg } from "utils/constants";

// import { CustomSelect } from "./CustomSelect";
// import { Search } from "./Search";

// const options = [
//   { value: "Africa", label: "Africa" },
//   { value: "America", label: "America" },
//   { value: "Asia", label: "Asia" },
//   { value: "Europe", label: "Europe" },
//   { value: "Oceania", label: "Oceania" }
// ];

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const ListOrGrid = styled.div`
  align-items: center;
  display: flex;

  button {
    svg {
      rect {
        fill: ${textColor};
      }
    }
  }

  button + button {
    margin-left: 2rem;
  }
`;

// export const Controls = ({ onSearch }) => {
export const Controls = () => {
  // const [searchStr, setSearchStr] = useState("");
  // const [region, setRegion] = useState("");

  // useEffect(() => {
  //   const regionValue = region?.value || "";
  //   onSearch(searchStr, regionValue);

  //   // eslint-disable-next-line
  // }, [searchStr, region]);

  const { toggleView } = useDispatchedActions();

  return (
    <Wrapper>
      {/* <Search searchStr={searchStr} setSearchStr={setSearchStr} /> */}
      {/* <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      /> */}
      <ListOrGrid>
        <button tag="list" onClick={toggleView}>
          <IconSvg tag="list" />
        </button>
        <button tag="grid" onClick={toggleView}>
          <IconSvg tag="grid" />
        </button>
      </ListOrGrid>
    </Wrapper>
  );
};
