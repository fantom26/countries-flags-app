import { useState } from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";
import { textColor } from "theme";

import { useDispatchedActions } from "hooks";

import { IconSvg } from "utils/constants";

import { CustomSelect } from "./CustomSelect";
import { Search } from "./Search";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    align-items: initial;
    flex-direction: column;
  }
`;

const ListOrGrid = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  margin-right: 2rem;

  @media (max-width: 576px) {
    margin-left: initial;
    margin-right: initial;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

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

export const Controls = () => {
  const [searchStr, setSearchStr] = useState("");
  const [region, setRegion] = useState("");

  const { regions } = useSelector((state) => state.country.countries);

  const options = regions.map((region) => ({ value: region, label: region }));

  const { toggleView } = useDispatchedActions();

  return (
    <Wrapper>
      <Search searchStr={searchStr} setSearchStr={setSearchStr} />
      <ListOrGrid>
        <button tag="list" onClick={toggleView}>
          <IconSvg tag="list" />
        </button>
        <button tag="grid" onClick={toggleView}>
          <IconSvg tag="grid" />
        </button>
      </ListOrGrid>
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
