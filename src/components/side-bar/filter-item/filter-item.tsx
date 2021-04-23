import React from "react";
import { FilterActions } from "../../../types/filter";
type IProps = {
  value: string;
  show: boolean;
  handler: () => FilterActions;
};

function FilterItem({ value, show, handler }: IProps) {
  return (
    <li className="filter__item selected-item">
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
