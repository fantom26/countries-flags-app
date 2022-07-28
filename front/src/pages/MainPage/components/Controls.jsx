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

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const ListOrGrid = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  margin-right: 2rem;

  @media (max-width: 767px) {
    margin-right: initial;
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
  const { regions } = useSelector((state) => state.country.countries);
  const { region } = useSelector((state) => state.country);

  const options = regions.map((region) => ({ value: region, label: region }));

  const { toggleView, regionToggler } = useDispatchedActions();

  const regionHandler = (region) => {
    regionToggler(region);
  };

  return (
    <Wrapper>
      <Search />
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
        onChange={(e) => regionHandler(e)}
        components={{
          IndicatorSeparator: () => null
        }}
      />
    </Wrapper>
  );
};
