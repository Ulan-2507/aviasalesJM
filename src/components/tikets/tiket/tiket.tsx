import React from "react";
import aviaLogo from "../../../img/tiket-logo.svg";
import "./tiket.scss";

import Flights from "./flights/flights";

function Tiket() {
  return (
    <li className="tiket">
      <div className="tiket__header">
        <span className="tiket__price">13 400 Р </span>
        <span className="tiket__logo">
          <img src={aviaLogo} alt="avialogo" />
        </span>
      </div>
      <Flights />
    </li>
  );
}

export default Tiket;
