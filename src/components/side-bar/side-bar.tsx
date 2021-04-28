import React from "react";
import cn from "classnames";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelelctor";
import Filter from "./filter";

const SideBar: React.FC = () => {
  const { OpenAction } = useActions();
  const { isOpen } = useTypedSelector((state) => ({ ...state.filter }));

  return (
    <aside className="sidebar">
      <button
        className="sidebar__toggle-btn btn"
        type="button"
        hidden
        onClick={OpenAction}
      >
        Фильтер
        <span
          className={cn("sidebar__btn-icon", { "filter--close": isOpen })}
        ></span>
      </button>
      <Filter />
    </aside>
  );
}

export default SideBar;
