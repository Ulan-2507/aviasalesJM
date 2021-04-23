import React from "react";
import "./tikets.scss";

import Tiket from "./tiket";

function Tikets() {
  return (
    <section className="tikets">
      <nav className="tikets__nav">
        <button className="tikets__link btn">Самый дешевый</button>
        <button className="tikets__link btn">Самый быстрый</button>
        <button className="tikets__link btn">Оптимальный</button>
      </nav>
      <ul className="tikets__list">
        <Tiket />
        <Tiket />
        <Tiket />
      </ul>
      <button className="tikets__show-btn btn">Показать еще 5 билетов!</button>
    </section>
  );
}

export default Tikets;
