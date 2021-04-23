import React from "react";

import Filter from "./filter";

function SideBar() {
  return (
    <aside className="sidebar">
      <button className="sidebar__toggle-btn btn" type="button" hidden>
        Фильтер
        <span className="sidebar__btn-icon"></span>
      </button>
      <Filter />
    </aside>
  );
}

export default SideBar;
