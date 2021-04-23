import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelelctor";
import { useActions } from "../../../hooks/useActions";
import FilterItem from "../filter-item";
import "./filter.scss";

const Filter = () => {
  const {
    all,
    withoutTransfers,
    oneTransfer,
    twoTransfer,
    threeTransfer,
  } = useTypedSelector(state => ({...state.filter}));
  const {
    AllAction,
    WithoutTransferAction,
    OneTransferAction,
    TwoTransferAction,
    ThreeTransferAction,
  } = useActions();

  return (
    <div className="filter">
      <h3 className="filter__title">Количество пересадок</h3>
      <ul className="filter__list">
        <FilterItem 
          value="Все"
          show={all}
          handler={AllAction} />
        <FilterItem
          value="Без пересадок"
          show={withoutTransfers}
          handler={WithoutTransferAction}
        />
        <FilterItem
          value="1 пересадка"
          show={oneTransfer}
          handler={OneTransferAction}
        />
        <FilterItem
          value="2 пересадка"
          show={twoTransfer}
          handler={TwoTransferAction}
        />
        <FilterItem
          value="3 пересадки"
          show={threeTransfer}
          handler={ThreeTransferAction}
        />
      </ul>
    </div>
  );
};

export default Filter;
