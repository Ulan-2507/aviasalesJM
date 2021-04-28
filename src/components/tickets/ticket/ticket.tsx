import React from "react";
import "./ticket.scss";
import { TicketData } from "../../../types/ticket";

import Flights from "./flights/flights";
type PropsType = {
  data: TicketData;
};

const Ticket: React.FC<PropsType> = ({ data }) => {
  const { price, carrier, segments } = data;
  return (
    <li className="ticket">
      <div className="ticket__row">
        <div className="ticket__price">{price} P</div>
        <div className="ticket__aviaLogo">
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="avialogo" />
        </div>
      </div>
      <Flights segments={segments} />
    </li>
  );
};

export default Ticket;
