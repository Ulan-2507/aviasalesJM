import React from "react";
import { FilterActions } from "../../../types/filter";

type PropsType = {
  value: string;
  show: boolean;
  handler: () => FilterActions;
};

const FilterItem: React.FC<PropsType> = ({ value, show, handler }) => {
  return (
    <li className={"filter__item"} tabIndex={1}>
      <label className="check">
        <input
          className="check__input"
          type="checkbox"
          onChange={handler}
          checked={show}
        />
        <span className="check__box"></span>
        {value}
      </label>
    </li>
  );
}

export default FilterItem;
